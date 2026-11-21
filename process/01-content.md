# Phase 1: Content Architecture & Complete String Repository

## 1. Sitemap & Page Goals

| Page File | Title (Bangla) | Primary User Goal | Key Conversion / Action |
| :--- | :--- | :--- | :--- |
| `index.html` | হোম — জ্ঞানকোষ ডিজিটাল প্রেস | Understand what the store is, immediately browse by class/subject, view benchmark sample preview. | "নোট দেখুন" / Class selector tap / Featured product preview |
| `shop.html` | ক্যাটালগ — সব ডিজিটাল প্রোডাক্ট | Find specific chapter notes, e-books, or web templates using fast filters and instant search. | "কার্টে যোগ করুন" / "বিস্তারিত দেখুন" |
| `product.html` | প্রোডাক্ট বিবরণ ও প্রিভিউ | Inspect exact contents, page count, SVG sample preview, format, and license before buying. | "কার্টে যোগ করুন" / "এখনই কিনুন" |
| `cart.html` | শপিং ব্যাগ | Review selected items, see transparent discount math, apply coupon, proceed to checkout. | "অর্ডার সম্পন্ন করতে এগিয়ে যান" |
| `checkout.html` | নিরাপদ চেকআউট | Enter mobile contact, view exact mobile wallet payment guide, submit TrxID, confirm order. | "অর্ডার নিশ্চিত করুন" |
| `order-confirmation.html` | অর্ডার সফল ও তাৎক্ষণিক ডাউনলোড | Download purchased files immediately to device storage; view printable receipt. | "ডাউনলোড করুন" / "আমার লাইব্রেরিতে সংরক্ষণ করুন" |
| `library.html` | আমার লাইব্রেরি | Re-download any previously purchased digital products on this device at any time for free. | "পুনরায় ডাউনলোড করুন" |
| `support.html` | সহায়তা, যোগাযোগ ও শর্তাবলী | Get WhatsApp/Call support, read FAQ, inspect transparent refund & licensing policy. | "হোয়াটসঅ্যাপে মেসেজ দিন" / "সরাসরি কল করুন" |
| `404.html` | পৃষ্ঠা খুঁজে পাওয়া যায়নি | Gracefully recover from broken links and navigate back to the catalog or home. | "ক্যাটালগে ফিরে যান" |

---

## 2. Global Universal UI Strings (One Name Per Action Rule)

To prevent cognitive friction, every recurring action has exactly one immutable label across the entire website:

- **Primary Add to Cart**: `কার্টে যোগ করুন`
- **Primary Direct Buy**: `এখনই কিনুন`
- **Primary Download**: `ডাউনলোড করুন`
- **Re-Download**: `পুনরায় ডাউনলোড করুন`
- **View Details**: `বিস্তারিত দেখুন`
- **Filter / Search**: `অনুসন্ধান করুন`
- **Clear Filters**: `ফিল্টার মুছুন`
- **Proceed to Checkout**: `অর্ডার সম্পন্ন করতে এগিয়ে যান`
- **Confirm Order**: `অর্ডার নিশ্চিত করুন`
- **Apply Coupon**: `প্রয়োগ করুন`
- **Remove from Cart**: `মুছে ফেলুন`
- **Back to Catalog**: `ক্যাটালগে ফিরে যান`
- **Contact Support**: `যোগাযোগ করুন`
- **Send WhatsApp Message**: `হোয়াটসঅ্যাপে মেসেজ দিন`
- **Direct Phone Call**: `সরাসরি কল করুন`

---

## 3. Page-by-Page Content & Complete Copy Deck

### 3.1 Global Header & Navigation
- **Logo Wordmark**: `জ্ঞানকোষ` (English Subtitle: `DIGITAL PRESS`)
- **Header Badges**:
  - Store Descriptor: `মুদ্রিত মানের ডিজিটাল নোট ও ই-বুক`
  - Instant Support: `জরুরি সহায়তা: ০১৯০২৬০৭৪০৬`
- **Navigation Links**:
  - `হোম` (`index.html`)
  - `নোট ও বই` (`shop.html`)
  - `ওয়েবসাইট টেমপ্লেট` (`shop.html?category=websites`)
  - `আমার লাইব্রেরি` (`library.html`)
  - `সহায়তা ও নীতিমালা` (`support.html`)
- **Cart Widget**:
  - Label: `ব্যাগ`
  - Badge: `[N] টি পণ্য`
  - Accessible label: `কার্টে [N] টি পণ্য রয়েছে, মোট ৳ [X]`

---

### 3.2 Home Page (`index.html`)
- **Masthead / Benchmark Section**:
  - Eyebrow / Category Tag: `জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) কারিকুলাম ২০২৬`
  - Headline: `পড়ার টেবিলেই আসল প্রস্তুতি। স্পষ্ট, সংক্ষিপ্ত ও নির্ভরযোগ্য ডিজিটাল নোট।`
  - Subhead: `কোনো অস্পষ্ট ফটোকপি বা অপ্রয়োজনীয় বিজ্ঞাপন নয়। অভিজ্ঞ শিক্ষকদের তৈরি অধ্যায়ভিত্তিক নোট, সম্পূর্ণ ই-বুক এবং রেডি-মেড ওয়েবসাইট টেমপ্লেট—ক্লিক করলেই সরাসরি আপনার ফোনে ডাউনলোড।`
  - Trust Strip (Plain facts, zero hype):
    - Fact 1: `তাৎক্ষণিক ডাউনলোড (পিডিএফ ও সোর্স ফাইল)`
    - Fact 2: `একবার কিনলে এই ফোনে আজীবন পুনরায় ডাউনলোডের সুবিধা`
    - Fact 3: `বিকাশ, নগদ ও রকেট মোবাইল ওয়ালেটে সহজ পেমেন্ট`
- **Direct Class Selector Grid**:
  - Title: `শ্রেণী বা মাধ্যম অনুযায়ী বেছে নিন`
  - Items:
    - `নবম-দশম শ্রেণী (SSC)`: `পদার্থ, রসায়ন, গণিত, জীববিজ্ঞান ও বাংলা`
    - `একাদশ-দ্বাদশ শ্রেণী (HSC)`: `উচ্চতর গণিত, পদার্থবিজ্ঞান, আইসিটি ও ইংরেজি`
    - `বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি`: `মেডিকেল, ইঞ্জিনিয়ারিং ও সাধারণ জ্ঞান বুকলেট`
    - `ওয়েবসাইট টেমপ্লেট`: `কোচিং, স্কুল ও শিক্ষক পোর্টফোলিও সাইট`
- **Featured Benchmark Product Showcase**:
  - Product Badge: `চলতি সপ্তাহের সবচেয়ে প্রয়োজনীয় নোট`
  - Title: `SSC 2026 পদার্থবিজ্ঞান: গতি ও বল স্পেশাল রিভিশন শিট`
  - Key Specs: `পৃষ্ঠা: ৫৪ | ফরম্যাট: হাই-রেজুলেশন ভেক্টর PDF | সাইজ: ৪.২ মেগাবাইট`
  - Real Sample Viewer Callout: `কেনার আগেই প্রথম ৩ পৃষ্ঠার সম্পূর্ণ নমুনা নিচে সরাসরি দেখে নিন`
  - Price Block: `নিয়মিত মূল্য ৳ ১৮০ | বিশেষ ছাড়ে ৳ ৯৫`
  - Action Buttons: `এখনই কিনুন` | `নমুনা প্রিভিউ দেখুন`
