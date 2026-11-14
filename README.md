<p align="center">
  <img src="images/aura-logo.png" alt="Aura Store logo" width="160">
</p>

<h1 align="center">Aura Store</h1>
<p align="center"><b>Try it on. Score it. Wear it.</b></p>

---

## What is Aura Store?

Aura Store is an online shop for everything wearable: clothes, shoes, bags, eyewear, headwear, accessories and more.

Online shopping has one big problem: you can't tell how an item will look with the rest of your outfit. Aura Store tries to fix that with two features:

1. **Mannequin try-on:** put an item on a mannequin before you decide to buy it.
2. **Aura score:** a live score that shows how much your aura goes **up or down** when you add that item, based on how well the **colors** and the **style** match the rest of your outfit.

> Example: a black hoodie with navy jeans and white sneakers might give **+12 aura**. Adding hot pink trousers to that outfit might give **-8 aura**.

## Project status

This is a learning project and it is being built step by step.

| Part | Status |
| --- | --- |
| Front page (menu, search, 3D logo) | Done |
| Explore, About, Contact pages | Started (placeholder content) |
| Real product photos and catalog | Planned |
| Mannequin try-on page | Planned (a working prototype exists) |
| Aura score calculator | Planned (a working prototype exists) |
| Cart and checkout | Planned |

## How the aura score will work

Every product is tagged with a **category**, a **color** and a few **style words** (like `streetwear`, `minimal`, `bold`). The score then starts at 50 and changes for every pair of items in the outfit:

- **Color:** neutrals (black, white, grey, beige) go with everything. Colors from the same family or opposite colors on the color wheel score well. Two loud colors that fight each other lose points.
- **Style:** items that share a style word gain points. Items with nothing in common lose a few.

The final number is kept between 0 and 100, and the shop shows the change (like `+12`) before you add an item.

## Built with

- HTML
- CSS (including a 3D tilt effect and an animated dropdown menu)
- JavaScript (no frameworks, no libraries)

## Project structure

```
aura-store/
├── index.html           Front page
├── html/
│   ├── explore.html     Browse products
│   ├── try-on.html      Mannequin try-on
│   ├── about.html       About the store
│   └── contact.html     Contact form
├── css/
│   ├── home.css         Front page styles
│   └── style.css        Styles for the other pages
├── javascript/
│   ├── home.js          Menu and 3D logo effect
│   └── script.js        Shared page script
├── images/
│   └── aura-logo.png
└── README.md
```

## Run it on your computer

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

You can also just double-click `index.html`, but Live Server updates the page every time you save.

## Roadmap

- [ ] Add real product photos and a product catalog
- [ ] Make the Explore page filter by category, gender and search
- [ ] Add the mannequin try-on page
- [ ] Add the aura score calculator
- [ ] Add a cart that remembers your items
- [ ] Add a "share my outfit and aura score" button
- [ ] Make it look great on phones

## Author

Made by **obloto00** as a first big web project.

**Live site:** https://obloto00.github.io/aura-store/