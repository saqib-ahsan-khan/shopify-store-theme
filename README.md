# Premium Sofas Co. - Shopify Store Theme

A modern, professional Shopify theme for e-commerce furniture and sofa businesses. This theme is fully responsive, optimized for conversions, and features a clean, elegant design perfect for showcasing high-end furniture.

## 🚀 Quick Start

1. **Install Shopify CLI** (if not already installed)
   ```bash
   # macOS
   brew tap shopify/shopify && brew install shopify-cli
   ```

2. **Authenticate with Shopify**
   ```bash
   shopify auth login
   ```

3. **Start Development Server**
   ```bash
   cd theme
   shopify theme dev
   ```

4. **Deploy to Your Store**
   ```bash
   shopify theme push
   ```

## ✨ Key Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Clean, professional appearance
- ✅ **Product Collections** - Organize sofas by category
- ✅ **Shopping Cart** - Full e-commerce functionality
- ✅ **Mobile-First** - Optimized for mobile customers
- ✅ **SEO Ready** - Built-in SEO optimization
- ✅ **Customizable** - Easy theme settings
- ✅ **Fast Loading** - Optimized performance

## 📁 File Structure

```
theme/
├── layout/
│   └── theme.liquid              # Main layout
├── templates/
│   ├── index.json               # Homepage
│   ├── product.json             # Product page
│   ├── collection.json          # Collections
│   └── cart.json                # Shopping cart
├── sections/
│   ├── header.liquid            # Header & nav
│   ├── footer.liquid            # Footer
│   ├── hero-section.liquid      # Banner
│   ├── featured-products.liquid # Showcase
│   ├── product-details.liquid   # Product view
│   ├── products-grid.liquid     # Product grid
│   └── cart-summary.liquid      # Cart view
├── snippets/
│   └── product-card.liquid      # Card component
├── assets/
│   ├── theme.css                # Styles
│   ├── responsive.css           # Mobile styles
│   └── theme.js                 # JavaScript
├── config/
│   ├── settings_schema.json     # Customization
│   └── theme.json               # Theme info
└── locales/
    └── en.json                  # Translations
```

## 🎨 Customization

### Change Colors
Edit `theme/config/settings_schema.json`:
- Primary Color: #8B4513 (brown)
- Secondary Color: #D2691E (tan)

### Update Shop Info
- Shop Name
- Logo
- Description

### Add Products
1. Go to Shopify Admin
2. Products → Add Product
3. Upload images
4. Set pricing
5. Create collections

## 📚 Documentation

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup and Shopify CLI commands.

## 🔗 Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.dev/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)

## 📄 License

MIT License - Use freely for your store

---

**Ready to launch your furniture sofa business! 🎉**