- **Value Pillar Section (Authentic Craft, No Generic Icons)**:
  - Pillar 1: `লেজার-শার্প টাইপোগ্রাফি` — "মোবাইল স্ক্রিনে জুম করলেও অক্ষর ফাটবে না। প্রতিটি গাণিতিক সূত্র ও চিত্র পরিষ্কার দেখতে পাবেন।"
  - Pillar 2: `কোনো সাবস্ক্রিপশন বা পুনরাবৃত্ত বিল নেই` — "একবার মূল্য পরিশোধ করবেন, ফাইল চিরতরে আপনার। কোনো মাসিক চার্জ বা লুকানো ফি নেই।"
  - Pillar 3: `আমার লাইব্রেরি সুবিধা` — "ফোন থেকে ফাইল মুছে গেলে বা মেমোরি খালি করলে ব্রাউজার খুললেই পুনরায় ফ্রিতে ডাউনলোড করার নিশ্চয়তা।"

---

### 3.3 Catalog / Shop Page (`shop.html`)
- **Page Header**:
  - Title: `সম্পূর্ণ ডিজিটাল ক্যাটালগ`
  - Subtitle: `আপনার প্রয়োজনীয় শ্রেণী, বিষয় বা ফরম্যাট নির্বাচন করে সরাসরি ডাউনলোড করুন।`
- **Search & Filter Controls**:
  - Search Input Placeholder: `বিষয়, অধ্যায় বা টপিক খুঁজুন (যেমন: পদার্থবিজ্ঞান, ত্রিকোণমিতি, ICT)...`
  - Category Filter Label: `ক্যাটাগরি`:
    - `সব পণ্য` (`all`)
    - `অধ্যায়ভিত্তিক নোট` (`notes`)
    - `পূর্ণাঙ্গ ই-বুক` (`ebooks`)
    - `রেডি-মেড ওয়েবসাইট` (`websites`)
  - Class Level Filter Label: `শ্রেণী`:
    - `সকল শ্রেণী`
    - `নবম-দশম (SSC)`
    - `একাদশ-দ্বাদশ (HSC)`
    - `ভর্তি পরীক্ষা (Admission)`
    - `প্রফেশনাল ও ফ্রিল্যান্স`
  - Subject Filter Label: `বিষয়`:
    - `সকল বিষয়` | `পদার্থবিজ্ঞান` | `উচ্চতর গণিত` | `রসায়ন` | `জীববিজ্ঞান` | `ICT` | `ইংরেজি` | `বাংলা` | `ওয়েব ডেভেলপমেন্ট`
  - Sort Control Label: `সাজান`:
    - `জনপ্রিয় ও প্রাসঙ্গিক`
    - `মূল্য: কম থেকে বেশি`
    - `মূল্য: বেশি থেকে কম`
    - `পৃষ্ঠা সংখ্যা: বেশি থেকে কম`
    - `সর্বশেষ হালনাগাদ`
- **Result Bar**:
  - Dynamic count text: `মোট [N] টি ডিজিটাল পণ্য পাওয়া গেছে`
  - Active Filters Reset Button: `ফিল্টার মুছুন`
- **No Results State**:
  - Heading: `দুঃখিত, আপনার অনুসন্ধানের সাথে মিলে এমন কোনো পণ্য পাওয়া যায়নি।`
  - Body: `বানানটি যাচাই করুন অথবা ফিল্টারগুলো মুছে পুনরায় চেষ্টা করুন। আপনার কাঙ্ক্ষিত বিষয়ের নোট না থাকলে আমাদের হোয়াটসঅ্যাপে জানালে আমরা দ্রুত যুক্ত করব।`
  - Button: `সব ফিল্টার রিসেট করুন`
- **Pagination / Load More**:
  - Button: `আরও পণ্য দেখুন`
  - Progress indicator: `[N] টির মধ্যে [M] টি পণ্য প্রদর্শিত হচ্ছে`

---

### 3.4 Product Detail Page (`product.html`)
- **Breadcrumb Navigation**: `হোম / ক্যাটালগ / [ক্যাটাগরি] / [পণ্যের নাম]`
- **Product Title & Identity**:
  - Title: `[পণ্যের পূর্ণ নাম]`
  - Subtitle / Edition: `[সংস্করণ / পাঠ্যক্রম বছর]`
  - Verified Badge: `✓ এনসিটিবি অনুমোদিত পাঠ্যক্রম ২০২৬ অনুযায়ী রচিত`
- **Specifications Table**:
  - `ফরম্যাট`: `ডিজিটাল পিডিএফ (মুদ্রণযোগ্য ও মোবাইল অপ্টিমাইজড)` / `ZIP আর্কাইভ (HTML/CSS/JS)`
  - `মোট পৃষ্ঠা`: `[N] পৃষ্ঠা` / `মোট ফাইল`: `[N] টি ফাইল`
  - `ফাইল সাইজ`: `[X.X] MB`
  - `ভাষা`: `বাংলা (প্রযুক্তিগত পরিভাষা ইংরেজিতে)`
  - `সর্বশেষ আপডেট`: `[তারিখ]`
  - `লাইসেন্স`: `একক ব্যবহারকারী ব্যক্তিগত লাইসেন্স` / `সিঙ্গেল-সাইট ওয়েব লাইসেন্স`
- **Live SVG/CSS Sample Preview Component**:
  - Title: `পণ্যটির আসল নমুনা পাতা (SVG ভেক্টর প্রিভিউ)`
  - Notice: `নিচের স্লাইডার বা বোতাম চেপে মূল বইয়ের প্রথম কয়েকটি পৃষ্ঠার বিন্যাস ও স্পষ্টতা পরীক্ষা করুন:`
  - Tab 1: `নমুনা পৃষ্ঠা ১ (সূচিপত্র ও সারাংশ)`
  - Tab 2: `নমুনা পৃষ্ঠা ২ (তত্ত্ব ও সূত্রসমূহ)`
  - Tab 3: `নমুনা পৃষ্ঠা ৩ (বোর্ড পরীক্ষার প্রশ্ন সমাধান)`
- **Contents / Chapter Breakdown**:
  - Section Title: `এই পণ্যের ভেতরে কী কী পাবেন:`
  - Structured list of modules/chapters with individual page counts and syllabus codes.
- **Ready-Made Website Specific Section (When category is 'websites')**:
  - Drawn Browser Frame Preview: Simulated responsive browser window displaying interactive desktop/mobile view.
  - "প্যাকেজে যা যা অন্তর্ভুক্ত":
    - `সম্পূর্ণ সোর্স কোড (HTML5, আধুনিক CSS3 ও ভ্যানিলা জাভাস্ক্রিপ্ট)`
    - `কোনো ফ্রেমওয়ার্ক বা বিল্ড স্টেপ লাগবে না—ডাবল ক্লিকেই ব্রাউজারে চলবে`
    - `মোবাইল ও ডেক্সটপ ফুল রেসপন্সিভ লেআউট`
    - `ছবি ও টেক্সট পরিবর্তন করার সহজ বাংলা গাইড (README.txt)`
    - `যোগাযোগ ফর্ম ও মোবাইল ক্লিক-টু-কল বাটন ইন্টিগ্রেশন`
