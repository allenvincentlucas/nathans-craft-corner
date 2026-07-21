/* ==========================================================================
   Nathan's Craft Corner — PRODUCT DATA
   This is the ONLY file you need to touch to add, remove, or edit products.

   IMPORTANT: A category page (and its nav/footer/home-grid link) is hidden
   automatically while its array below is empty, and shows a friendly
   "new designs coming soon" message instead. As soon as you add one
   product to a category, that category appears everywhere on the site.

   HOW TO ADD A NEW PRODUCT:
   Copy the example object (commented out below) into the right
   category array and fill in:
     - name:  Product name shown on the card
     - price: e.g. "₱350" or "$12" — shown as text, type whatever you like
     - type:  "physical" or "digital"
              physical -> shows a "Message on Facebook to order" button
              digital  -> shows a "Buy on Gumroad" button using gumroadUrl
     - desc:  One short sentence about the product (shown on the card)
     - gumroadUrl: only needed for digital products, leave "" for physical
                   (defaults to the shop's Gumroad profile if left blank)
     - image: leave "" to show a placeholder icon, or a path like
              "../images/products/my-photo.jpg" once you upload a photo
     - slug:  a short, URL-safe id, e.g. "family-photo-desk-calendar".
              Once a product has a slug, message Claude (or run
              scripts/generate-product-pages.js) to generate its own
              individual product page at
              products/<category>-<slug>.html, and the card will link to it.
              Leave slug as "" if you don't want a dedicated page yet.

   Categories are the array names: calendars, decals, souvenirs, cards, shadowBoxes
   ========================================================================== */

var PRODUCTS = {
  // Example (copy into an array below, then delete this comment block):
  // { name: "Family Photo Desk Calendar", price: "₱350", type: "physical",
  //   desc: "A5 flip calendar personalized with your family's favorite photos.",
  //   gumroadUrl: "", image: "", slug: "family-photo-desk-calendar" }

  calendars: [],

  decals: [],

  souvenirs: [],

  cards: [],

  shadowBoxes: []
};
