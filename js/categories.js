/* ==========================================================================
   Nathan's Craft Corner — category metadata (single source of truth)
   Used by js/main.js to build the nav/footer/home grid, and by
   scripts/generate-product-pages.js to build individual product pages.

   A category only appears in the navigation, footer, and home page once it
   has at least one product in js/products-data.js. Add products there and
   the category will show up automatically — no need to edit this file to
   "turn on" a category.
   ========================================================================== */

var CATEGORIES = [
  {
    key: "calendars",
    label: "Custom Calendars",
    href: "products/calendars.html",
    cardClass: "card-blue",
    iconKey: "calendar",
    tagline: "Photo desk & wall calendars personalized year-round."
  },
  {
    key: "decals",
    label: "Vinyl Decals",
    href: "products/decals.html",
    cardClass: "card-blush",
    iconKey: "decal",
    tagline: "Die-cut names, quotes & designs for any surface."
  },
  {
    key: "souvenirs",
    label: "Custom Souvenirs",
    href: "products/souvenirs.html",
    cardClass: "card-mint",
    iconKey: "gift",
    tagline: "Party favors & keepsakes for weddings, baptisms & birthdays."
  },
  {
    key: "cards",
    label: "Layered Greeting Cards",
    href: "products/cards.html",
    cardClass: "card-lavender",
    iconKey: "card",
    tagline: "3D paper cards that pop for every occasion."
  },
  {
    key: "shadowBoxes",
    label: "3D Shadow Boxes",
    href: "products/shadow-boxes.html",
    cardClass: "card-sun",
    iconKey: "shadowBox",
    tagline: "Layered keepsake frames that tell your story in depth."
  }
];