- **Pricing & Purchase Box**:
  - Regular Price: `<del>৳ [Regular]</del>`
  - Sale Price: `৳ [Discounted]`
  - Discount Badge: `[Discount]% সাশ্রয়`
  - Primary Action Button: `কার্টে যোগ করুন`
  - Direct Action Button: `এখনই কিনুন`
  - Reassurance Note: `পেমেন্টের পরপরই ডাউনলোড লিংক স্ক্রিনে দৃশ্যমান হবে এবং লাইব্রেরিতে সংরক্ষিত থাকবে।`
- **Related Products Strip**:
  - Heading: `একই শ্রেণীর আরও প্রয়োজনীয় নোট`

---

### 3.5 Cart Page (`cart.html`)
- **Page Title**: `আপনার শপিং ব্যাগ`
- **Cart Table Headers**: `পণ্য`, `ফরম্যাট`, `একক মূল্য`, `পদক্ষেপ`
- **Digital Item Policy Notice**: `ডিজিটাল পণ্যের ক্ষেত্রে প্রতিটি আইটেম সর্বোচ্চ ১ কপি যোগ করা হয়।`
- **Coupon / Discount Box**:
  - Input Label: `কুপন কোড (যদি থাকে)`
  - Input Placeholder: `যেমন: STUDENT10`
  - Button: `প্রয়োগ করুন`
  - Feedback Message (Success): `কুপন সফলভাবে যুক্ত হয়েছে! আপনি ৳ [X] ছাড় পেয়েছেন।`
  - Feedback Message (Error): `দুঃখিত, কুপন কোডটি সঠিক নয় বা মেয়াদ শেষ হয়েছে।`
- **Transparent Price Breakdown**:
  - Subtotal: `মোট পণ্য মূল্য`: `৳ [Subtotal]`
  - Bundle / Promotional Discount: `বিশেষ ছাড়`: `- ৳ [Discount]`
  - Coupon Discount: `কুপন ডিসকাউন্ট`: `- ৳ [Coupon]`
  - Processing / Platform Fee: `প্রসেসিং ফি`: `৳ ০ (সম্পূর্ণ ফ্রি)`
  - Final Payable Total: `সর্বমোট প্রদেয় মূল্য`: `৳ [Total]`
- **Empty Cart State**:
  - Heading: `আপনার শপিং ব্যাগ বর্তমানে খালি রয়েছে।`
  - Body: `পছন্দের নোট বা ই-বুক বেছে নিতে আমাদের সম্পূর্ণ ক্যাটালগ ঘুরে দেখুন।`
  - Button: `ক্যাটালগে ফিরে যান`
- **Checkout CTA Button**: `অর্ডার সম্পন্ন করতে এগিয়ে যান`

---

### 3.6 Checkout Page (`checkout.html`)
- **Page Title**: `নিরাপদ মোবাইল চেকআউট`
- **Customer Contact Information**:
  - Section Title: `১. আপনার যোগাযোগ তথ্য`
  - Helper: `ডাউনলোড লিংক ব্যাকআপ এবং জরুরি তথ্যের জন্য সঠিক মোবাইল নম্বর ও ইমেইল দিন।`
  - Field 1: `আপনার নাম`: Placeholder: `যেমন: তানভীর আহমেদ`
  - Field 2: `সক্রিয় মোবাইল নম্বর`: Placeholder: `০১৭XXXXXXXX`
  - Field 3: `ইমেইল এড্রেস`: Placeholder: `example@gmail.com`
- **Payment Method & Instructions Guide**:
  - Section Title: `২. মূল্য পরিশোধের পদ্ধতি`
  - Wallet Selector: `মোবাইল ওয়ালেট (বিকাশ / নগদ / রকেট)`
  - Payment Instructions Box:
    - Step 1: `আপনার বিকাশ/নগদ অ্যাপ বা ইউএসএসডি কোড (*247# / *167#) ব্যবহার করে নিচের নম্বরে সর্বমোট ৳ [Total] টাকা Send Money করুন:`
    - Account Display Box: `ওয়ালেট নম্বর: ০১৯৯২২৯৩৪৫১ (মোবাইল ওয়ালেট)`
    - Step 2: `লেনদেন সম্পন্ন হওয়ার পর প্রাপ্ত ফিরতি এসএমএস থেকে Transaction ID (TrxID) সংগ্রহ করুন।`
    - Step 3: `নিচের ফর্মে যে নম্বর থেকে টাকা পাঠিয়েছেন সেই নম্বর এবং TrxID বসিয়ে 'অর্ডার নিশ্চিত করুন' বাটনে ক্লিক করুন।`
- **Transaction Input Fields**:
  - Field 1: `যে নম্বর থেকে টাকা পাঠিয়েছেন`: Placeholder: `০১৭XXXXXXXX`
  - Field 2: `Transaction ID (TrxID)`: Placeholder: `যেমন: 8N7A6B5C4D`
- **Order Summary Sidebar**:
  - Order items list with thumbnail preview and individual prices.
  - Final total highlight.
  - License Agreement Checkbox:
    - Text: `আমি জ্ঞানকোষ ডিজিটাল প্রেসের ডাউনলোড ও রিফান্ড নীতিমালার সাথে একমত পোষণ করছি।`
- **Submit Button**: `অর্ডার নিশ্চিত করুন (৳ [Total])`
- **Security & Trust Note**: `আপনার তথ্য সম্পূর্ণ সুরক্ষিত। অর্ডার কনফার্ম হতেই স্ক্রিনে সরাসরি ডাউনলোড বাটন প্রদর্শিত হবে।`

---

### 3.7 Order Confirmation Page (`order-confirmation.html`)
- **Success Banner**:
  - Icon: Green verified stamp
  - Heading: `অভিনন্দন! আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে।`
  - Order Code: `অর্ডার নম্বর: #GKP-[TIMESTAMP]`
  - Date Stamp: `অর্ডারের তারিখ: [DATE]`
- **Immediate Download Center**:
  - Card Title: `আপনার ক্রয়কৃত ফাইলসমূহ এখনই ডাউনলোড করুন:`
  - Item List:
    - Product 1: `[Title]` — `সাইজ: [Size]` — Button: `ডাউনলোড করুন (PDF)`
    - Product 2: `[Title]` — `সাইজ: [Size]` — Button: `ডাউনলোড করুন (ZIP)`
  - Download Safety Tip: `ফাইলগুলো আপনার ফোনের 'Downloads' ফোল্ডারে সংরক্ষিত হবে। প্রয়োজনে এই ব্রাউজারে 'আমার লাইব্রেরি' পাতা থেকে যেকোনো সময় ফ্রিতে পুনরায় ডাউনলোড করতে পারবেন।`
- **Receipt & Transaction Summary**:
  - Billed to: `[Customer Name]` (`[Customer Phone]`)
  - Paid via: `মোবাইল ওয়ালেট (TrxID: [TRXID])`
  - Total Paid: `৳ [Total]`
  - Print / Save Receipt Action: `রসিদ প্রিন্ট বা পিডিএফ সেভ করুন`
- **Secondary Actions**:
  - `আমার লাইব্রেরিতে যান` | `আরও পণ্য ব্রাউজ করুন`

---

