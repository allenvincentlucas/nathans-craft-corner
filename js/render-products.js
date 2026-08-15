/* ==========================================================================
   Nathan's Craft Corner — renders product cards onto category pages.
   Reads window.PRODUCTS (from products-data.js) filtered by the
   data-category attribute on the #product-grid element.
   ========================================================================== */

(function () {
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var GUMROAD_PROFILE = "https://maestroallen.gumroad.com/";
  var FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61575226142723";

  // Look up the URL prefix ("shadow-boxes" from "products/shadow-boxes.html")
  // for a category so individual product pages can be linked as
  // products/<prefix>-<slug>.html
  function categoryUrlPrefix(categoryKey) {
    var meta = (window.CATEGORIES || []).find(function (c) { return c.key === categoryKey; });
    if (!meta) return categoryKey;
    return meta.href.replace(/^products\//, "").replace(/\.html$/, "");
  }

  function productCard(p, iconKey, categoryKey) {
    var photoInner = p.image
      ? '<img src="' + p.image + '" alt="' + escapeHtml(p.name) + '" style="width:100%;height:100%;object-fit:cover;">'
      : ICONS[iconKey] || ICONS.photo;

    var comingSoonTag = p.image ? "" : '<span class="coming-soon-tag">Photo coming soon</span>';

    var badge = p.type === "digital"
      ? '<span class="badge badge-digital">Digital download</span>'
      : '<span class="badge badge-physical">Made to order</span>';

    var action = p.type === "digital"
      ? '<a class="btn btn-sm btn-blue" href="' + (p.gumroadUrl || GUMROAD_PROFILE) + '" target="_blank" rel="noopener">Buy on Gumroad</a>'
      : '<a class="btn btn-sm btn-primary" href="' + FACEBOOK_URL + '" target="_blank" rel="noopener">Message to order</a>';

    var detailsLink = "";
    var titleHTML = "<h3>" + escapeHtml(p.name) + "</h3>";
    if (p.slug) {
      var detailHref = categoryUrlPrefix(categoryKey) + "-" + p.slug + ".html";
      titleHTML = '<h3><a href="' + detailHref + '" style="color:inherit;">' + escapeHtml(p.name) + "</a></h3>";
      detailsLink = '<a class="btn btn-sm btn-secondary" href="' + detailHref + '">View details</a> ';
    }

    return (
      '<div class="product-card reveal">' +
      '<div class="product-photo">' + photoInner + comingSoonTag + "</div>" +
      '<div class="product-info">' +
      badge +
      titleHTML +
      '<p class="desc">' + escapeHtml(p.desc) + "</p>" +
      '<p class="price">' + escapeHtml(p.price) + "</p>" +
      '<div class="product-actions">' + detailsLink + action + "</div>" +
      "</div>" +
      "</div>"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("product-grid");
    if (!grid) return;

    var categoryKey = grid.getAttribute("data-category");
    var iconKey = grid.getAttribute("data-icon") || "photo";
    var items = ((window.PRODUCTS && window.PRODUCTS[categoryKey]) || []).filter(function (p) { return !p.hidden; });

    if (!items.length) {
      grid.outerHTML =
        '<div class="empty-note reveal">' +
        "<h3>New designs are on the way! &#10024;</h3>" +
        "<p>Nathan is cooking up fresh designs for this category. Check back soon, or message us on Facebook to request something custom.</p>" +
        '<a class="btn btn-primary" style="margin-top:12px;" href="https://www.facebook.com/profile.php?id=61575226142723" target="_blank" rel="noopener">Message on Facebook</a>' +
        "</div>";
      return;
    }

    grid.innerHTML = items.map(function (p) { return productCard(p, iconKey, categoryKey); }).join("");

    // re-run reveal-on-scroll for the newly injected cards
    var revealEls = grid.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
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
