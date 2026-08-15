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
              Two products can share the same slug to link to one shared
              page (e.g. a physical + digital version of the same item).
     - customPage: set to true if the page at products/<category>-<slug>.html
              was hand-built (e.g. a rich sales page) instead of the plain
              auto-generated template. The generator script will skip it
              and leave it untouched on future runs.
     - hidden: set to true to keep a product in this file (so it's easy to
              bring back later) without showing it anywhere on the site —
              category pages, the home grid, and page generation all skip
              hidden products. Leave it off (or false) to show normally.

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

  shadowBoxes: [],

  storybooks: [
    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Printed Copy)",
      price: "65 QAR", type: "physical",
      desc: "Book 4 of our illustrated Bible storybook series, based on Matthew 14 — a gentle, watercolor-style keepsake for little hearts.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough", customPage: true, hidden: true },

    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Digital Download)",
      price: "$6", type: "digital",
      desc: "Book 4 of our illustrated Bible storybook series, based on Matthew 14 — instant digital download, print at home or read on any device.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough", customPage: true }
  ]
};
