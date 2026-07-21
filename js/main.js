/* ==========================================================================
   Nathan's Craft Corner — shared site chrome (nav + footer + home grid)
   Injected via JS so every page stays in sync from one place.

   VISIBILITY RULE: a category only shows up in the nav dropdown, the
   footer, and the home page grid once it has at least one product in
   js/products-data.js. Add a product there and it appears everywhere
   automatically — no manual "turning on" needed.

   HOW TO ADD A NEW CATEGORY LATER:
   1. Add an entry to the `CATEGORIES` array in js/categories.js.
   2. Create the new products/your-category.html page (copy an existing one).
   3. Add products for it in js/products-data.js.
   It will appear in the nav/footer/home grid as soon as it has a product.
   ========================================================================== */

(function () {
  // ROOT is set per-page via <script>window.SITE_ROOT = "..."</script>
  // before this file is loaded. "" for root-level pages, "../" for /products/.
  var ROOT = window.SITE_ROOT || "";
  var ALL_CATEGORIES = window.CATEGORIES || [];
  var PRODUCTS_DATA = window.PRODUCTS || {};

  function withRoot(href) { return ROOT + href; }

  function categoryCount(key) {
    return (PRODUCTS_DATA[key] && PRODUCTS_DATA[key].length) || 0;
  }

  // Only categories that currently have at least one product
  var liveCategories = ALL_CATEGORIES.filter(function (c) {
    return categoryCount(c.key) > 0;
  });

  function buildDropdown() {
    return liveCategories
      .map(function (c) {
        return '<li><a href="' + withRoot(c.href) + '">' + c.label + "</a></li>";
      })
      .join("");
  }

  var shopItem = liveCategories.length
    ? '<li class="has-dropdown"><a href="#" aria-haspopup="true">Shop &#9662;</a>' +
      '<ul class="dropdown">' + buildDropdown() + "</ul>" +
      "</li>"
    : "";

  var navHTML =
    '<div class="nav-wrap">' +
    '<a class="brand" href="' + withRoot("index.html") + '">' +
    '<img src="' + withRoot("images/logo.png") + '" alt="Nathan\'s Craft Corner logo">' +
    '<span>Nathan\'s<span class="script">Craft Corner</span></span>' +
    "</a>" +
    '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>' +
    '<ul class="nav-links">' +
    '<li><a href="' + withRoot("index.html") + '" data-nav="home">Home</a></li>' +
    shopItem +
    '<li><a href="' + withRoot("about.html") + '" data-nav="about">About</a></li>' +
    '<li><a href="' + withRoot("contact.html") + '" data-nav="contact">Contact</a></li>' +
    "</ul>" +
    "</div>";

  var categoryFooterList = liveCategories.length
    ? liveCategories
        .map(function (c) {
          return '<li><a href="' + withRoot(c.href) + '">' + c.label + "</a></li>";
        })
        .join("")
    : '<li style="color:rgba(255,249,242,0.55);">New categories coming soon</li>';

  var footerHTML =
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div>' +
    '<div class="footer-brand">' +
    '<img src="' + withRoot("images/logo.png") + '" alt="">' +
    "<span>Nathan's Craft Corner</span>" +
    "</div>" +
    '<p>Custom calendars, decals, souvenirs, cards &amp; shadow boxes — designed and cut by hand for your story.</p>' +
    '<div class="footer-social">' +
    '<a href="https://www.facebook.com/profile.php?id=61575226142723" aria-label="Facebook" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>' +
    "</a>" +
    '<a href="https://www.instagram.com/nathanscraftcorner/" aria-label="Instagram" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
    "</a>" +
    '<a href="https://maestroallen.gumroad.com/" aria-label="Gumroad" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8a4 4 0 1 0 4 4" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>' +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div>' +
    "<h4>Explore</h4>" +
    '<ul class="footer-links">' +
    '<li><a href="' + withRoot("index.html") + '">Home</a></li>' +
    '<li><a href="' + withRoot("about.html") + '">About</a></li>' +
    '<li><a href="' + withRoot("contact.html") + '">Contact</a></li>' +
    "</ul>" +
    "</div>" +
    '<div>' +
    "<h4>Shop by Category</h4>" +
    '<ul class="footer-links">' +
    categoryFooterList +
    "</ul>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    "&copy; " + new Date().getFullYear() + " Nathan's Craft Corner. Made with love (and a Cricut)." +
    "</div>" +
    "</div>";

  // ---- Home page category grid (only rendered if #category-grid exists) ----
  function renderHomeCategoryGrid() {
    var mount = document.getElementById("category-grid");
    if (!mount) return;

    if (!liveCategories.length) {
      mount.outerHTML =
        '<div class="empty-note reveal">' +
        "<h3>New designs are on the way! &#10024;</h3>" +
        "<p>Nathan is busy cutting up fresh designs for the shop. Check back soon, or message us on Facebook to request something custom in the meantime.</p>" +
        '<a class="btn btn-primary" style="margin-top:12px;" href="' + withRoot("contact.html") + '">Get in touch</a>' +
        "</div>";
      return;
    }

    var icons = window.ICONS || {};
    mount.innerHTML = liveCategories
      .map(function (c) {
        var iconSvg = icons[c.iconKey] || "";
        return (
          '<a class="sticker-card ' + c.cardClass + ' reveal" href="' + withRoot(c.href) + '">' +
          '<div class="icon-wrap">' + iconSvg + "</div>" +
          "<h3>" + c.label + "</h3>" +
          "<p>" + c.tagline + "</p>" +
          "</a>"
        );
      })
      .join("");
  }

  // ---- Category quick-nav strip on category/product pages ----
  function renderCategoryNavStrip() {
    var mount = document.getElementById("category-nav-strip");
    if (!mount) return;

    if (!liveCategories.length) {
      mount.remove();
      return;
    }

    var current = window.location.pathname.split("/").pop() || "";
    mount.innerHTML = liveCategories
      .map(function (c) {
        var file = c.href.split("/").pop();
        var shortLabel = c.label.replace(/^Custom /, "").replace(/^Layered /, "").replace(/^3D /, "");
        var cls = current.indexOf(file.replace(".html", "")) === 0 ? ' class="active"' : "";
        return '<a href="' + withRoot(c.href) + '"' + cls + ">" + shortLabel + "</a>";
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var headerMount = document.getElementById("site-header");
    var footerMount = document.getElementById("site-footer");
    if (headerMount) {
      headerMount.innerHTML = navHTML;
      var toggle = headerMount.querySelector(".nav-toggle");
      var links = headerMount.querySelector(".nav-links");
      toggle.addEventListener("click", function () {
        var isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      // Mobile: tap "Shop" to expand dropdown instead of hover
      var dropdownParent = headerMount.querySelector(".has-dropdown");
      if (dropdownParent) {
        var dropdownToggleLink = dropdownParent.querySelector("a");
        dropdownToggleLink.addEventListener("click", function (e) {
          if (window.innerWidth <= 860) {
            e.preventDefault();
            dropdownParent.classList.toggle("open");
          }
        });
      }
      // Mark current page active
      var current = window.location.pathname.split("/").pop() || "index.html";
      headerMount.querySelectorAll(".nav-links > li > a").forEach(function (a) {
        var linkFile = a.getAttribute("href").split("/").pop();
        if (linkFile === current) a.classList.add("active");
      });
    }
    if (footerMount) {
      footerMount.innerHTML = footerHTML;
    }

    renderHomeCategoryGrid();
    renderCategoryNavStrip();

    // Reveal-on-scroll (also covers the home grid / any content rendered above)
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }
  });
})();
