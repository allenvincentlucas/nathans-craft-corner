# Nathan's Craft Corner — Website

A multi-page site for Nathan's Craft Corner, ready to publish with GitHub Pages.

## What's in here

```
index.html              Home page
about.html              About page
contact.html            Contact page (Facebook DM + Gumroad + Instagram)
products/
  calendars.html         Custom Calendars category page
  decals.html            Vinyl Decals category page
  souvenirs.html         Custom Souvenirs category page
  cards.html             Layered Greeting Cards category page
  shadow-boxes.html      3D Shadow Boxes category page
  <category>-<slug>.html Individual product pages (auto-generated, see below)
css/style.css           All site styling
js/main.js              Injects header/nav/footer, home grid & category strip
js/categories.js        Category metadata (label, icon, color) — nav source
js/products-data.js     ⭐ Edit THIS file to add/remove/update products
js/render-products.js   Turns products-data.js into the product cards you see
js/icons.js             Simple line-icon placeholders used until you add real photos
scripts/generate-product-pages.js  Generates an individual page per product with a slug
images/logo.png         Your logo (used in header, footer, and About page)
images/favicon.ico      Browser tab icon (multi-size)
images/favicon-32.png   Browser tab icon (32x32)
images/favicon-16.png   Browser tab icon (16x16)
images/favicon-180.png  Home-screen icon for iPhone/iPad (apple-touch-icon)
```

## Categories hide themselves until they have products

Every category page's array in `js/products-data.js` starts empty. While a
category has zero products:
- It won't show in the top navigation's "Shop" dropdown
- It won't show in the footer's "Shop by Category" list
- It won't show as a tile on the home page
- Its own page still works if visited directly, showing a friendly
  "new designs coming soon" message

As soon as you add one product to a category, it automatically reappears
everywhere — no switches to flip, nothing else to edit.

## Publishing to GitHub Pages

1. Push all these files to the root of your GitHub repo (the one you already created).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch," pick your main branch and the `/ (root)` folder, then save.
4. GitHub will give you a URL like `https://yourusername.github.io/your-repo-name/` — that's your live site.
5. Every time you push a change, the live site updates automatically in a minute or two.

## Adding a new product (as you go live with new items)

You only need to edit **`js/products-data.js`**. Find the category array (`calendars`, `decals`, `souvenirs`, `cards`, or `shadowBoxes`) and copy one of the existing entries, then change:

- `name` — product name
- `price` — shown as plain text, e.g. `"₱350"` or `"$12"`
- `type` — `"physical"` (shows a "Message to order" button) or `"digital"` (shows a "Buy on Gumroad" button)
- `desc` — one short sentence
- `gumroadUrl` — only for digital products, paste your Gumroad product link
- `image` — leave `""` to show the placeholder icon, or add a path once you upload a real photo (see below)

## Adding real product photos

1. Add your photo files inside `images/products/` (create that folder the first time).
2. In `js/products-data.js`, set that product's `image` to the path, e.g.
   `"image": "../images/products/calendar-family-photo.jpg"`
   (use `../` because product pages live inside the `products/` folder).
3. Save and push — the placeholder icon is automatically replaced with your photo.

## Giving a product its own page

By default a product just shows as a card on its category page. If you'd
like a product to have its own dedicated page (its own shareable link, more
room for description, etc.), give it a `slug` in `js/products-data.js`, e.g.:

```js
{ name: "Family Photo Desk Calendar", price: "₱350", type: "physical",
  desc: "A5 flip calendar personalized with your family's favorite photos.",
  gumroadUrl: "", image: "", slug: "family-photo-desk-calendar" }
```

Then generate the page by running (from the site's root folder, with
[Node.js](https://nodejs.org) installed):

```
node scripts/generate-product-pages.js
```

This creates `products/calendars-family-photo-desk-calendar.html` and the
product's card on the category page automatically links to it. Simplest
option: just message Claude with the product details and ask it to
generate the page for you — no need to run anything yourself.

## Adding a brand-new category later

1. Copy `products/calendars.html` to a new file, e.g. `products/keychains.html` (this keeps the favicon tags and site chrome intact automatically).
2. Update the `<title>`, hero text, icon, and `data-category` / `data-icon` values near the bottom of the file.
3. Add a new array in `js/products-data.js` for that category's products.
4. Add one line to the `categoryLinks` array near the top of `js/main.js` so it shows up in the navigation and footer automatically.

## Notes

- No build tools needed — this is plain HTML/CSS/JS, so it works directly on GitHub Pages.
- Fonts (Baloo 2, Quicksand, Caveat) load from Google Fonts automatically.
- The site is fully responsive and includes a mobile menu.