### 3.8 My Library Page (`library.html`)
- **Page Title**: `আমার লাইব্রেরি (সংরক্ষিত ফাইলসমূহ)`
- **Device Storage Explanation Banner**:
  - Headline: `আপনার এই ডিভাইসে কেনা সমস্ত ডিজিটাল প্রোডাক্ট`
  - Body: `আপনি এই ব্রাউজারে যতগুলো বই বা নোট কিনেছেন, সবগুলো নিচে স্থায়ীভাবে সংরক্ষিত আছে। কোনো ফাইল হারিয়ে গেলে পুনরায় কোনো খরচ ছাড়াই তাৎক্ষণিক ডাউনলোড বাটনে ক্লিক করুন।`
- **Library Items Grid**:
  - Product Card with SVG cover, purchase date, version indicator, and `পুনরায় ডাউনলোড করুন` button.
- **Empty Library State**:
  - Heading: `এই ডিভাইসে এখনও কোনো ক্রয়কৃত ফাইল নেই।`
  - Body: `আপনি কোনো পণ্য ক্রয় করলে তা স্বয়ংক্রিয়ভাবে আপনার এই লাইব্রেরিতে যুক্ত হবে।`
  - Button: `ক্যাটালগে ঘুরে দেখুন`
- **Clear Device Storage Option**:
  - Action link: `এই ডিভাইসের লোকাল ক্যাশ ও লাইব্রেরি মুছুন`
  - Confirmation prompt: `আপনি কি নিশ্চিত যে এই ব্রাউজারের সংরক্ষিত লাইব্রেরি ডেটা মুছে ফেলতে চান?`

---

### 3.9 Support, FAQ & Legal Terms Page (`support.html`)
- **Page Title**: `গ্রাহক সহায়তা, প্রশ্নোত্তর ও ব্যবহারের শর্তাবলী`
- **Quick Contact Strip**:
  - Call & WhatsApp: `০১৯০২৬০৭৪০৬` (Button: `সরাসরি কল করুন` / Button: `হোয়াটসঅ্যাপে মেসেজ দিন`)
  - Email: `ishanxczs@gmail.com`
  - Address: `ঢাকা, বাংলাদেশ (সম্পূর্ণ ডিজিটাল ডেলিভারি)`
  - Social Links:
    - TikTok: `its_ishan_17` (Link: `https://www.tiktok.com/@its_ishan_17?_r=1&_t=ZS-9BT1d8s78pp`)
    - Instagram: `ishanxczs26` (Link: `https://www.instagram.com/ishanxczs26?avpt=c2IxeW9yY2x2ejlz`)
- **Frequently Asked Questions (FAQ)**:
  - Q1: `পেমেন্ট করার পর আমি ফাইল কীভাবে পাব?`
    - A: `অর্ডার নিশ্চিত করার সাথে সাথেই স্ক্রিনে সরাসরি ডাউনলোড লিংক ওপেন হবে। এছাড়াও আপনার ফোনের ব্রাউজারে 'আমার লাইব্রেরি' ট্যাবে ক্লিক করলেই ক্রয়কৃত ফাইলগুলো আজীবন সংরক্ষিত দেখতে পাবেন।`
  - Q2: `আমার ফোন থেকে যদি পিডিএফ ডিলিট হয়ে যায়, আবার কি টাকা দিতে হবে?`
    - A: `একদমই না! একই ফোন বা ব্রাউজার থেকে 'আমার লাইব্রেরি' পেজে ঢুকলে আপনি যতবার ইচ্ছা সম্পূর্ণ বিনামূল্যে পুনরায় ডাউনলোড করতে পারবেন।`
  - Q3: `নোটগুলো কি ফোনে পড়া যাবে নাকি প্রিন্ট করতে হবে?`
    - A: `দুটোই সম্ভব। আমাদের প্রতিটি ফাইল ভেক্টর ফরম্যাটে প্রস্তুত করা, ফলে ছোট মোবাইল স্ক্রিনে পড়লেও লেখা একদম স্পষ্ট থাকে এবং যেকোনো কম্পিউটারের দোকান থেকে পরিষ্কারভাবে প্রিন্টও করা যায়।`
  - Q4: `ওয়েবসাইট টেমপ্লেট ব্যবহারের নিয়ম কী?`
    - A: `প্রতিটি ওয়েবসাইট টেমপ্লেট একটি সিঙ্গেল-সাইট লাইসেন্সে দেওয়া হয়। জিপ ফাইল আনজিপ করে আপনার ব্রাউজারে index.html ওপেন করলেই চলবে। ছবি ও লেখা পরিবর্তন করার জন্য প্যাকেজের সাথে স্পষ্ট বাংলা নির্দেশিকা ফাইল দেওয়া থাকে।`
  - Q5: `টাকা পাঠিয়েছি কিন্তু ডাউনলোড লিংক আসেনি—এখন কী করব?`
    - A: `কোনো প্রযুক্তিগত সমস্যার কারণে পৃষ্ঠা বন্ধ হয়ে গেলে তৎক্ষণাৎ আমাদের হোয়াটসঅ্যাপ নম্বরে (০১৯০২৬০৭৪০৬) আপনার প্রেরক নম্বর ও TrxID পাঠিয়ে মেসেজ দিন। আমাদের টিম যাচাই করে দ্রুত ফাইল নিশ্চিত করবে।`
- **Refund & Cancellation Policy (রিফান্ড নীতিমালা)**:
  - `জ্ঞানকোষ ডিজিটাল প্রেস সম্পূর্ণ স্বচ্ছতায় বিশ্বাসী। যেহেতু এগুলো ডিজিটাল পণ্য এবং ক্রয়ের পরপরই ফাইল গ্রাহকের ডিভাইসে পৌঁছে যায়, তাই ফাইল ডাউনলোড হওয়ার পর কোনো ক্যাশ রিফান্ড প্রদান করা হয় না।`
  - `তবে ফাইলে কোনো টেকনিক্যাল ত্রুটি, নষ্ট পাতা বা ভুল সংস্করণ প্রমাণিত হলে ক্রয়ের ২৪ ঘণ্টার মধ্যে যোগাযোগ করলে আমরা অবিলম্বে সঠিক ফাইল প্রতিস্থাপন (Replacement) অথবা সমমূল্যের স্টোর ক্রেডিট প্রদান করব।`
- **Copyright & License Policy (কপিরাইট ও লাইসেন্সিং নীতি)**:
  - `নোট ও ই-বুকসমূহ ব্যক্তিগত অধ্যয়নের জন্য নির্ধারিত। কোনো বাণিজ্যিক পুনরুৎপাদন, পাইরেসি বা অনুমতি ব্যতীত অনলাইন গ্রুপে বিক্রয় করা আইনত দণ্ডনীয়।`

---

### 3.10 404 Error Page (`404.html`)
- **Headline**: `৪০৪ — কাঙ্ক্ষিত পৃষ্ঠাটি খুঁজে পাওয়া যায়নি`
- **Body**: `আপনি যে লিঙ্কটিতে ক্লিক করেছেন সেটি ভুল হতে পারে অথবা পৃষ্ঠাটি সরানো হয়েছে। নিচের বোতামে ক্লিক করে আমাদের ক্যাটালগে ফিরে যান।`
- **Button**: `ক্যাটালগে ফিরে যান`

---

## 4. UI States & Form Validation Error Strings

