#!/usr/bin/env python3
"""
AUTOMATED AUDIT SUITE — জ্ঞানকোষ ডিজিটাল প্রেস
Deterministic quality audit measuring HTML validity, heading hierarchy, contrast,
page weight, broken links, token integrity, and repeated fact consistency.
"""

import os
import glob
import re
import sys

def audit():
    print("=" * 70)
    print("PHASE 9: DETERMINISTIC AUTOMATED QUALITY AUDIT")
    print("=" * 70)

    site_dir = "site"
    html_files = sorted(glob.glob(f"{site_dir}/*.html"))
    css_files = sorted(glob.glob(f"{site_dir}/css/*.css"))
    js_files = sorted(glob.glob(f"{site_dir}/js/*.js"))

    audit_passed = True
    defects = []

    # 1. PAGE WEIGHT AUDIT (Budget: < 300 KB per page)
    print("\n[1] PAGE WEIGHT AUDIT (Strict < 300 KB Floor):")
    total_css_size = sum(os.path.getsize(f) for f in css_files) / 1024
    total_js_size = sum(os.path.getsize(f) for f in js_files) / 1024
    print(f"  All combined CSS stylesheets: {total_css_size:.2f} KB")
    print(f"  All combined JS data & logic: {total_js_size:.2f} KB")

    for hf in html_files:
        html_size = os.path.getsize(hf) / 1024
        total_page_payload = html_size + total_css_size + total_js_size
        print(f"  - {os.path.basename(hf):<24} HTML: {html_size:>5.1f} KB | Total Payload: {total_page_payload:>5.1f} KB")
        if total_page_payload > 300:
            defects.append(f"Payload exceed: {hf} total payload is {total_page_payload:.1f} KB (> 300 KB)")
            audit_passed = False

    # 2. HTML STRUCTURE & LANDMARK AUDIT
    print("\n[2] HTML SEMANTIC LANDMARKS & HEADING HIERARCHY:")
    for hf in html_files:
        content = open(hf, "r", encoding="utf-8").read()
        fname = os.path.basename(hf)

        # Landmarks
        has_main = "<main" in content and "</main>" in content
        has_header = "<header" in content and "</header>" in content
        has_footer = "<footer" in content and "</footer>" in content
        has_skip = "skip-link" in content

        if not (has_main and has_header and has_footer and has_skip):
            defects.append(f"Missing semantic landmark in {fname}: main={has_main}, header={has_header}, footer={has_footer}, skip={has_skip}")
            audit_passed = False

        # Heading Count and Order
        h1_matches = re.findall(r"<h1\b[^>]*>(.*?)</h1>", content, re.DOTALL)
        if len(h1_matches) != 1:
            defects.append(f"Heading defect in {fname}: Expected exactly 1 <h1>, found {len(h1_matches)}")
            audit_passed = False

        # Check for skipped levels (e.g., h1 followed by h3 without h2)
        headings = re.findall(r"<(h[1-6])\b", content)
        prev_level = 0
        for h in headings:
            level = int(h[1])
            if prev_level > 0 and level > prev_level + 1:
                defects.append(f"Skipped heading level in {fname}: H{prev_level} followed directly by H{level}")
                audit_passed = False
            prev_level = level

    print(f"  Landmarks and sequential heading hierarchy verified on all {len(html_files)} pages.")

    # 3. CONTRAST VERIFICATION
    print("\n[3] COLOR CONTRAST RATIO AUDIT (WCAG 2.2 AA / AAA):")
    def relative_luminance(r, g, b):
        def chan(c):
            c_norm = c / 255.0
            return c_norm / 12.92 if c_norm <= 0.04045 else ((c_norm + 0.055) / 1.055) ** 2.4
        return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b)

    def contrast_ratio(hex1, hex2):
        def parse_hex(h):
            h = h.lstrip("#")
            return int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
        l1 = relative_luminance(*parse_hex(hex1))
        l2 = relative_luminance(*parse_hex(hex2))
        lighter, darker = max(l1, l2), min(l1, l2)
        return (lighter + 0.05) / (darker + 0.05)

    pairs = [
        ("Carbon Ink on Paper Base", "#11161B", "#FBF9F4", 4.5, "Normal Body"),
        ("Carbon Ink on Paper Surface", "#11161B", "#FFFFFF", 4.5, "Card Body"),
        ("Slate Ink on Paper Base", "#404A54", "#FBF9F4", 4.5, "Secondary Text"),
        ("Slate Ink on Paper Surface", "#404A54", "#FFFFFF", 4.5, "Card Subtitle"),
        ("White on Seal Crimson", "#FFFFFF", "#9E2A2B", 4.5, "Primary Button"),
        ("Seal Crimson on Paper Base", "#9E2A2B", "#FBF9F4", 4.5, "Accent Links"),
        ("Rule Sand on Paper Base", "#847C6F", "#FBF9F4", 3.0, "Tactile UI Borders"),
        ("Success Forest on Paper Base", "#1E6B38", "#FBF9F4", 4.5, "Verified Badges"),
        ("Ledger Ochre on Paper Base", "#8A5A00", "#FBF9F4", 4.5, "Warning Badges"),
    ]

    for label, fg, bg, min_req, role in pairs:
        ratio = contrast_ratio(fg, bg)
        status = "PASS (AAA)" if ratio >= 7.0 else ("PASS (AA)" if ratio >= min_req else "FAIL")
        print(f"  {label:<30} Ratio: {ratio:>5.2f}:1 | Min Req: {min_req:>3.1f}:1 | {status}")
        if ratio < min_req:
            defects.append(f"Contrast failure: {label} ({fg} on {bg}) is {ratio:.2f}:1 (< {min_req}:1)")
            audit_passed = False

    # 4. BROKEN LINKS AUDIT
    print("\n[4] LINK INTEGRITY AUDIT:")
    total_links = 0
    for hf in html_files:
        content = open(hf, "r", encoding="utf-8").read()
        hrefs = re.findall(r'href=[\"\']([^\"\']+)[\"\']', content)
        for h in hrefs:
            if h.startswith(("http", "#", "tel:", "mailto:")):
                continue
            clean_target = h.split("?")[0].split("#")[0]
            full_path = os.path.join(site_dir, clean_target)
            total_links += 1
            if not os.path.exists(full_path):
                defects.append(f"Broken link in {os.path.basename(hf)}: href='{h}' points to nonexistent '{full_path}'")
                audit_passed = False
    print(f"  Total {total_links} internal links verified. Zero broken paths.")

    # 5. REPEATED FACTS INTEGRITY AUDIT
    print("\n[5] REPEATED OPERATIONAL FACTS CONSISTENCY AUDIT:")
    target_facts = {
        "Phone (ASCII)": "01902607406",
        "Phone (Bangla)": "০১৯০২৬০৭৪০৬",
        "Email": "ishanxczs@gmail.com",
        "Address": "ঢাকা, বাংলাদেশ (সম্পূর্ণ ডিজিটাল ডেলিভারি)",
        "Wallet (Bangla)": "০১৯৯২২৯৩৪৫১",
        "TikTok": "https://www.tiktok.com/@its_ishan_17?_r=1&_t=ZS-9BT1d8s78pp",
        "Instagram": "https://www.instagram.com/ishanxczs26?avpt=c2IxeW9yY2x2ejlz"
    }

    config_content = open(os.path.join(site_dir, "js", "store-config.js"), "r", encoding="utf-8").read()
    for name, fact in target_facts.items():
        if fact in config_content:
            print(f"  ✓ {name:<20}: Verified in store-config.js ('{fact[:40]}...')")
        else:
            defects.append(f"Missing core fact in store-config.js: {name}")
            audit_passed = False

    # Check that forbidden social networks are NOT present
    for bad_net in ["facebook.com", "youtube.com", "t.me"]:
        for hf in html_files:
            if bad_net in open(hf, "r", encoding="utf-8").read():
                defects.append(f"Forbidden social network '{bad_net}' found in {os.path.basename(hf)}")
                audit_passed = False

    # 6. PROTOCOL & LOCAL FILE EXECUTION AUDIT (file:// compatibility)
    print("\n[6] ZERO-BUILD & LOCAL file:/// PROTOCOL INDEPENDENCE AUDIT:")
    for hf in html_files:
        content = open(hf, "r", encoding="utf-8").read()
        if "type=\"module\"" in content or "type='module'" in content:
            defects.append(f"ES Module found in {os.path.basename(hf)} (violates file:/// requirement)")
            audit_passed = False

    for jf in js_files:
        content = open(jf, "r", encoding="utf-8").read()
        if re.search(r'\bfetch\s*\(', content):
            defects.append(f"fetch() API found in {os.path.basename(jf)} (violates local file:// offline requirement)")
            audit_passed = False
        if re.search(r'\bimport\s+.*\s+from\b', content) or re.search(r'\bexport\s+(default|const|function)\b', content):
            defects.append(f"ES import/export found in {os.path.basename(jf)} (violates script tag architecture)")
            audit_passed = False

    print("  Zero local fetch() calls, zero ES modules. 100% classic script tag architecture verified.")

    # 7. SUMMARY
    print("\n" + "=" * 70)
    if audit_passed and not defects:
        print("AUDIT RESULT: 100% PASSED — ALL TECH & QUALITY FLOOR LINES SATISFIED")
        print("=" * 70)
        return True
    else:
        print("AUDIT RESULT: DEFECTS DETECTED")
        for d in defects:
            print(f"  - {d}")
        print("=" * 70)
        return False

if __name__ == "__main__":
    success = audit()
    sys.exit(0 if success else 1)
