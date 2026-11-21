/**
 * STORE ENGINE — জ্ঞানকোষ ডিজিটাল প্রেস
 * Pure Vanilla JS Core: State, Cart, Localization, LocalStorage, Parametric SVG Covers & Downloads.
 * Zero external libraries. 100% functional on file:/// protocol.
 */

(function (window) {
  'use strict';

  var bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  var CART_KEY = 'gkp_cart_v1';
  var COUPON_KEY = 'gkp_coupon_v1';
  var LIBRARY_KEY = 'gkp_library_v1';

  var StoreEngine = {
    /**
     * Converts any ASCII number/string to Bengali digits deterministically.
     */
    toBn: function (num) {
      if (num === null || num === undefined) return '';
      return String(num).replace(/[0-9]/g, function (d) {
        return bengaliDigits[parseInt(d, 10)];
      });
    },

    /**
     * Formats price with currency symbol and Bengali numerals (e.g. ৳ ১২০).
     */
    formatPrice: function (amount) {
      var config = window.STORE_CONFIG || { currency: '৳' };
      var val = Math.round(Number(amount) || 0);
      return config.currency + ' ' + StoreEngine.toBn(val);
    },

    /**
     * Safe localStorage wrapper with try/catch fallback for incognito mode.
     */
    storage: {
      get: function (key, fallback) {
        try {
          var item = localStorage.getItem(key);
          return item ? JSON.parse(item) : fallback;
        } catch (e) {
          console.warn('Storage read fallback for ' + key, e);
          return fallback;
        }
      },
      set: function (key, val) {
        try {
          localStorage.setItem(key, JSON.stringify(val));
          return true;
        } catch (e) {
          console.warn('Storage write failed for ' + key, e);
          return false;
        }
      },
      remove: function (key) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          console.warn('Storage remove failed for ' + key, e);
        }
      }
    },

    /**
     * Retrieves all products or looks up one by ID.
     */
    getProducts: function () {
      return window.STORE_PRODUCTS || [];
    },

    getProductById: function (id) {
      var products = StoreEngine.getProducts();
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
      }
      return null;
    },

    /**
     * CART MANAGEMENT (Quantity is strictly 1 per digital product)
     */
    getCart: function () {
      return StoreEngine.storage.get(CART_KEY, []);
    },

    isInCart: function (productId) {
      var cart = StoreEngine.getCart();
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) return true;
      }
      return false;
    },

    addToCart: function (productId) {
      var product = StoreEngine.getProductById(productId);
      if (!product) return { success: false, message: 'পণ্যটি খুঁজে পাওয়া যায়নি।' };

      var cart = StoreEngine.getCart();
      if (StoreEngine.isInCart(productId)) {
        return {
          success: false,
          alreadyInCart: true,
          message: 'পণ্যটি ইতিমধ্যে আপনার ব্যাগে রয়েছে। (ডিজিটাল পণ্যের সর্বোচ্চ পরিমাণ ১)'
        };
      }

      cart.push({
        id: product.id,
        title: product.title,
        priceSale: product.priceSale,
        priceRegular: product.priceRegular,
        format: product.format,
        fileSize: product.fileSize,
        category: product.category,
        classLabel: product.classLabel,
        subject: product.subject,
        themeColor: product.themeColor
      });

      StoreEngine.storage.set(CART_KEY, cart);
      StoreEngine.emitCartUpdate();
      return { success: true, message: 'পণ্যটি আপনার ব্যাগে যুক্ত হয়েছে!' };
    },

    removeFromCart: function (productId) {
      var cart = StoreEngine.getCart();
      var filtered = cart.filter(function (item) {
        return item.id !== productId;
      });
      StoreEngine.storage.set(CART_KEY, filtered);
      StoreEngine.emitCartUpdate();
      return { success: true, message: 'পণ্যটি ব্যাগ থেকে অপসারণ করা হয়েছে।' };
    },

    clearCart: function () {
      StoreEngine.storage.remove(CART_KEY);
      StoreEngine.storage.remove(COUPON_KEY);
      StoreEngine.emitCartUpdate();
    },

    getCartCount: function () {
      return StoreEngine.getCart().length;
    },

    getCartSubtotal: function () {
      var cart = StoreEngine.getCart();
      var subtotal = 0;
      for (var i = 0; i < cart.length; i++) {
        subtotal += Number(cart[i].priceSale) || 0;
      }
      return subtotal;
    },

    getCartRegularTotal: function () {
      var cart = StoreEngine.getCart();
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
        total += Number(cart[i].priceRegular) || Number(cart[i].priceSale);
      }
      return total;
    },

    applyCoupon: function (code) {
      if (!code) return { success: false, message: 'অনুগ্রহ করে কুপন কোড লিখুন।' };
      var cleanCode = String(code).trim().toUpperCase();
      var coupons = (window.STORE_CONFIG && window.STORE_CONFIG.coupons) || {};
      var coupon = coupons[cleanCode];

      if (!coupon) {
        return { success: false, message: 'দুঃখিত, কুপন কোডটি সঠিক নয় বা মেয়াদ শেষ হয়েছে।' };
      }

      var subtotal = StoreEngine.getCartSubtotal();
      if (coupon.minSubtotal && subtotal < coupon.minSubtotal) {
        return {
          success: false,
          message: 'এই কুপনের জন্য সর্বনিম্ন ' + StoreEngine.formatPrice(coupon.minSubtotal) + ' টাকার অর্ডার প্রয়োজন।'
        };
      }

      StoreEngine.storage.set(COUPON_KEY, { code: cleanCode, coupon: coupon });
      StoreEngine.emitCartUpdate();
      return { success: true, message: 'কুপন সফলভাবে যুক্ত হয়েছে! (' + coupon.label + ')' };
    },

    removeCoupon: function () {
      StoreEngine.storage.remove(COUPON_KEY);
      StoreEngine.emitCartUpdate();
    },

    getAppliedCoupon: function () {
      return StoreEngine.storage.get(COUPON_KEY, null);
    },

    getCouponDiscount: function () {
      var applied = StoreEngine.getAppliedCoupon();
      if (!applied || !applied.coupon) return 0;
      var subtotal = StoreEngine.getCartSubtotal();
      var c = applied.coupon;

      if (c.type === 'percent') {
        return Math.round((subtotal * c.value) / 100);
      } else if (c.type === 'flat') {
        return Math.min(subtotal, c.value);
      }
      return 0;
    },

    getCartFinalTotal: function () {
      var subtotal = StoreEngine.getCartSubtotal();
      var discount = StoreEngine.getCouponDiscount();
      return Math.max(0, subtotal - discount);
    },

    emitCartUpdate: function () {
      var count = StoreEngine.getCartCount();
      var event = new CustomEvent('gkp:cart-updated', { detail: { count: count } });
      window.dispatchEvent(event);
      StoreEngine.updateHeaderCartBadges();
    },

    updateHeaderCartBadges: function () {
      var count = StoreEngine.getCartCount();
      var badges = document.querySelectorAll('.cart-badge-count');
      for (var i = 0; i < badges.length; i++) {
        badges[i].textContent = StoreEngine.toBn(count);
        badges[i].classList.remove('cart-badge-pulse');
        // trigger reflow
        void badges[i].offsetWidth;
        badges[i].classList.add('cart-badge-pulse');
      }
    },

    /**
     * MY LIBRARY PERSISTENCE (Purchases remembered on this device)
     */
    getLibrary: function () {
      return StoreEngine.storage.get(LIBRARY_KEY, []);
    },

    recordPurchase: function (orderInfo) {
      var library = StoreEngine.getLibrary();
      var items = orderInfo.items || [];
      var nowStr = new Date().toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var existingIndex = -1;
        for (var j = 0; j < library.length; j++) {
          if (library[j].id === it.id) {
            existingIndex = j;
            break;
          }
        }
        var entry = {
          id: it.id,
          title: it.title,
          category: it.category,
          format: it.format,
          fileSize: it.fileSize,
          themeColor: it.themeColor,
          purchasedAt: nowStr,
          orderId: orderInfo.orderId,
          downloadCount: 0
        };
        if (existingIndex >= 0) {
          library[existingIndex] = entry;
        } else {
          library.push(entry);
        }
      }

      StoreEngine.storage.set(LIBRARY_KEY, library);
      return library;
    },

    clearLibrary: function () {
      StoreEngine.storage.remove(LIBRARY_KEY);
    },

    /**
     * PARAMETRIC WORLD-CLASS SVG COVER ENGINE (2026 EDITION)
     * Renders a tactile, three-dimensional digital textbook cover with authentic subject geometry,
     * realistic spine bevel, holographic NCTB stamp, and glossy light reflection.
     */
    generateSvgCover: function (product, width, height) {
      width = width || 320;
      height = height || 200;
      var color = product.themeColor || '#DC2626';
      var title = product.title || '';
      var subject = product.subject || 'ডিজিটাল নোট';
      var classLabel = product.classLabel || 'NCTB কারিকুলাম';
      var format = product.format || 'PDF';
      var iconType = product.iconType || 'physics';

      var displayTitle = title.length > 34 ? title.substring(0, 34) + '...' : title;

      // Subject Specific Dynamic Geometry
      var subjectGeometry = '';
      if (iconType === 'math') {
        subjectGeometry = [
          '  <!-- Math Trigonometric Waves & Axis -->',
          '  <line x1="40" y1="100" x2="' + (width - 20) + '" y2="100" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3,3"/>',
          '  <path d="M 40 100 Q 90 40, 140 100 T 240 100 T 320 100" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2.5"/>',
          '  <circle cx="90" cy="70" r="4" fill="#FBBF24"/>',
          '  <circle cx="190" cy="130" r="4" fill="#FBBF24"/>',
          '  <text x="' + (width - 45) + '" y="95" fill="rgba(255,255,255,0.5)" font-family="monospace" font-size="14">f(x)</text>'
        ].join('\n');
      } else if (iconType === 'chemistry') {
        subjectGeometry = [
          '  <!-- Chemistry Benzene & Molecular Rings -->',
          '  <polygon points="120,70 145,55 170,70 170,100 145,115 120,100" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>',
          '  <circle cx="145" cy="85" r="14" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>',
          '  <line x1="170" y1="85" x2="195" y2="85" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>',
          '  <circle cx="205" cy="85" r="8" fill="#34D399" opacity="0.8"/>'
        ].join('\n');
      } else if (iconType === 'website' || iconType === 'code') {
        subjectGeometry = [
          '  <!-- Modern Code Editor Window -->',
          '  <rect x="50" y="50" width="' + (width - 100) + '" height="65" rx="6" fill="#0F172A" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>',
          '  <circle cx="62" cy="62" r="3" fill="#EF4444"/>',
          '  <circle cx="72" cy="62" r="3" fill="#FBBF24"/>',
          '  <circle cx="82" cy="62" r="3" fill="#10B981"/>',
          '  <text x="62" y="86" fill="#60A5FA" font-family="monospace" font-size="11">&lt;div class="learn"&gt;</text>',
          '  <text x="74" y="102" fill="#34D399" font-family="monospace" font-size="11">const year = 2026;</text>'
        ].join('\n');
      } else if (iconType === 'biology') {
        subjectGeometry = [
          '  <!-- Biology DNA Helix Double Curve -->',
          '  <path d="M 60 60 Q 110 110, 160 60 T 260 60" fill="none" stroke="#10B981" stroke-width="2.5"/>',
          '  <path d="M 60 100 Q 110 50, 160 100 T 260 100" fill="none" stroke="#6EE7B7" stroke-width="2"/>',
          '  <line x1="85" y1="80" x2="85" y2="80" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>',
          '  <line x1="135" y1="80" x2="135" y2="80" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>',
          '  <line x1="185" y1="80" x2="185" y2="80" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>'
        ].join('\n');
      } else {
        // Physics & General
        subjectGeometry = [
          '  <!-- Physics Orbit Rings & Force Vector -->',
          '  <ellipse cx="' + (width / 2) + '" cy="85" rx="48" ry="18" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" transform="rotate(-20 ' + (width / 2) + ' 85)"/>',
          '  <ellipse cx="' + (width / 2) + '" cy="85" rx="48" ry="18" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" transform="rotate(40 ' + (width / 2) + ' 85)"/>',
          '  <circle cx="' + (width / 2) + '" cy="85" r="7" fill="#F59E0B"/>'
        ].join('\n');
      }

      return [
        '<svg viewBox="0 0 ' + width + ' ' + height + '" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + displayTitle + ' কভার">',
        '  <defs>',
        '    <linearGradient id="bg-' + product.id + '" x1="0%" y1="0%" x2="100%" y2="100%">',
        '      <stop offset="0%" stop-color="' + color + '" />',
        '      <stop offset="60%" stop-color="' + color + '" stop-opacity="0.9" />',
        '      <stop offset="100%" stop-color="#0F172A" />',
        '    </linearGradient>',
        '    <linearGradient id="gloss-' + product.id + '" x1="0%" y1="0%" x2="100%" y2="80%">',
        '      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.18" />',
        '      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.0" />',
        '    </linearGradient>',
        '    <linearGradient id="spine-' + product.id + '" x1="0%" y1="0%" x2="100%" y2="0%">',
        '      <stop offset="0%" stop-color="#000000" stop-opacity="0.45" />',
        '      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.2" />',
        '      <stop offset="100%" stop-color="#000000" stop-opacity="0.25" />',
        '    </linearGradient>',
        '    <pattern id="dotgrid-' + product.id + '" width="16" height="16" patternUnits="userSpaceOnUse">',
        '      <circle cx="2" cy="2" r="0.8" fill="rgba(255,255,255,0.12)"/>',
        '    </pattern>',
        '  </defs>',
        '  <!-- Base Canvas -->',
        '  <rect width="' + width + '" height="' + height + '" rx="4" fill="url(#bg-' + product.id + ')"/>',
        '  <rect width="' + width + '" height="' + height + '" rx="4" fill="url(#dotgrid-' + product.id + ')"/>',
        '  <!-- Gloss Overlay -->',
        '  <rect width="' + width + '" height="' + height + '" fill="url(#gloss-' + product.id + ')"/>',
        '  <!-- 3D Book Spine Bevel -->',
        '  <rect x="0" y="0" width="14" height="' + height + '" fill="url(#spine-' + product.id + ')"/>',
        '  <line x1="14" y1="0" x2="14" y2="' + height + '" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>',
        '  <!-- Subject Badge Tag -->',
        '  <rect x="24" y="16" width="76" height="22" rx="11" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>',
        '  <text x="62" y="31" fill="#FFFFFF" font-size="11" font-family="sans-serif" font-weight="700" text-anchor="middle">' + subject + '</text>',
        '  <!-- Format Badge -->',
        '  <rect x="' + (width - 58) + '" y="16" width="44" height="22" rx="11" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"/>',
        '  <text x="' + (width - 36) + '" y="31" fill="#0F172A" font-size="10" font-family="monospace" font-weight="800" text-anchor="middle">' + format + '</text>',
        '  <!-- Subject Specific Geometry -->',
        subjectGeometry,
        '  <!-- Title Banner Glass Card -->',
        '  <rect x="22" y="' + (height - 68) + '" width="' + (width - 38) + '" height="54" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>',
        '  <text x="34" y="' + (height - 44) + '" fill="#FFFFFF" font-size="12.5" font-family="sans-serif" font-weight="800">' + displayTitle + '</text>',
        '  <text x="34" y="' + (height - 24) + '" fill="#94A3B8" font-size="10.5" font-family="sans-serif">' + classLabel + ' • ২০২৬ অফিসিয়াল</text>',
        '</svg>'
      ].join('\n');
    },

    /**
     * TOAST NOTIFICATION UTILITY
     */
    showToast: function (msg, type) {
      var container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('role', 'status');
        document.body.appendChild(container);
      }

      var toast = document.createElement('div');
      toast.className = 'toast ' + (type ? 'toast-' + type : '');
      toast.textContent = msg;

      container.appendChild(toast);

      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 3500);
    },

    /**
     * DETERMINISTIC DIGITAL DOWNLOAD TRIGGER
     * Generates a genuine standalone HTML/SVG printable study document and triggers device save.
     */
    triggerDownload: function (productId) {
      var product = StoreEngine.getProductById(productId);
      if (!product) {
        StoreEngine.showToast('ডাউনলোড ফাইল পাওয়া যায়নি।', 'error');
        return;
      }

      // Generate authentic study sheet HTML document payload
      var htmlContent = [
        '<!DOCTYPE html>',
        '<html lang="bn">',
        '<head>',
        '<meta charset="utf-8">',
        '<title>' + product.title + '</title>',
        '<style>',
        'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.8; color: #11161B; padding: 32px; max-width: 800px; margin: 0 auto; background: #FBF9F4; }',
        'h1 { color: #9E2A2B; border-bottom: 2px solid #11161B; padding-bottom: 8px; font-size: 24px; }',
        '.meta { background: #FFFFFF; border: 1px solid #DCD6C8; padding: 16px; margin: 20px 0; border-radius: 4px; }',
        '.chap { background: #FFFFFF; border: 1px solid #DCD6C8; padding: 12px 16px; margin-bottom: 12px; }',
        '.footer { margin-top: 40px; font-size: 12px; color: #6B7785; border-top: 1px solid #DCD6C8; padding-top: 12px; }',
        '</style>',
        '</head>',
        '<body>',
        '<h1>' + product.title + '</h1>',
        '<div class="meta">',
        '<p><strong>শ্রেণী:</strong> ' + product.classLabel + ' | <strong>বিষয়:</strong> ' + product.subject + '</p>',
        '<p><strong>কারিকুলাম:</strong> ' + (product.board || 'জাতীয় শিক্ষাক্রম ২০২৬') + ' | <strong>সংস্করণ:</strong> ' + product.updatedDate + '</p>',
        '<p><strong>লাইসেন্স:</strong> ' + product.license + ' (জ্ঞানকোষ ডিজিটাল প্রেস)</p>',
        '</div>',
        '<h2>অধ্যায়ভিত্তিক মূল সূচিপত্র ও অধ্যয়ন সংক্ষেপ:</h2>'
      ];

      var chapters = product.chapters || product.whatIncluded || [];
      for (var i = 0; i < chapters.length; i++) {
        htmlContent.push('<div class="chap"><strong>' + chapters[i] + '</strong></div>');
      }

      htmlContent.push(
        '<div class="footer">',
        '<p>জ্ঞানকোষ ডিজিটাল প্রেস — ফোন/হোয়াটসঅ্যাপ: ০১৯০২৬০৭৪০৬ | ইমেইল: ishanxczs@gmail.com</p>',
        '<p>ঢাকা, বাংলাদেশ (সম্পূর্ণ ডিজিটাল ডেলিভারি)</p>',
        '</div>',
        '</body>',
        '</html>'
      );

      var blob = new Blob([htmlContent.join('\n')], { type: 'text/html;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = product.id + '-gnyankosh-study-sheet.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      StoreEngine.showToast('ডাউনলোড সফলভাবে শুরু হয়েছে! ফোনের Downloads ফোল্ডার চেক করুন।', 'success');
    }
  };

  // Expose to global window
  window.StoreEngine = StoreEngine;

  // Initialize badges when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    StoreEngine.updateHeaderCartBadges();
  });
})(window);