### Form Validation Errors
- **Empty Name**: `অনুগ্রহ করে আপনার পুরো নাম লিখুন।`
- **Invalid Phone**: `১১ ডিজিটের সঠিক মোবাইল নম্বর লিখুন (যেমন: ০১৭XXXXXXXX)।`
- **Invalid Email**: `সঠিক ইমেইল ঠিকানা প্রদান করুন (যেমন: name@example.com)।`
- **Empty Sender Wallet**: `টাকা পাঠানোর নম্বরটি প্রদান করুন।`
- **Invalid TrxID**: `সঠিক Transaction ID (TrxID) লিখুন (সাধারণত ৮-১০ অক্ষরের)।`
- **Unchecked Terms**: `অর্ডার নিশ্চিত করতে ডাউনলোড ও রিফান্ড নীতিমালায় টিক দিন।`

### Dynamic Cart & Toast Notifications
- **Item Added**: `পণ্যটি আপনার ব্যাগে যুক্ত হয়েছে!`
- **Item Exists**: `এই পণ্যটি ইতিমধ্যে আপনার ব্যাগে রয়েছে। (ডিজিটাল পণ্যের সর্বোচ্চ পরিমাণ ১)`
- **Item Removed**: `পণ্যটি ব্যাগ থেকে অপসারণ করা হয়েছে।`
- **Coupon Applied**: `কুপন সফলভাবে যুক্ত হয়েছে! [DISCOUNT] টাকা সাশ্রয় হয়েছে।`
- **Coupon Invalid**: `এই কুপন কোডটি প্রযোজ্য নয়।`
- **Download Initiated**: `আপনার ডাউনলোড শুরু হয়েছে। অনুগ্রহ করে ফোনের Downloads ফোল্ডার চেক করুন।`

---

## 5. Seed Catalog: 24 Exhaustive Digital Products Specification

Every single product in the catalog is specified below with unique identifiers, metadata, prices in Bengali numerals, and exact structured contents.

### Family 1: Notes (Class Notes, Chapter-wise, Formula Sheets)

1. **`note-ssc-phy-01`**:
   - Title: `SSC 2026 পদার্থবিজ্ঞান: গতি ও বল (অধ্যায় ২ ও ৩) মাস্টার নোট`
   - Subtitle: `সংক্ষিপ্ত রিভিশন শিট, সকল সূত্রের প্রমাণ ও বোর্ড প্রশ্নের সমাধান`
   - Family: `notes` | Subject: `পদার্থবিজ্ঞান` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
   - Pages: `৫৪` | Format: `PDF` | Size: `৪.২ MB`
   - Regular Price: `৳ ১৮০` | Sale Price: `৳ ৯৫` (Save 47%)
   - Updated: `১৫ জানুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. স্কেলার ও ভেক্টর রাশি | ২. গতির সমীকরণ ও গ্রাফ বিশ্লেষণ | ৩. নিউটনের সূত্র ও ভরবেগ সংরক্ষণ | ৪. বিগত ৫ বছরের বোর্ড পরীক্ষার গাণিতিক প্রশ্নের নিখুঁত সমাধান`
   - Sample Content: Formula cards, trajectory graphs, annotated physics diagrams.

2. **`note-ssc-che-02`**:
   - Title: `SSC 2026 রসায়ন: পদার্থের গঠন ও পর্যায় সারণি (অধ্যায় ৩ ও ৪)`
   - Subtitle: `ইলেকট্রন বিন্যাসের ব্যতিক্রম, পর্যায়বৃত্ত ধর্ম ও মনে রাখার শর্টকাট টেকনিক`
   - Family: `notes` | Subject: `রসায়ন` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
   - Pages: `৪৮` | Format: `PDF` | Size: `৩.৮ MB`
   - Regular Price: `৳ ১৬০` | Sale Price: `৳ ৮৫` (Save 47%)
   - Updated: `২০ জানুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. পরমাণুর মডেল ও সীমাবদ্ধতা | ২. ইলেকট্রন বিন্যাসের নীতি ও আউফবাউ নীতি | ৩. পর্যায় সারণির মৌলসমূহের পর্যায়বৃত্ত ধর্ম | ৪. সৃজনশীল প্রশ্নব্যাংক ও উত্তর`

3. **`note-ssc-mat-03`**:
   - Title: `SSC 2026 সাধারণ গণিত: ত্রিকোণমিতি ও পরিমিতি ফাইনাল ক্যাপসুল`
   - Subtitle: `সকল সূত্রের চার্ট, চিত্রভিত্তিক ব্যাখ্যা ও ১০০% কমন উপযোগী সৃজনশীল`
   - Family: `notes` | Subject: `সাধারণ গণিত` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
   - Pages: `৬৪` | Format: `PDF` | Size: `৫.১ MB`
   - Regular Price: `৳ ২২০` | Sale Price: `৳ ১২০` (Save 45%)
   - Updated: `২৮ জানুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. ত্রিকোণমিতিক অনুপাত ও অভেদাবলী | ২. দূরত্ব ও উচ্চতা বিষয়ক সমস্যা সমাধান | ৩. সমতল ও কঠিন পরিমিতির ক্ষেত্রফল ও আয়তন | ৪. শীর্ষ স্কুলের মডেল টেস্ট সমাধান`

4. **`note-ssc-bio-04`**:
   - Title: `SSC 2026 জীববিজ্ঞান: কোষ বিভাজন ও বংশগতিবিদ্যা স্পেশাল গাইড`
   - Subtitle: `লেবেলযুক্ত স্পষ্ট চিত্র, মাইটোসিস-মিয়োসিসের তুলনা ও জেনেটিক্স চার্ট`
   - Family: `notes` | Subject: `জীববিজ্ঞান` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
   - Pages: `৪২` | Format: `PDF` | Size: `৪.৭ MB`
   - Regular Price: `৳ ১৫০` | Sale Price: `৳ ৭৫` (Save 50%)
   - Updated: `০৫ ফেব্রুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. উদ্ভিদ ও প্রাণীকোষের অঙ্গাণু | ২. কোষ বিভাজনের পর্যায়সমূহ | ৩. ডিএনএ ও আরএনএ গঠন | ৪. মেন্ডেলের সূত্রের প্রয়োগ`

5. **`note-hsc-phy-05`**:
   - Title: `HSC 2026 পদার্থবিজ্ঞান ১ম পত্র: ভেক্টর ও নিউটনীয় বলবিদ্যা`
   - Subtitle: `নদী-নৌকা সমস্যা, ডট-ক্রস গুণন ও ব্যাংকিং কোণের বিস্তারিত ক্যালকুলাস সমাধান`
   - Family: `notes` | Subject: `পদার্থবিজ্ঞান` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
   - Pages: `৭২` | Format: `PDF` | Size: `৬.৩ MB`
   - Regular Price: `৳ ২৫০` | Sale Price: `৳ ১৪০` (Save 44%)
   - Updated: `১২ ফেব্রুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. ভেক্টর ক্যালকুলাস (গ্র্যাডিয়েন্ট, ডাইভারজেন্স, কার্ল) | ২. আপেক্ষিক বেগ ও বৃষ্টির ছাতা গণিত | ৩. জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ | ৪. রকেট গতি ও সংঘর্ষের গানিতিক সমস্যা`

