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

  shadowBoxes: [],

  storybooks: [
    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Printed Copy)",
      price: "65 QAR", type: "physical",
      desc: "Book 4 of our illustrated Bible storybook series, based on Matthew 14 — a gentle, watercolor-style keepsake for little hearts.",
      longDesc: "In this gentle story, children discover two of Jesus's most beloved miracles: sharing a small gift until it becomes more than enough for everyone, and reaching out a hand to catch a friend who is afraid.\n\nBased on Matthew 14:13-21 and 22-33, \"More Than Enough\" follows Jesus feeding a great crowd with just five loaves and two fish, and walking on the water to reach his frightened friends in the storm. A warm reminder for little hearts that Jesus always provides and always saves.\n\nBook 4 in the series. Printed copies are made to order — message us on Facebook to arrange yours.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough-print" },

    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Digital Download)",
      price: "$27", type: "digital",
      desc: "Book 4 of our illustrated Bible storybook series, based on Matthew 14 — instant digital download, print at home or read on any device.",
      longDesc: "In this gentle story, children discover two of Jesus's most beloved miracles: sharing a small gift until it becomes more than enough for everyone, and reaching out a hand to catch a friend who is afraid.\n\nBased on Matthew 14:13-21 and 22-33, \"More Than Enough\" follows Jesus feeding a great crowd with just five loaves and two fish, and walking on the water to reach his frightened friends in the storm. A warm reminder for little hearts that Jesus always provides and always saves.\n\nBook 4 in the series. Instant digital download — read on any device or print at home.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough" }
  ]
};
