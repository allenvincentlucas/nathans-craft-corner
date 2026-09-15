/* ========================================================================== 
   Nathan's Craft Corner — PRODUCT DATA
   Add/edit products here. Custom product pages use customPage: true so the
   page generator will not overwrite them.
   ========================================================================== */

var PRODUCTS = {
  calendars: [
    { name: "A YEAR IN QATAR 2027",
      type: "both", physicalPrice: "68.25 QAR", digitalPrice: "$9.44",
      desc: "Bring a year of Qatar to your desk with 13 illustrated A5 pages celebrating the desert, sea, city life, heritage, and warm family moments — all in an accurate Sunday-start format.",
      longDesc: "Plan 2027 while celebrating the places, traditions, and everyday moments that make Qatar feel like home. A YEAR IN QATAR 2027 pairs warm illustrated scenes with spacious, accurate Sunday-start grids, giving you room for appointments, school dates, family plans, and reminders without losing the beauty of the artwork. The set includes one cover plus January–December. Choose the worldwide digital printable, or the Qatar physical edition with an A5 calendar and wooden display easel.",
      status: "Launches 15 September 2026",
      details: ["13 illustrated A5 pages: cover + January–December", "Accurate Sunday-start calendar grids", "Digital printable available worldwide", "Qatar physical edition includes wooden easel", "Physical production lead time: 2–3 working days"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to reserve Qatar edition",
      gumroadUrl: "", image: "../images/products/a-year-in-qatar-2027.webp", slug: "a-year-in-qatar-2027", customPage: true },

    { name: "2027 Worship Team Calendar",
      type: "both", physicalPrice: "69 QAR", digitalPrice: "$9.44",
      desc: "Keep rehearsals, services, and ministry dates in view with 13 premium A5 calendar cards created especially for worship leaders, vocalists, musicians, and ministry teams.",
      longDesc: "Plan the year with a calendar that feels at home in worship ministry. The 2027 Worship Team Calendar combines practical Sunday-start monthly grids with warm editorial worship-team imagery, making it useful for rehearsals, services, team schedules, and everyday planning. The Qatar physical edition includes one cover plus January–December A5 cards and a wooden display easel, while the worldwide digital printable gives teams an easy option to print locally.",
      status: "Launches 25 September 2026",
      details: ["13 premium A5 calendar cards", "Sunday-start monthly grids", "Worship-team editorial visual theme", "Worldwide digital printable", "Qatar physical edition with wooden easel", "Physical production lead time: 2–3 working days"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to reserve Qatar edition",
      gumroadUrl: "", image: "../images/products/worship-team-calendar-2027.png", slug: "worship-team-2027", customPage: true },

    { name: "Living Word — A 2027 Scripture Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "Keep Scripture within sight all year with a 12-card watercolor desk calendar featuring one hand-painted Bible verse for every month of 2027.",
      longDesc: "Create a gentle monthly rhythm of Scripture and reflection with Living Word. Each of the 12 watercolor calendar cards pairs the month with a hand-painted Bible verse, turning an everyday desk calendar into a quiet visual reminder of faith. Choose the printed set with miniature wooden easel for display, or the digital edition for convenient printing at home or through a local print shop.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/living-word-2027", image: "../images/products/living-word-2027-cover.jpg", slug: "living-word-2027", customPage: true },

    { name: "Boho Neutral — A 2027 Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "Bring a calmer rhythm to 2027 with a 12-month A6 desk calendar in soft boho-neutral tones, paired with one gentle affirmation each month.",
      longDesc: "Designed for desks and spaces that feel calm, warm, and uncluttered, Boho Neutral — A 2027 Calendar combines a soft neutral palette with a simple monthly affirmation. The compact A6 format keeps planning close without overwhelming your workspace. Choose the printed set with wooden easel for an easy display piece, or the digital edition for flexible printing.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/boho-neutral-2027-calendar", image: "../images/products/boho-2027-thumb.jpg", slug: "boho-neutral-2027", customPage: true },

    { name: "Gathered Blooms — A 2027 Calendar",
      type: "both", physicalPrice: "95 QAR", digitalPrice: "$12",
      desc: "Add a little botanical warmth to every month with a 12-month A6 desk calendar inspired by gathered dried flowers, terracotta pots, and hand-tied bouquets.",
      longDesc: "Gathered Blooms brings the quiet beauty of dried botanicals to your desk throughout 2027. Each monthly design features an earthy floral composition — from terracotta pots to hand-tied bouquets — in a compact A6 format made for everyday display. Choose the printed set with wooden easel or the digital edition for convenient local printing.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/gathered-blooms-2027-calendar", image: "../images/products/gathered-blooms-2027-cover.jpg", slug: "gathered-blooms-2027", customPage: true }
  ],

  decals: [],
  souvenirs: [],

  cards: [
    { name: "Held & Heard — A Scripture Deck for Every Feeling",
      type: "both", physicalPrice: "75 QAR", digitalPrice: "$7.99",
      desc: "A 55-card Scripture mood deck that helps you meet five different feelings with a Bible verse, a short reflection, an action phrase, and space for your own response.",
      longDesc: "Held & Heard gives you a simple, faith-centered way to pause and respond when emotions feel hard to name. The 55-card deck is organized into five moods with 11 cards each, pairing Scripture with a short reflection, a practical action phrase, and room to add your own thoughts. Use it for personal reflection, family faith moments, or gentle encouragement throughout the week.",
      gumroadUrl: "https://maestroallen.gumroad.com/l/held-and-heard", image: "../images/products/held-heard/thumbnail.jpg", slug: "held-and-heard-faith-remedy-deck", customPage: true, hidden: true }
  ],

  shadowBoxes: [],

  storybooks: [
    { name: "Blessed in God’s Kingdom",
      type: "both", physicalPrice: "45 QAR + delivery", digitalPrice: "$7.35 / QAR 27",
      desc: "Help children ages 6–8 discover Jesus’ surprising picture of true happiness through a 16-page illustrated Gospel reflection based on Luke 6:20–26.",
      longDesc: "Turn Luke 6:20–26 into a meaningful faith conversation children can understand and live. Blessed in God’s Kingdom invites ages 6–8 to read the Gospel message, reflect on what true happiness means, pray in simple words, complete a creative activity, and choose one loving action for the week. The 16-page illustrated format works well for home, parish, classroom, or catechism use and is available digitally worldwide or as a printed edition in Qatar.",
      status: "Available now",
      details: ["16-page A4 illustrated Catholic Gospel reflection", "For ages 6–8", "Based on Luke 6:20–26", "Includes reflection, prayer, creative activity, and Live It kindness challenge", "Digital edition available worldwide", "Qatar printed edition available; delivery separate"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message to order digital edition",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print",
      gumroadUrl: "", image: "../images/products/blessed-in-gods-kingdom.webp", slug: "blessed-in-gods-kingdom", customPage: true },

    { name: "Jesus Is With Me at Mass",
      type: "both", physicalPrice: "49 QAR + delivery", digitalPrice: "$9.49",
      desc: "Help little children ages 2–4 feel more at home in church with a gentle 16-page Catholic picture book about noticing, listening, praying, and remembering that Jesus is near at Mass.",
      longDesc: "Make a child’s first experiences of Mass feel familiar, peaceful, and full of wonder. Jesus Is With Me at Mass follows simple church moments with warm illustrations and age-appropriate language, helping children ages 2–4 notice what is happening, listen, pray, and remember that Jesus is close. It is designed for family reading and can also support parish, preschool, and catechism settings. The digital edition is available worldwide, with a printed Qatar edition available for QAR 49 + delivery.",
      status: "Launches 20 September 2026",
      details: ["16-page A4 Catholic picture ebook", "Created for ages 2–4", "Gentle, age-appropriate Mass preparation and reflection", "Useful for home, parish, preschool, and catechism", "Digital edition available worldwide", "Qatar physical edition: QAR 49 + delivery"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print — QAR 49",
      gumroadUrl: "", image: "../images/products/jesus-with-me-at-mass.webp", slug: "jesus-is-with-me-at-mass", customPage: true },

    { name: "Nine Nights Until Christmas",
      type: "both", physicalPrice: "49 QAR + delivery", digitalPrice: "Launch $5.99 · regular $7.49",
      desc: "Share the meaning of Simbang Gabi with the next generation through a 32-page illustrated Catholic family story filled with prayer, sacrifice, community, hope, and joyful preparation for Jesus.",
      longDesc: "Invite children into the heart of a beloved Filipino Catholic Christmas tradition. Nine Nights Until Christmas follows a family through nine early mornings of Simbang Gabi, showing Mass, prayer, sacrifice, community, and joyful preparation for Christ’s birth in a child-friendly story. The book keeps faith and culture together with reverence, warmth, and child safety at its center, making it meaningful for families, catechists, parishes, and Filipino communities. A digital edition is available worldwide, with printed copies available in Qatar.",
      status: "Digital launch: 5 October 2026",
      details: ["32-page A4 illustrated Catholic family story", "Introduces the Simbang Gabi tradition to children", "Faithful focus on Mass, family prayer, sacrifice, hope, and preparation for Christ", "Digital edition available worldwide", "Launch digital price: $5.99; regular price: $7.49", "Qatar printed edition: 49 QAR; delivery separate"],
      digitalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", digitalOrderLabel: "Message for digital order",
      physicalOrderUrl: "https://www.facebook.com/NathansCraftCorner/", physicalOrderLabel: "Message to order Qatar print",
      gumroadUrl: "", image: "../images/products/nine-nights-until-christmas.png", slug: "nine-nights-until-christmas", customPage: true },

    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Printed Copy)",
      price: "65 QAR", type: "physical",
      desc: "Share Matthew 14 with little hearts through a gentle illustrated story of Jesus feeding the crowd and walking on the water, created as a warm watercolor-style keepsake.",
      longDesc: "More Than Enough brings two memorable moments from Matthew 14 into a gentle illustrated story for children. Follow the wonder of Jesus feeding the crowd and walking on the water through warm watercolor-style pages designed for family reading and faith-filled conversation. This printed Book 4 edition is created as a keepsake children can return to again and again.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough", customPage: true, hidden: true },

    { name: "More Than Enough: Jesus Feeds the Crowd and Walks on the Water — Book 4 (Digital Download)",
      price: "$6", type: "digital",
      desc: "Explore Matthew 14 through a gentle illustrated story of Jesus feeding the crowd and walking on the water — ready to read on a device or print for family use.",
      longDesc: "More Than Enough brings two memorable moments from Matthew 14 into a gentle illustrated story for children. Follow the wonder of Jesus feeding the crowd and walking on the water through warm watercolor-style pages designed for family reading and faith-filled conversation. The digital edition can be read on a device or printed at home for convenient personal use.",
      gumroadUrl: "", image: "../images/products/storybook-more-than-enough.jpg", slug: "book-4-more-than-enough", customPage: true }
  ],

  planners: [
    { name: "2027 Agenda Planner",
      price: "150 QAR", type: "physical",
      desc: "Bring your whole year into one organized place with a spiral-bound 2027 agenda featuring yearly and monthly calendars, goals, habits, weekly planning, and year-end reflection.",
      longDesc: "Keep the big picture and the week ahead together in one practical planner. The 2027 Agenda Planner combines yearly and monthly calendar views with goal and habit tracking, weekly spreads for the full year, and reflection pages to help you look back before moving forward. Its spiral-bound format is designed for regular desk, home, study, or work use throughout 2027.",
      gumroadUrl: "", image: "../images/products/agenda-planner-2027-cover.jpg", slug: "2027-agenda-planner", customPage: true },

    { name: "2027 Planner — 365 Days",
      price: "150 QAR", type: "physical",
      desc: "Give every day of 2027 its own space with an A4 daily planner that combines 365 dedicated day pages with monthly calendars, weekly planning, contacts, passwords, and important dates.",
      longDesc: "For people who want room to plan every single day, the 2027 Planner — 365 Days keeps daily detail and year-round organization together. Each day has a dedicated planning page, supported by monthly calendars, weekly planning pages, contacts, password tracking, and important-date sections. The A4 format gives you generous writing space for a full year of schedules, tasks, and notes.",
      gumroadUrl: "", image: "../images/products/planner-365-days-2027-cover.jpg", slug: "2027-365-day-planner", customPage: true }
  ],

  notepads: [
    { name: "Lectio Divina: My Teen Prayer Sesh", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "Turn Scripture into a simple daily prayer habit with a colorful teen-friendly Lectio Divina page that guides reading, reflection, prayer, listening, and action step by step.",
      longDesc: "Lectio Divina: My Teen Prayer Sesh makes an ancient Catholic prayer practice approachable for teens. Each page walks through five clear steps — read, reflect, pray, listen, and live it out — with a bright, friendly layout that gives young people room to respond in their own words.",
      gumroadUrl: "", image: "../images/products/notepads/lectio-divina-teen-prayer-sesh.jpg", slug: "lectio-divina-teen-prayer-sesh", customPage: true, hidden: true },
    { name: "The Examen: Basecamp Reflection", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "End the day with purpose using a hiking-themed Examen page that helps teens notice gratitude, review choices, name obstacles, and choose a direction for tomorrow.",
      longDesc: "The Examen: Basecamp Reflection turns a nightly prayer review into an easy-to-follow trail. Prompts such as Trail Highlights, Elevation, Retrace Your Steps, Tripping Hazards, and Tomorrow’s Compass help teens look back with honesty, gratitude, and hope before beginning the next day.",
      gumroadUrl: "", image: "../images/products/notepads/examen-basecamp-reflection.jpg", slug: "examen-basecamp-reflection", customPage: true, hidden: true },
    { name: "Soul Session: Teen Lectio Divina", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "Create a quiet Scripture routine with a clean five-step Lectio Divina page guiding teens through Lectio, Meditatio, Oratio, Contemplatio, and Actio.",
      longDesc: "Soul Session: Teen Lectio Divina offers a calm, minimal space for teens who want to pray with Scripture without visual clutter. The page moves through the five traditional stages — Lectio, Meditatio, Oratio, Contemplatio, and Actio — so reading can naturally lead into reflection, prayer, stillness, and one concrete response.",
      gumroadUrl: "", image: "../images/products/notepads/soul-session-teen-lectio-divina.jpg", slug: "soul-session-teen-lectio-divina", customPage: true, hidden: true },
    { name: "Soul Session: My Daily Lectio Divina (Teen Edition)", type: "both", physicalPrice: "55 QAR", digitalPrice: "$8.99",
      desc: "Make daily Scripture reflection easier to begin with a colorful icon-guided Lectio Divina page that leads teens from reading the Word to one practical action.",
      longDesc: "Soul Session: My Daily Lectio Divina gives teens a friendly visual path through five numbered prayer steps, from reading and reflecting to prayer, contemplation, and action. A simple daily vibe check adds an approachable way to notice how they are arriving before spending time with Scripture.",
      gumroadUrl: "", image: "../images/products/notepads/soul-session-daily-lectio-divina.jpg", slug: "soul-session-daily-lectio-divina", customPage: true, hidden: true }
  ]
};