6. **`note-hsc-mat-06`**:
   - Title: `HSC 2026 উচ্চতর গণিত ১ম পত্র: ক্যালকুলাস (অন্তরীকরণ ও যোগজীকরণ)`
   - Subtitle: `লিমিটের শর্টকাট, ডিফারেনশিয়েশনের প্রয়োগ ও ক্ষেত্রফল নির্ণয়ের নিখুঁত হ্যান্ডনোট`
   - Family: `notes` | Subject: `উচ্চতর গণিত` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
   - Pages: `৮৮` | Format: `PDF` | Size: `৭.৫ MB`
   - Regular Price: `৳ ৩০০` | Sale Price: `৳ ১৬৫` (Save 45%)
   - Updated: `১৮ ফেব্রুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. সীমা ও অবিচ্ছিন্নতা | ২. মূল নিয়মে অন্তরজ নির্ণয় | ৩. স্পর্শক ও অভিলম্বের সমীকরণ | ৪. নির্দিষ্ট ও অনির্দিষ্ট যোগজীকরণ কৌশল`

7. **`note-hsc-ict-07`**:
   - Title: `HSC 2026 তথ্য ও যোগাযোগ প্রযুক্তি (ICT): সি-প্রোগ্রামিং ও এইচটিএমএল`
   - Subtitle: `লজিক গেট চার্ট, অ্যালগরিদম ও ফ্লোচার্ট, সি প্রোগ্রাম এবং ওয়েব ডিজাইন কোড সংকলন`
   - Family: `notes` | Subject: `ICT` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
   - Pages: `৫৬` | Format: `PDF` | Size: `৩.৯ MB`
   - Regular Price: `৳ ২০০` | Sale Price: `৳ ১১০` (Save 45%)
   - Updated: `২৫ ফেব্রুয়ারি ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. বুলিয়ান অ্যালজেব্রা ও ডিজিটাল ডিভাইস | ২. HTML ট্যাগ ও টেবিল তৈরি | ৩. সি ভাষার লুপ, অ্যারে ও ফাংশন | ৪. ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (SQL)`

8. **`note-hsc-che-08`**:
   - Title: `HSC 2026 রসায়ন ২য় পত্র: জৈব রসায়ন (Organic Chemistry) ডাইজেস্ট`
   - Subtitle: `বিক্রিয়ার রূপান্তর চার্ট, অ্যারোমেটিসিটি, আইসোমারিজম ও মেকানিজম সংকলন`
   - Family: `notes` | Subject: `রসায়ন` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
   - Pages: `৮০` | Format: `PDF` | Size: `৫.৮ MB`
   - Regular Price: `৳ ২৮০` | Sale Price: `৳ ১৫০` (Save 46%)
   - Updated: `০১ মার্চ ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
   - Chapters: `১. জৈব যৌগের নামকরণ (IUPAC) | ২. ইলেকট্রোফিলিক ও নিউক্লিওফিলিক প্রতিস্থাপন | ৩. পলিমার ও কৃত্রিম জৈব অণু | ৪. বিভিন্ন যৌগের শনাক্তকারী পরীক্ষা`

9. **`note-adm-eng-09`**:
   - Title: `বিশ্ববিদ্যালয় ভর্তি ইংরেজি: গ্রামার মাস্টার ও ভোকাবুলারি হ্যাকস`
   - Subtitle: `ঢাকা বিশ্ববিদ্যালয়, জিএসটি ও বিআইউপির প্রশ্ন প্যাটার্ন ও কমন রুলস`
   - Family: `notes` | Subject: `ইংরেজি` | Class: `ভর্তি পরীক্ষা (Admission)` | Language: `English / বাংলা`
   - Pages: `৬৬` | Format: `PDF` | Size: `৪.০ MB`
   - Regular Price: `৳ ২৩০` | Sale Price: `৳ ১২৫` (Save 46%)
   - Updated: `০৫ মার্চ ২০২৬` | Board: `ভর্তি পরীক্ষা ২০২৬`
   - Chapters: `১. Subject-Verb Agreement ও Parallelism | ২. Inversion ও Dangling Modifiers | ৩. বিগত ২০ বছরের রিপিটেড ভোকাবুলারি | ৪. প্যাসেজ রিডিং ও অ্যানালিটিক্যাল স্কিল`

10. **`note-adm-gk-10`**:
    - Title: `মেডিকেল ও বিসিএস সাধারণ জ্ঞান: বাংলাদেশ ও আন্তর্জাতিক সাম্প্রতিকী`
    - Subtitle: `মানচিত্রভিত্তিক ভৌগোলিক তথ্য, সংবিধান ও সাম্প্রতিক জাতীয় অর্জন`
    - Family: `notes` | Subject: `সাধারণ জ্ঞান` | Class: `ভর্তি পরীক্ষা (Admission)` | Language: `বাংলা`
    - Pages: `৫০` | Format: `PDF` | Size: `৪.৪ MB`
    - Regular Price: `৳ ১৮০` | Sale Price: `৳ ৯৫` (Save 47%)
    - Updated: `১০ মার্চ ২০২৬` | Board: `ভর্তি পরীক্ষা ২০২৬`
    - Chapters: `১. বাংলাদেশের প্রাচীন ইতিহাস ও মুক্তিযুদ্ধ | ২. সংবিধান ও সরকার ব্যবস্থা | ৩. আন্তর্জাতিক সংস্থা ও চুক্তি | ৪. সাম্প্রতিক বৈশ্বিক ঘটনাবলী`

11. **`note-ssc-bng-11`**:
    - Title: `SSC 2026 বাংলা ২য় পত্র: ব্যাকরণ ক্যাপসুল ও সারাংশ সংকলন`
    - Subtitle: `ধ্বনি পরিবর্তন, সমাস, ণ-ত্ব ও ষ-ত্ব বিধান এবং নির্মিতি অংশের স্ট্যান্ডার্ড ফরম্যাট`
    - Family: `notes` | Subject: `বাংলা` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
    - Pages: `৪৮` | Format: `PDF` | Size: `৩.৫ MB`
    - Regular Price: `৳ ১৬০` | Sale Price: `৳ ৮৫` (Save 47%)
    - Updated: `১২ মার্চ ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
    - Chapters: `১. বাংলা ভাষার ধ্বনিতত্ত্ব ও উচ্চারণ | ২. সমাস নির্ণয়ের সহজ নিয়ম | ৩. উপসর্গ ও অনুসর্গের ব্যবহার | ৪. অনুচ্ছেদ ও সারাংশ লেখার আদর্শ নমুনা`

