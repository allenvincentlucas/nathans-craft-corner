/* ========================================================================== 
   Nathan's Craft Corner — PRODUCT DATA
   Add/edit products here. Custom product pages use customPage: true so the
   page generator will not overwrite them.
   ========================================================================== */

var PRODUCTS = {
  calendars: [
    { name: "A YEAR IN QATAR 2027",
      type: "both", physicalPrice: "68.25 QAR", digitalPrice: "$9.44",
      desc: "A 13-page illustrated A5 Sunday-start calendar inspired by Qatar’s desert, sea, city life, heritage, and family moments.",
      longDesc: "Plan 2027 with a warm illustrated calendar inspired by life in Qatar. The set includes one cover plus January–December, accurate Sunday-start grids, and generous writing space. The digital package is designed for worldwide printing; the Qatar physical edition includes the A5 calendar and wooden display easel.",
      status: "Launches 15 September 2026",
      details: ["13 illustrated A5 pages: cover + January–December", "Accurate Sunday-start calendar grids", "Digital printable available worldwide", "Qatar physical edition includes wooden easel", "Physical production lead time: 2–3 working days"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to reserve Qatar edition",
      gumroadUrl: "", image: "", slug: "a-year-in-qatar-2027", customPage: true },

    { name: "2027 Worship Team Calendar",
      type: "both", physicalPrice: "69 QAR", digitalPrice: "$9.44",
      desc: "A 13-card A5 calendar for worship leaders, vocalists, musicians, and ministry teams, with warm editorial worship imagery.",
      longDesc: "Plan rehearsals, services, and ministry life with a calendar created especially for worship teams. The physical Qatar set includes one cover and January–December A5 calendar cards with a wooden display easel. A worldwide digital printable is also available.",
      status: "Launches 25 September 2026",
      details: ["13 premium A5 calendar cards", "Sunday-start monthly grids", "Worship-team editorial visual theme", "Worldwide digital printable", "Qatar physical edition with wooden easel", "Physical production lead time: 2–3 working days"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to reserve Qatar edition",
      gumroadUrl: "", image: "", slug: "2027-worship-team-calendar", customPage: true },

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
    { name: "Blessed in God’s Kingdom",
      type: "both", physicalPrice: "45 QAR + delivery", digitalPrice: "$7.35 / QAR 27",
      desc: "A 16-page illustrated Catholic Gospel reflection for ages 6–8 based on Luke 6:20–26, with story, reflection, prayer, activity, and a kindness challenge.",
      longDesc: "Help children discover what Jesus means by true happiness. Blessed in God’s Kingdom is a 16-page Catholic Gospel reflection based on Luke 6:20–26 for ages 6–8. Children read, reflect, pray, create, and choose one loving action to live during the week.",
      status: "Available now",
      details: ["16-page A4 illustrated Catholic Gospel reflection", "For ages 6–8", "Based on Luke 6:20–26", "Includes reflection, prayer, creative activity, and Live It kindness challenge", "Digital edition available worldwide", "Qatar printed edition available; delivery separate"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message to order digital edition",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print",
      gumroadUrl: "", image: "", slug: "blessed-in-gods-kingdom", customPage: true },

    { name: "Jesus Is With Me at Mass",
      type: "both", physicalPrice: "49 QAR + delivery", digitalPrice: "$9.49",
      desc: "A gentle 16-page Catholic picture ebook for ages 2–4 that helps little children notice, listen, pray, and remember that Jesus is near during Mass.",
      longDesc: "Help little hearts feel at home during Mass. Jesus Is With Me at Mass uses simple words, warm illustrations, and familiar church moments to help children ages 2–4 enter Mass with curiosity, participate with love, and remember that Jesus is near. The Qatar physical edition is available for QAR 49 + delivery.",
      status: "Launches 20 September 2026",
      details: ["16-page A4 Catholic picture ebook", "Created for ages 2–4", "Gentle, age-appropriate Mass preparation and reflection", "Useful for home, parish, preschool, and catechism", "Digital edition available worldwide", "Qatar physical edition: QAR 49 + delivery"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print — QAR 49",
      gumroadUrl: "", image: "", slug: "jesus-is-with-me-at-mass", customPage: true },

    { name: "Nine Nights Until Christmas",
      type: "both", physicalPrice: "49 QAR + delivery", digitalPrice: "Launch $5.99 · regular $7.49",
      desc: "A 32-page illustrated Catholic children’s storybook introducing Simbang Gabi through a Filipino family journey of prayer, sacrifice, community, and preparation for Jesus.",
      longDesc: "Share the meaning of Simbang Gabi with the next generation. Nine Nights Until Christmas follows a Filipino family through nine early mornings of Mass, prayer, sacrifice, community, and joyful preparation for Christ’s birth, with reverence, cultural warmth, and child safety at its center.",
      status: "Digital launch: 5 October 2026",
      details: ["32-page A4 illustrated Catholic family story", "Introduces the Simbang Gabi tradition to children", "Faithful focus on Mass, family prayer, sacrifice, hope, and preparation for Christ", "Digital edition available worldwide", "Launch digital price: $5.99; regular price: $7.49", "Qatar printed edition: 49 QAR; delivery separate"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print",
      gumroadUrl: "", image: "", slug: "nine-nights-until-christmas", customPage: true },

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
  ],

  notepads: [
    { name: "Lectio Divina: My Teen Prayer Sesh", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "A colorful, teen-friendly Lectio Divina notepad — five simple steps to read, reflect, pray, listen, and live it out, one page at a time.",
      gumroadUrl: "", image: "../images/products/notepads/lectio-divina-teen-prayer-sesh.jpg", slug: "lectio-divina-teen-prayer-sesh", customPage: true, hidden: true },
    { name: "The Examen: Basecamp Reflection", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "A hiking-themed nightly Examen notepad — Trail Highlights, Elevation, Retrace Your Steps, Tripping Hazards, and Tomorrow's Compass.",
      gumroadUrl: "", image: "../images/products/notepads/examen-basecamp-reflection.jpg", slug: "examen-basecamp-reflection", customPage: true, hidden: true },
    { name: "Soul Session: Teen Lectio Divina", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "A clean, minimal take on the five-step Lectio Divina — Lectio, Meditatio, Oratio, Contemplatio, and Actio — for a quiet daily prayer session.",
      gumroadUrl: "", image: "../images/products/notepads/soul-session-teen-lectio-divina.jpg", slug: "soul-session-teen-lectio-divina", customPage: true, hidden: true },
    { name: "Soul Session: My Daily Lectio Divina (Teen Edition)", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "A colorful, icon-guided single-page Lectio Divina — five numbered steps from reading the Word to living it out, with a daily vibe check.",
      gumroadUrl: "", image: "../images/products/notepads/soul-session-daily-lectio-divina.jpg", slug: "soul-session-daily-lectio-divina", customPage: true, hidden: true }
  ]
};
