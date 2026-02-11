# Getting Started with Shopify CLI

## Installation

### macOS
```bash
brew tap shopify/shopify
brew install shopify-cli
```

### Windows (using Chocolatey)
```bash
choco install shopify-cli
```

### Linux
```bash
sudo apt-get install shopify-cli
```

Or download from: https://github.com/Shopify/shopify-cli/releases

## Setup Your Store Connection

1. **Authenticate with Shopify**
   ```bash
   shopify auth login
   ```
   This opens a browser window to authenticate with your Shopify account.

2. **Select your store**
   Choose your development or test store.

## Commands

### Start Development
```bash
cd theme
shopify theme dev
```
- Opens development server
- Auto-reloads on changes
- Provides theme preview URL

### Push Changes
```bash
shopify theme push
```
- Uploads theme to your store
- Creates new theme version

### Pull Theme
```bash
shopify theme download
```
- Downloads existing theme from store
- Useful for making backups

### Preview Shared Link
```bash
shopify theme share
```
- Creates shareable preview link for stakeholders

## Product Setup in Admin

1. Go to your Shopify Admin: https://admin.shopify.com
2. Navigate to Products
3. Create new product:
   - Title: Product name
   - Description: Detailed description
   - Media: Upload high-quality images
   - Pricing: Set price and compare-at price
   - Organization: Add collection and tags
   - Status: Publish

## Creating Collections

1. Go to Products > Collections
2. Click "Create collection"
3. Name your collection
4. Add products by:
   - Manual selection, or
   - Conditions (e.g., products with tag "Modern")

## Theme Customization

1. Open theme preview while running `shopify theme dev`
2. Click "Customize" in top menu
3. Edit:
   - Header
   - Hero banner
   - Featured products section
   - Footer
4. Click "Save"

## Deployment Checklist

- [ ] All products added with images and descriptions
- [ ] Collections created and organized
- [ ] Policies created (privacy, refund, shipping)
- [ ] Contact info is correct
- [ ] Payment methods configured
- [ ] Shipping rates set
- [ ] Store name and branding finalized
- [ ] Theme tested on mobile and desktop
- [ ] Links all working
- [ ] Images optimized

## Resources

- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Theme Store](https://themes.shopify.com/)
- [Theme Development Best Practices](https://shopify.dev/themes/best-practices)
