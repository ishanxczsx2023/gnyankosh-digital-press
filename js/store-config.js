/**
 * STORE CONFIGURATION — জ্ঞানকোষ ডিজিটাল প্রেস
 * Single source of truth for all store metadata, contact details, payment setup and policy facts.
 * Never hard-code these details inside HTML pages.
 */

window.STORE_CONFIG = {
  // [দোকানের নাম - চিহ্নিত প্লেসহোল্ডার / MARKED STORE NAME PLACEHOLDER]
  storeName: "জ্ঞানকোষ ডিজিটাল প্রেস",
  brandSubtitle: "DIGITAL PRESS",
  tagline: "মুদ্রিত মানের নির্ভরযোগ্য ডিজিটাল নোট, ই-বুক ও রেডি-মেড ওয়েবসাইট",

  // Currency & Digit Style (Bangladeshi Taka with full Bengali numeral localization)
  currency: "৳",
  currencyCode: "BDT",
  useBengaliDigits: true,

  // Contact & Support (Official Client Details)
  phone: "01902607406",
  whatsapp: "01902607406",
  phoneFormatted: "০১৯০২৬০৭৪০৬",
  whatsappUrl: "https://wa.me/8801902607406",
  email: "ishanxczs@gmail.com",

  // Physical / Operational Base
  address: "ঢাকা, বাংলাদেশ (সম্পূর্ণ ডিজিটাল ডেলিভারি)",

  // Verified Social Channels (Strictly TikTok & Instagram per brief)
  social: {
    tiktok: "https://www.tiktok.com/@its_ishan_17?_r=1&_t=ZS-9BT1d8s78pp",
    tiktokHandle: "@its_ishan_17",
    instagram: "https://www.instagram.com/ishanxczs26?avpt=c2IxeW9yY2x2ejlz",
    instagramHandle: "@ishanxczs26"
  },

  // Payment Setup & Simulated Flow Details
  payment: {
    // [ওয়ালেট প্রোভাইডার নাম চিহ্নিত প্লেসহোল্ডার / MARKED WALLET PROVIDER PLACEHOLDER]
    walletTypePlaceholder: "মোবাইল ওয়ালেট (বিকাশ / নগদ / রকেট)",
    accountNumber: "01992293451",
    accountNumberFormatted: "০১৯৯২২৯৩৪৫১",
    instructionsBangla: "আপনার মোবাইল ওয়ালেট অ্যাপ বা ডায়াল কোড ব্যবহার করে উপরের নম্বরে নির্ধারিত মূল্য Send Money করুন। এরপর ফিরতি এসএমএস-এ প্রাপ্ত Transaction ID (TrxID) নিচে প্রদান করে অর্ডার সম্পন্ন করুন।",
    notice: "চেকআউট সম্পূর্ণ সিমুলেটেড; TrxID সাবমিট করলেই স্ক্রিনে সাথে সাথে ডাউনলোড শুরু হবে এবং আপনার ডিভাইসের লাইব্রেরিতে যুক্ত হবে।"
  },

  // Download & Refund Terms (Per Client Answer)
  terms: {
    downloadLimit: "একই ডিভাইসে 'আমার লাইব্রেরি' থেকে আজীবন বিনামূল্যে যতবার ইচ্ছা পুনরায় ডাউনলোড করা যাবে।",
    refundPolicy: "ফাইলে কোনো ত্রুটি বা ভুল সংস্করণ পাওয়া গেলে ক্রয়ের ২৪ ঘণ্টার মধ্যে যোগাযোগ করলে তাত্ক্ষণিক প্রতিস্থাপন বা সমমূল্যের ক্রেডিট দেওয়া হবে। ডাউনলোড সম্পন্ন হওয়ার পর কোনো ক্যাশ রিফান্ড প্রদান করা হয় না।",
    licenseNotes: "একক ব্যবহারকারী ব্যক্তিগত অধ্যয়ন লাইসেন্স। কোনো বাণিজ্যিক পুনরুৎপাদন বা পুনর্বিক্রয় নিষিদ্ধ।",
    licenseWebsites: "একক ওয়েবসাইট ব্যবহারের জন্য কমার্শিয়াল লাইসেন্স (Single-site use license per purchase)।"
  },

  // Support Operating Hours [চিহ্নিত প্লেসহোল্ডার / MARKED PLACEHOLDER]
  supportHoursPlaceholder: "প্রতিদিন সকাল ৯:০০ – রাত ১০:০০ (WhatsApp-এ দ্রুত রেসপন্স)",

  // Valid Promotional Coupons
  coupons: {
    "STUDENT10": { type: "percent", value: 10, label: "১০% শিক্ষার্থী ছাড়" },
    "SHIKKHA20": { type: "percent", value: 20, label: "২০% বিশেষ শিক্ষা ছাড়" },
    "OFFER50": { type: "flat", value: 50, minSubtotal: 200, label: "৫০ টাকা ফ্ল্যাট ছাড়" }
  }
};
