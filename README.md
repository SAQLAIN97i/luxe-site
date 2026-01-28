# LUXE Affiliate Showcase

A premium, production-ready affiliate marketing website built with React, Vite, and Tailwind CSS. Features a dark theme with cyan accents, product search, comparison tool, and Amazon affiliate integration.

![LUXE Affiliate Showcase](https://via.placeholder.com/800x400/07080D/00D9FF?text=LUXE+Affiliate+Showcase)

## Features

- **Dark Theme Design** - Premium midnight color scheme with cyan accents
- **8 Product Categories** - Cameras, Drones, Audio, Computing, Wearables
- **Product Search** - Real-time search across all products
- **Product Comparison** - Compare up to 3 products side-by-side
- **Product Modal** - Detailed product view with features and affiliate links
- **Deals Carousel** - Horizontal scrolling deals section
- **Newsletter Signup** - Email subscription form
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Amazon Affiliate Ready** - Easy to add your affiliate links

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Icon library
- **GitHub Pages** - Deployment platform

## Project Structure

```
luxe-affiliate/
├── public/
│   ├── images/              # All product and background images
│   │   ├── hero_bg.jpg
│   │   ├── camera_bg.jpg
│   │   ├── drone_bg.jpg
│   │   ├── headphones_bg.jpg
│   │   ├── laptop_bg.jpg
│   │   ├── speaker_bg.jpg
│   │   ├── tablet_bg.jpg
│   │   ├── watch_bg.jpg
│   │   ├── product_camera.png
│   │   ├── product_drone.png
│   │   ├── product_headphones.png
│   │   ├── product_laptop.png
│   │   ├── product_laptop2.png
│   │   ├── product_speaker.png
│   │   ├── product_tablet.png
│   │   └── product_watch.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation with search
│   │   ├── Hero.jsx         # Hero section
│   │   ├── ProductCard.jsx  # Product card component
│   │   ├── ProductModal.jsx # Product detail modal
│   │   ├── ProductsSection.jsx
│   │   ├── CategorySections.jsx
│   │   ├── DealsSection.jsx
│   │   ├── CompareSection.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js      # Product data with affiliate links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js           # Vite config with base: './'
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this repository

```bash
cd luxe-affiliate
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Adding Your Amazon Affiliate Links

1. Open `src/data/products.js`

2. Find the product you want to update and replace the `affiliateLink` with your Amazon affiliate URL:

```javascript
{
  id: 1,
  name: "ActionCam 6K",
  // ... other fields
  affiliateLink: "https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-AFFILIATE-ID-20",
  // ...
}
```

3. Repeat for all products

## Adding Product Images

1. Place all product images in the `public/images/` folder
2. Use relative paths in the product data:

```javascript
image: "./images/product_camera.png",
bgImage: "./images/camera_bg.jpg",
```

### Image Requirements

- **Product Images**: PNG with transparent background, 800x800px recommended
- **Background Images**: JPG, 1920x1080px recommended
- All images should be optimized for web (compress using tools like TinyPNG)

## Customizing Products

Edit `src/data/products.js` to customize:

- Product names and descriptions
- Prices and discounts
- Features list
- Ratings and review counts
- Badges (Best Seller, New, etc.)

```javascript
{
  id: 1,
  name: "Your Product Name",
  category: "Category",
  price: 499,
  originalPrice: 599,
  discount: 17,
  rating: 4.8,
  reviews: 2341,
  image: "./images/your_image.png",
  bgImage: "./images/your_bg.jpg",
  description: "Your product description...",
  features: [
    "Feature 1",
    "Feature 2",
    // ...
  ],
  affiliateLink: "https://amazon.com/...",
  inStock: true,
  prime: true,
  badge: "Best Seller"
}
```

## Deployment to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. Install gh-pages package (already included in package.json)

```bash
npm install --save-dev gh-pages
```

2. Update `package.json` with your repository URL:

```json
{
  "name": "luxe-affiliate-showcase",
  "homepage": "https://yourusername.github.io/luxe-affiliate",
  // ... rest of package.json
}
```

3. Build and deploy

```bash
npm run build
npm run deploy
```

### Method 2: Manual Deployment

1. Build the project

```bash
npm run build
```

2. The `dist` folder will contain all the built files

3. Upload the contents of the `dist` folder to your GitHub Pages repository

### GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the branch you deployed to (usually `gh-pages`)
5. Click **Save**

Your site will be live at: `https://yourusername.github.io/luxe-affiliate`

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  midnight: {
    DEFAULT: '#07080D',  // Main background
    light: '#0B0E15',    // Secondary background
  },
  cyan: {
    DEFAULT: '#00D9FF',  // Primary accent
    dark: '#00B8D4',     // Darker accent
  },
  // ...
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add it to the main content area

### Changing Fonts

1. Update the Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js` and `index.css`

## Performance Optimization

- Images are automatically optimized during build
- Lazy loading is implemented for product images
- CSS is purged for production builds
- JavaScript is minified and chunked

## SEO

The site includes:
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for all images

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own affiliate website!

## Support

For issues or questions:
- Open an issue on GitHub
- Email: support@luxeaffiliate.com

---

**Built with ❤️ for affiliate marketers**
