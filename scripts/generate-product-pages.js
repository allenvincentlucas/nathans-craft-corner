#!/usr/bin/env node
/* ==========================================================================
   Nathan's Craft Corner — individual product page generator

   Reads js/categories.js, js/products-data.js, and js/icons.js, and for
   every product that has a non-empty `slug`, generates its own page at:

       products/<category-url-prefix>-<slug>.html

   e.g. a calendar with slug "family-photo-desk-calendar" becomes
       products/calendars-family-photo-desk-calendar.html

   Run it from the site root:
       node scripts/generate-product-pages.js

   Safe to re-run any time — it only touches files for products that
   currently have a slug, and overwrites them with the latest data.
   Products without a slug are skipped (no page is generated for them).
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function loadDataFile(relPath, exposedGlobals) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: relPath });
  return sandbox;
}

const categoriesSandbox = loadDataFile("js/categories.js");
const productsSandbox = loadDataFile("js/products-data.js");
const iconsSandbox = loadDataFile("js/icons.js");

const CATEGORIES = categoriesSandbox.CATEGORIES;
const PRODUCTS = productsSandbox.PRODUCTS;
const ICONS = iconsSandbox.ICONS;

const GUMROAD_PROFILE = "https://maestroallen.gumroad.com/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61575226142723";
const SITE_BASE_URL = "https://allenvincentlucas.github.io/nathans-craft-corner/";

function urlPrefixFor(categoryMeta) {
  return categoryMeta.href.replace(/^products\//, "").replace(/\.html$/, "");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function productPageHtml(product, categoryMeta) {
  const prefix = urlPrefixFor(categoryMeta);
  const iconSvg = product.image
    ? '<img src="../images/' + (product.image.replace(/^\.\.\/images\//, "")) + '" alt="' + escapeHtml(product.name) + '" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);">'
    : (ICONS[categoryMeta.iconKey] || "");

  const badgeHtml = product.type === "both"
    ? '<span class="badge badge-both">Physical &amp; Digital</span>'
    : product.type === "digital"
    ? '<span class="badge badge-digital">Digital download</span>'
    : '<span class="badge badge-physical">Made to order</span>';

  const actionHtml = product.type === "both"
    ? '<a class="btn btn-primary" href="' + (product.gumroadUrl || GUMROAD_PROFILE) + '" target="_blank" rel="noopener">Buy on Gumroad</a> ' +
      '<a class="btn btn-secondary" href="' + FACEBOOK_URL + '" target="_blank" rel="noopener">Message to Order (Qatar only)</a>'
    : product.type === "digital"
    ? '<a class="btn btn-primary" href="' + (product.gumroadUrl || GUMROAD_PROFILE) + '" target="_blank" rel="noopener">Buy on Gumroad</a>'
    : '<a class="btn btn-primary" href="' + FACEBOOK_URL + '" target="_blank" rel="noopener">Message on Facebook to order</a>';

  const priceDisplay = product.type === "both"
    ? escapeHtml(product.digitalPrice || "") + " digital &middot; " + escapeHtml(product.physicalPrice || "") + " physical"
    : escapeHtml(product.price || "");

  const descParagraphs = (product.longDesc || product.desc)
    .split(/\n\n+/)
    .map(function (p) { return "<p>" + escapeHtml(p) + "</p>"; })
    .join("\n        ");

  const fileName = prefix + "-" + product.slug + ".html";
  const pageUrl = SITE_BASE_URL + "products/" + fileName;
  const ogImage = product.image
    ? SITE_BASE_URL + "images/" + product.image.replace(/^\.\.\/images\//, "")
    : SITE_BASE_URL + "images/og-default.jpg";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(product.name)} — Nathan's Craft Corner</title>
<meta name="description" content="${escapeHtml(product.desc)}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Nathan's Craft Corner">
<meta property="og:url" content="${pageUrl}">
<meta property="og:title" content="${escapeHtml(product.name)}">
<meta property="og:description" content="${escapeHtml(product.desc)}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(product.name)}">
<meta name="twitter:description" content="${escapeHtml(product.desc)}">
<meta name="twitter:image" content="${ogImage}">

<link rel="icon" type="image/x-icon" href="../images/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="../images/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&amp;family=Quicksand:wght@400;500;600;700&amp;family=Caveat:wght@500;600;700&amp;display=swap" rel="stylesheet">
<link rel="canonical" href="${pageUrl}">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>

<script>window.SITE_ROOT = "../";</script>

<header id="site-header" class="site-header"></header>

<main>
  <nav id="category-nav-strip" class="category-nav-strip" aria-label="Shop categories"></nav>

  <section class="container" style="padding-top:32px;">
    <p class="breadcrumb reveal">
      <a href="../index.html">Home</a> &rsaquo;
      <a href="${prefix}.html">${escapeHtml(categoryMeta.label)}</a> &rsaquo;
      ${escapeHtml(product.name)}
    </p>

    <div class="product-detail reveal">
      <div class="product-detail-photo">
        ${iconSvg}
      </div>
      <div class="product-detail-info">
        ${badgeHtml}
        <h1>${escapeHtml(product.name)}</h1>
        <p class="price" style="font-size:1.4rem;">${priceDisplay}</p>
        ${descParagraphs}
        <div class="product-actions" style="margin-top:10px;">
          ${actionHtml}
        </div>
        <div id="share-bar" class="share-bar"></div>
        <p style="margin-top:18px;"><a href="${prefix}.html">&larr; Back to ${escapeHtml(categoryMeta.label)}</a></p>
      </div>
    </div>
  </section>
</main>

<footer id="site-footer" class="site-footer"></footer>

<script src="../js/icons.js"></script>
<script src="../js/categories.js"></script>
<script src="../js/products-data.js"></script>
<script src="../js/main.js"></script>
<script src="../js/share.js"></script>
</body>
</html>
`;
}

let created = 0;
let skipped = 0;

CATEGORIES.forEach(function (categoryMeta) {
  const items = PRODUCTS[categoryMeta.key] || [];
  items.forEach(function (product) {
    if (product.hidden) {
      console.log("Skipped products/" + urlPrefixFor(categoryMeta) + "-" + product.slug + ".html (hidden product)");
      skipped++;
      return;
    }
    if (!product.slug) {
      skipped++;
      return;
    }
    if (product.customPage) {
      console.log("Skipped products/" + urlPrefixFor(categoryMeta) + "-" + product.slug + ".html (hand-built customPage, left untouched)");
      skipped++;
      return;
    }
    const prefix = urlPrefixFor(categoryMeta);
    const fileName = prefix + "-" + product.slug + ".html";
    const filePath = path.join(ROOT, "products", fileName);
    fs.writeFileSync(filePath, productPageHtml(product, categoryMeta), "utf8");
    console.log("Generated products/" + fileName);
    created++;
  });
});

console.log("\nDone. " + created + " product page(s) generated, " + skipped + " product(s) skipped (no slug).");
