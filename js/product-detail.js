/* Nathan's Craft Corner — renderer for launch-ready custom product pages */
(function () {
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function categoryMeta(key) {
    return (window.CATEGORIES || []).find(function (c) { return c.key === key; }) || null;
  }

  function priceHtml(p) {
    if (p.type === "both") {
      return esc(p.digitalPrice || "") + " digital &middot; " + esc(p.physicalPrice || "") + " physical";
    }
    return esc(p.price || "");
  }

  function badgeHtml(p) {
    if (p.type === "both") return '<span class="badge badge-both">Physical &amp; Digital</span>';
    if (p.type === "digital") return '<span class="badge badge-digital">Digital download</span>';
    return '<span class="badge badge-physical">Made to order</span>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("product-detail-root");
    if (!root) return;

    var categoryKey = root.getAttribute("data-category");
    var slug = root.getAttribute("data-slug");
    var meta = categoryMeta(categoryKey);
    var items = (window.PRODUCTS && window.PRODUCTS[categoryKey]) || [];
    var p = items.find(function (item) { return item.slug === slug; });

    if (!p || !meta) {
      root.innerHTML = '<div class="empty-note"><h2>Product not found</h2><p>Please return to the shop and try again.</p></div>';
      return;
    }

    var icon = (window.ICONS && window.ICONS[meta.iconKey]) || (window.ICONS && window.ICONS.photo) || "";
    var media = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);">'
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:48px;background:var(--paper);border-radius:var(--radius-md);">' + icon + '</div>';

    var details = (p.details || []).map(function (item) { return '<li>' + esc(item) + '</li>'; }).join("");
    var desc = esc(p.longDesc || p.desc || "");
    var actions = [];
    if (p.type === "digital" || p.type === "both") {
      actions.push('<a class="btn btn-blue" href="' + esc(p.digitalOrderUrl || p.gumroadUrl || "https://www.facebook.com/NathansCraftCorner/") + '" target="_blank" rel="noopener">' + esc(p.digitalOrderLabel || "Order digital edition") + '</a>');
    }
    if (p.type === "physical" || p.type === "both") {
      actions.push('<a class="btn btn-primary" href="' + esc(p.physicalOrderUrl || "https://www.facebook.com/NathansCraftCorner/") + '" target="_blank" rel="noopener">' + esc(p.physicalOrderLabel || "Message to order") + '</a>');
    }

    root.innerHTML =
      '<p class="breadcrumb reveal"><a href="../index.html">Home</a> &rsaquo; <a href="' + meta.href.replace(/^products\//, "") + '">' + esc(meta.label) + '</a> &rsaquo; ' + esc(p.name) + '</p>' +
      '<div class="product-detail reveal" style="margin-top:12px;">' +
        '<div class="product-detail-photo">' + media + '</div>' +
        '<div class="product-detail-info">' +
          badgeHtml(p) +
          (p.status ? '<p class="eyebrow script" style="margin:10px 0 4px;">' + esc(p.status) + '</p>' : '') +
          '<h1>' + esc(p.name) + '</h1>' +
          '<p class="price" style="font-size:1.35rem;">' + priceHtml(p) + '</p>' +
          '<p>' + desc + '</p>' +
          (details ? '<ul style="margin:18px 0 20px;padding-left:20px;">' + details + '</ul>' : '') +
          '<div class="product-actions">' + actions.join(' ') + '</div>' +
          '<div id="share-bar" class="share-bar"></div>' +
          '<p style="margin-top:18px;"><a href="' + meta.href.replace(/^products\//, "") + '">&larr; Back to ' + esc(meta.label) + '</a></p>' +
        '</div>' +
      '</div>';
  });
})();
