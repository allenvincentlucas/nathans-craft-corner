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
     - type:  "physical", "digital", or "both"
              physical -> shows a "Message on Facebook to order" button
              digital  -> shows a "Buy on Gumroad" button using gumroadUrl
              both     -> for a product sold as BOTH a physical item and a
                          digital download as ONE listing (one card, one
                          page) instead of two separate products. Use
                          physicalPrice + digitalPrice instead of price,
                          and gumroadUrl for the digital purchase link.
     - price: e.g. "₱350" or "$12" — shown as text, type whatever you like.
              Only used when type is "physical" or "digital".
     - physicalPrice / digitalPrice: used instead of price when type is
              "both", e.g. physicalPrice: "95 QAR", digitalPrice: "$8.99"
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

  calendars: [
    { name: "Living Word — A 2027 Scripture Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "A 12-card watercolor desk calendar with a miniature wooden easel — one hand-painted Scripture verse per month for 2027. Available as a printed set or a digital download.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/living-word-2027", image: "../images/products/living-word-2027-cover.jpg", slug: "living-word-2027", customPage: true },

    { name: "Boho Neutral — A 2027 Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "A Year of Gentle Growth — a 12-month A6 desk calendar in a soft boho-neutral palette, with a gentle affirmation for every month. Available as a printed set with wooden easel or a digital download.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/boho-neutral-2027-calendar", image: "../images/products/boho-2027-thumb.jpg", slug: "boho-neutral-2027", customPage: true },

    { name: "Gathered Blooms — A 2027 Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "A Year in Bloom — a 12-month A6 desk calendar of gathered dried botanicals in terracotta pots and hand-tied bouquets. Available as a printed set with wooden easel or a digital download.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/gathered-blooms-2027-calendar", image: "../images/products/gathered-blooms-2027-cover.jpg", slug: "gathered-blooms-2027", customPage: true }
  ],

  decals: [],

  souvenirs: [],

  cards: [
    { name: "Held & Heard — A Scripture Deck for Every Feeling",
      type: "both", physicalPrice: "75 QAR", digitalPrice: "$7.99",
      desc: "A 55-card scripture mood deck — 5 moods, 11 cards each — pairing a verse, a reflection, and an action phrase, with space to write your own.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/held-and-heard", image: "../images/products/held-heard/thumbnail.jpg", slug: "held-and-heard-faith-remedy-deck", customPage: true, hidden: true }
  ],

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
  ],

  planners: [
    { name: "2027 Agenda Planner",
      price: "150 QAR", type: "physical",
      desc: "A full-year spiral-bound agenda planner — yearly and monthly calendars, goal and habit trackers, weekly spreads for all of 2027, and year-end reflection pages.",
      gumroadUrl: "", image: "../images/products/agenda-planner-2027-cover.jpg", slug: "2027-agenda-planner", customPage: true },

    { name: "2027 Planner — 365 Days",
      price: "150 QAR", type: "physical",
      desc: "An all-in-one A4 daily planner for 2027 — a dedicated page for every single day, plus monthly calendars, weekly planners, contacts, password tracker, and important dates.",
      gumroadUrl: "", image: "../images/products/planner-365-days-2027-cover.jpg", slug: "2027-365-day-planner", customPage: true }
  ]
};