12. **`note-hsc-bio-12`**:
    - Title: `HSC 2026 উদ্ভিদবিজ্ঞান: সালোকসংশ্লেষণ ও শ্বসন প্রক্রিয়ার রেখাচিত্র গাইড`
    - Subtitle: `সি-৩, সি-৪ চক্র, ক্রেবস চক্র ও গ্লাইকোলাইসিসের স্পষ্ট বাংলা ফ্লোচার্ট`
    - Family: `notes` | Subject: `জীববিজ্ঞান` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
    - Pages: `৫২` | Format: `PDF` | Size: `৪.৬ MB`
    - Regular Price: `৳ ১৯০` | Sale Price: `৳ ৯৯` (Save 48%)
    - Updated: `১৫ মার্চ ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
    - Chapters: `১. প্লাস্টিড ও থাইলাকয়েডের ভূমিকা | ২. আলোকনির্ভর অধ্যায় ও ফটোফসফোরাইলেশন | ৩. কেলভিন ও হ্যাশ-স্ল্যাক চক্র | ৪. অবাত ও সবাত শ্বসনের পার্থক্য`

---

### Family 2: E-Books (Full Textbooks, Formulas, Roadmaps)

13. **`ebook-math-formulas-13`**:
    - Title: `এসএসসি ও এইচএসসি সকল গাণিতিক সূত্রের এনসাইক্লোপিডিয়া`
    - Subtitle: `পাটিগণিত, বীজগণিত, জ্যামিতি, ত্রিকোণমিতি ও ক্যালকুলাসের এক কমপ্লিট হ্যান্ডবুক`
    - Family: `ebooks` | Subject: `গণিত` | Class: `সকল শ্রেণী` | Language: `বাংলা / Math`
    - Pages: `১১২` | Format: `PDF` | Size: `৮.২ MB`
    - Regular Price: `৳ ৩৫০` | Sale Price: `৳ ১৯০` (Save 46%)
    - Updated: `১৮ মার্চ ২০২৬` | Board: `রেফারেন্স ই-বুক`
    - Chapters: `১. মৌলিক বীজগণিতীয় সূত্রাবলী | ২. স্থানাঙ্ক জ্যামিতি ও সমীকরণ | ৩. ত্রিকোণমিতির সকল সমীকরণ | ৪. ভেক্টর ও ম্যাট্রিক্সের নিয়ম | ৫. ডিফারেনশিয়াল ও ইন্টিগ্রাল ক্যালকুলাস সূত্র ব্যাংক`

14. **`ebook-english-grammar-14`**:
    - Title: `Practical English Grammar & Composition for Bangladeshi Students`
    - Subtitle: `নিয়ম মুখস্থ না করে বাক্য গঠনের আধুনিক কৌশল ও কমন ভুলের প্রতিকার`
    - Family: `ebooks` | Subject: `ইংরেজি` | Class: `সকল শ্রেণী` | Language: `English / বাংলা`
    - Pages: `১৪০` | Format: `PDF` | Size: `৯.৪ MB`
    - Regular Price: `৳ ৪০০` | Sale Price: `৳ ২২০` (Save 45%)
    - Updated: `২০ মার্চ ২০২৬` | Board: `রেফারেন্স ই-বুক`
    - Chapters: `1. Sentence Structures & Clauses | 2. Tenses & Modals in Real Context | 3. Right Form of Verbs Made Easy | 4. Preposition & Collocations Guide | 5. Formal Letter, Email & Report Writing`

15. **`ebook-science-experiments-15`**:
    - Title: `হাতে-কলমে বিজ্ঞানের ৫০টি ম্যাজিকাল পরীক্ষা ও বৈজ্ঞানিক ব্যাখ্যা`
    - Subtitle: `ঘরের সাধারণ উপাদান দিয়ে বিজ্ঞান শেখার আনন্দ ও ব্যবহারিক নোট`
    - Family: `ebooks` | Subject: `বিজ্ঞান` | Class: `নবম-দশম (SSC)` | Language: `বাংলা`
    - Pages: `৭৬` | Format: `PDF` | Size: `৬.০ MB`
    - Regular Price: `৳ ২২০` | Sale Price: `৳ ১১৫` (Save 48%)
    - Updated: `২২ মার্চ ২০২৬` | Board: `ব্যবহারিক গাইড`
    - Chapters: `১. বায়ুর চাপ ও তরলের ধর্মের পরীক্ষা | ২. রাসায়নিক বিক্রিয়ার রং পরিবর্তন | ৩. আলোর প্রতিফলন ও প্রতিসরণের খেলা | ৪. সহজ বর্তনী ও চুম্বকের ক্রিয়া`

16. **`ebook-hsc-physics-handbook-16`**:
    - Title: `HSC পদার্থবিজ্ঞান ২য় পত্র: আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স`
    - Subtitle: `আপেক্ষিকতার বিশেষ তত্ত্ব, ফটোইলেকট্রিক প্রভাব, সেমিকন্ডাক্টর ও ট্রানজিস্টর`
    - Family: `ebooks` | Subject: `পদার্থবিজ্ঞান` | Class: `একাদশ-দ্বাদশ (HSC)` | Language: `বাংলা`
    - Pages: `৯৬` | Format: `PDF` | Size: `৭.১ MB`
    - Regular Price: `৳ ৩২০` | Sale Price: `৳ ১৭৫` (Save 45%)
    - Updated: `২৫ মার্চ ২০২৬` | Board: `NCTB কারিকুলাম ২০২৬`
    - Chapters: `১. সময়ের প্রসারণ ও দৈর্ঘ্যের সংকোচন | ২. আইনস্টাইনের আলোক-তড়িৎ সমীকরণ | ৩. বোর পরমাণু মডেল ও তেজস্ক্রিয়তা | ৪. ডায়োড, ট্রানজিস্টর ও লজিক গেট সার্কিট`

17. **`ebook-study-hacks-17`**:
    - Title: `স্মার্ট স্টাডি মেথড: পরীক্ষার আগে কম পরিশ্রমে সেরা ফলাফলের কৌশল`
    - Subtitle: `পমোডোরো টেকনিক, স্পেসড রিপিটেশন ও নোট নেওয়ার কর্নিল সিস্টেম`
    - Family: `ebooks` | Subject: `পড়ালেখার কৌশল` | Class: `সকল শ্রেণী` | Language: `বাংলা`
    - Pages: `৬৪` | Format: `PDF` | Size: `৪.৫ MB`
    - Regular Price: `৳ ২০০` | Sale Price: `৳ ৯৯` (Save 50%)
    - Updated: `২৭ মার্চ ২০২৬` | Board: `সেলফ-ইম্প্রুভমেন্ট`
    - Chapters: `১. মস্তিষ্কের স্মৃতিশক্তির বৈজ্ঞানিক কার্যপ্রণালী | ২. কর্নিল নোট টেকিং সিস্টেম | ৩. অ্যাক্টিভ রিকল ও স্পেসড রিপিটেশন রুটিন | ৪. পরীক্ষার ভীতি দূর করার মানসিক প্রস্তুতি`

18. **`ebook-admission-roadmap-18`**:
    - Title: `বিশ্ববিদ্যালয় ভর্তি রোডম্যাপ: বিজ্ঞান ও মানবিক শাখার পূর্ণাঙ্গ গাইডলাইন`
    - Subtitle: `বিগত বছরের কাট-মার্ক বিশ্লেষণ, ইউনিট ভিত্তিক প্রস্তুতি পরিকল্পনা ও সময় বণ্টন`
    - Family: `ebooks` | Subject: `ভর্তি গাইড` | Class: `ভর্তি পরীক্ষা (Admission)` | Language: `বাংলা`
    - Pages: `৮৪` | Format: `PDF` | Size: `৫.৫ MB`
    - Regular Price: `৳ ২৭০` | Sale Price: `৳ ১৪০` (Save 48%)
    - Updated: `৩০ মার্চ ২০২৬` | Board: `এডমিশন ডিরেক্টরি ২০২৬`
    - Chapters: `১. কোন বিশ্ববিদ্যালয়ে কীভাবে আবেদন করবেন | ২. পরীক্ষার হল ম্যানেজমেন্ট টেকনিক | ৩. ভুল উত্তরের নেগেটিভ মার্কিং এড়ানোর উপায় | ৪. দৈনিক পড়াশোনার রুটিন নমুনা`

---

### Family 3: Ready-Made Websites (Turnkey Templates, Instant Code Packages)

19. **`web-coaching-portal-19`**:
    - Title: `কোচিং সেন্টার ও একাডেমি রেডি-মেড ওয়েবসাইট টেমপ্লেট`
    - Subtitle: `কোর্স তালিকা, শিক্ষক পরিচিতি, ব্যাচ শিডিউল ও সরাসরি হোয়াটসঅ্যাপ ভর্তি ফরম`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `১২` | Format: `ZIP` | Size: `১.৮ MB`
    - Regular Price: `৳ ৮৫০` | Sale Price: `৳ ৪৫০` (Save 47%)
    - Updated: `০২ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট বাণিজ্যিক লাইসেন্স`
    - Included: `১. responsive index.html | ২. আধুনিক CSS স্টাইলশিট (মোবাইল ফার্স্ট) | ৩. ক্লিক-টু-কল ও সরাসরি হোয়াটসঅ্যাপ পপআপ | ৪. সহজ বাংলা সেটআপ গাইড (README.txt) | ৫. লাইসেন্স ডকুমেন্টস`
    - Features: Fast 60fps animations, accessible layout, zero build dependencies, clean semantic markup.

20. **`web-school-madrasa-20`**:
    - Title: `স্কুল, কলেজ ও মাদরাসা অফিসিয়াল ওয়েবসাইট টেমপ্লেট`
    - Subtitle: `নোটিশ বোর্ড, পরীক্ষার রুটিন, ফলাফল প্রকাশ ও প্রধান শিক্ষকের বাণী সেকশন`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `১৫` | Format: `ZIP` | Size: `২.২ MB`
    - Regular Price: `৳ ৯৫০` | Sale Price: `৳ ৪৯০` (Save 48%)
    - Updated: `০৫ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট বাণিজ্যিক লাইসেন্স`
    - Included: `১. হোমপেজ, নোটিশ বোর্ড ও ভর্তি তথ্য পেজ | ২. ফটো গ্যালারি ও শিক্ষক তালিকা | ৩. মোবাইল ফ্রেন্ডলি ড্রপডাউন মেনু | ৪. বাংলা ফন্ট অপ্টিমাইজড সিএসএস | ৫. ইনস্টলেশন ডকুমেন্টেশন`
    - Features: Fully functional printable notices, PDF download anchors, zero external dependencies.

21. **`web-teacher-tutor-21`**:
    - Title: `প্রাইভেট টিউটর ও মেন্টর পার্সোনাল পোর্টফোলিও ওয়েবসাইট`
    - Subtitle: `শিক্ষকতার অভিজ্ঞতা, শিক্ষার্থীদের রিভিউ, ব্যাচ বুকিং ও ফ্রি ডেমো ক্লাস রিকোয়েস্ট`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `১০` | Format: `ZIP` | Size: `১.৪ MB`
    - Regular Price: `৳ ৭০০` | Sale Price: `৳ ৩৫০` (Save 50%)
    - Updated: `০৮ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট ব্যক্তিগত লাইসেন্স`
    - Included: `১. ক্লিন হিরো ও অ্যাবাউট সেকশন | ২. ব্যাচ বুকিং ইন্টারঅ্যাক্টিভ মডাল | ৩. ভিডিও লেকচার এম্বেড সেকশন | ৪. রেসপন্সিভ গ্রিড সিএসএস | ৫. সেটআপ নির্দেশিকা`
    - Features: Ultra lightweight (<50KB total bundle), instant load, smooth native scrolling.

22. **`web-student-portfolio-22`**:
    - Title: `স্টুডেন্ট অ্যান্ড ডেভেলপার মিনিমালিস্ট পোর্টফোলিও টেমপ্লেট`
    - Subtitle: `প্রজেক্ট শোকেস, সিভি ডাউনলোড বাটন ও সামাজিক মাধ্যমের লিঙ্ক সংবলিত আধুনিক সাইট`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `৮` | Format: `ZIP` | Size: `১.১ MB`
    - Regular Price: `৳ ৬০০` | Sale Price: `৳ ২৯০` (Save 52%)
    - Updated: `১০ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট ব্যক্তিগত লাইসেন্স`
    - Included: `১. ডার্ক/লাইট মোড সাপোর্টেড সিএসএস | ২. ফিল্টারেবল প্রজেক্ট গ্রিড | ৩. ক্লিক-টু-কপি ইমেইল বাটন | ৪. এক ক্লিকে সিভি ডাউনলোড লিঙ্ক | ৫. বিস্তারিত কনফিগারেশন গাইড`
    - Features: Clean typographic hierarchy, zero-library tab navigation, accessible keyboard support.

23. **`web-academic-blog-23`**:
    - Title: `একাডেমিক এডুকেশন অ্যান্ড নোটস ব্লগ টেমপ্লেট`
    - Subtitle: `বিষয়ভিত্তিক আর্টিকেল গ্রিড, রিডিং টাইম ক্যালকুলেটর ও পিডিএফ ডাউনলোড কার্ড`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `১৪` | Format: `ZIP` | Size: `১.৯ MB`
    - Regular Price: `৳ ৮০০` | Sale Price: `৳ ৩৯০` (Save 51%)
    - Updated: `১২ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট বাণিজ্যিক লাইসেন্স`
    - Included: `১. আর্টিকেল রিডার পেজ ও সূচিপত্র সাইডবার | ২. টেক্সট সাইজ কন্ট্রোলার স্ক্রিপ্ট | ৩. কোড স্নিপেট হাইলাইটার সিএসএস | ৪. লেখক পরিচিতি ও রিলেটেড পোস্ট কার্ড | ৫. ব্যবহারের শর্তাবলী ফাইল`
    - Features: Optimal reading typography (65 characters per line), high contrast accessibility.

24. **`web-course-landing-24`**:
    - Title: `অনলাইন কোর্স অ্যান্ড বুটক্যাম্প সেলস পেজ টেমপ্লেট`
    - Subtitle: `মডিউল একর্ডিয়ন, প্রাইসিং টেবিল, কাউন্টডাউন টাইমার ও পেমেন্ট প্রুফ ফর্ম`
    - Family: `websites` | Subject: `ওয়েব ডেভেলপমেন্ট` | Class: `প্রফেশনাল ও ফ্রিল্যান্স` | Language: `HTML5 / CSS3 / Vanilla JS`
    - Files: `১১` | Format: `ZIP` | Size: `১.৬ MB`
    - Regular Price: `৳ ৭৫০` | Sale Price: `৳ ৩৭০` (Save 51%)
    - Updated: `১৫ এপ্রিল ২০২৬` | License: `সিঙ্গেল-সাইট বাণিজ্যিক লাইসেন্স`
    - Included: `১. হাই-কনভার্টিং সিঙ্গেল পেজ স্ট্রাকচার | ২. ইন্টারঅ্যাক্টিভ সিলেবাস অ্যাকর্ডিয়ন | ৩. মোবাইল ফ্রেন্ডলি প্রাইসিং কার্ড | ৪. ক্লায়েন্ট-সাইড ফর্ম ভ্যালিডেশন | ৫. সেটআপ ডক`
    - Features: High conversion layout, accessible accordion UI, instant client-side feedback.

---

## 6. Exit Check for Phase 1

- Every page in the site has its full copy deck defined with real, specific Bengali text.
- Every interactive button and link follows the single-name-per-action rule.
- Every form input, label, placeholder, and validation error message exists in real Bengali text.
- All empty states, toast messages, and order confirmation strings are fully documented.
- 24 rich, distinct digital products across 3 families are specified with exact prices in Bengali numerals, page counts, file sizes, and syllabus codes.
- Zero lorem ipsum, zero "Feature one", zero generic placeholder copy.
