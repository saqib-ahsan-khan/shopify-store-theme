# Theme Development Guide

## Local Development Setup

### 1. Prerequisites
```bash
# Check Node version (optional but recommended)
node --version  # Should be 14+ for development tools

# Install Shopify CLI
brew install shopify-cli
# Or download from: https://shopify.dev/themes/tools/cli
```

### 2. Initial Setup
```bash
# Navigate to theme directory
cd theme

# Authenticate with Shopify
shopify auth login
# Follow prompts to select your store

# Start development server
shopify theme dev
```

### 3. Development Server
```bash
# When running, you'll see:
# ✓ Development store: https://[store-name].myshopify.com
# ✓ Theme preview: https://[store-name].myshopify.com?preview_theme_id=XXX
# ✓ Hot reload enabled

# Open the preview URL in your browser
# Make changes to files - they'll auto-reload
```

## File Organization

### Sections
- Each `.liquid` file in `sections/` is a customizable section
- Must have a {% schema %} block at the end
- Sections appear in theme customization panel

### Templates
- JSON files in `templates/` define page structure
- Reference sections to use on each page
- Supported: index, product, collection, cart, page, 404, etc.

### Snippets
- Reusable components in `snippets/` directory
- Include them with: `{% include 'snippet-name' %}`
- Keep DRY (Don't Repeat Yourself) principle

### Assets
- CSS files in `assets/` directory
- Reference with: `{{ 'filename.css' | asset_url }}`
- JavaScript loaded asynchronously for performance

### Locales
- Translation strings in `locales/` directory
- JSON format with locale as filename
- Reference with: `{{ 'key' | t }}`

## Common Modifications

### Change Primary Color
```json
// In settings_schema.json
{
  "type": "color",
  "id": "color_primary",
  "label": "Primary Color",
  "default": "#8B4513"  // Change this
}
```

### Update Site Typography
```json
{
  "type": "font_picker",
  "id": "font_heading",
  "label": "Heading Font",
  "default": "georgia_pro_w01_smbd"
}
```

### Add New Product Collection
1. Edit `featured-products.liquid`
2. Change collection reference
3. Adjust product count
4. Save and see changes in preview

### Create New Section
1. Create `sections/new-section.liquid`
2. Add opening markup and styles
3. Add schema block at end
4. Reference in template
5. Customize in theme admin

## Liquid Basics for Sofas Store

### Loop Through Products
```liquid
{% for product in collection.products %}
  <h2>{{ product.title }}</h2>
  <p>{{ product.price | money }}</p>
{% endfor %}
```

### Conditional Display
```liquid
{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <p>Out of Stock</p>
{% endif %}
```

### Access Theme Settings
```liquid
<h1 style="color: {{ settings.color_primary }}">
  {{ settings.shop_name }}
</h1>
```

### Format Prices
```liquid
<span>{{ product.price | money }}</span>
<!-- Output: $99.99 -->
```

## Performance Tips

### Image Optimization
```liquid
<!-- Use responsive image sizes -->
<img src="{{ product.image | image_url: width: 600 }}" 
     srcset="{{ product.image | image_url: width: 300 }} 300w,
             {{ product.image | image_url: width: 600 }} 600w"
     alt="{{ product.title }}">
```

### CSS Organization
```css
/* Critical styles - inline or above-the-fold */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Non-critical - defer loading */
@import url('supplemental-styles.css');
```

### JavaScript Optimization
```liquid
<!-- Defer non-critical scripts -->
<script src="{{ 'theme.js' | asset_url }}" defer></script>

<!-- Inline critical functionality -->
<script>
  // Time-sensitive code here
</script>
```

## Testing Checklist

- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop
- [ ] Verify all links work
- [ ] Test add to cart
- [ ] Test checkout flow
- [ ] Check image loading
- [ ] Verify forms work
- [ ] Test search functionality
- [ ] Check accessibility (keyboard nav)

## Debugging

### Check for Errors
```bash
# Terminal will show Liquid errors
# Browser console (F12) shows JavaScript errors
```

### Inspect Element
```
Right-click → Inspect Element
Check computed styles and HTML structure
```

### Enable Debug Mode
```liquid
<!-- In your section template -->
{% if template contains 'debug' %}
  <pre>{{ collection | json }}</pre>
{% endif %}
```

## Deployment Process

### Test Thoroughly First
```bash
# In development with shopify theme dev
# Test all pages and functionality
```

### Create Backup
```bash
# Download current theme
shopify theme download
# Saves as time-stamped backup
```

### Push to Live
```bash
# From theme directory
shopify theme push

# Or push specific files
shopify theme push --path theme/theme.liquid
```

### Verify Live
1. Visit your live store
2. Check all pages load
3. Test checkout
4. Monitor for errors

## Resources

- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [Theme Development Best Practices](https://shopify.dev/themes/best-practices)
- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)
- [Shopify Theme API](https://shopify.dev/themes/architecture)

## Support

- Check theme error logs in Shopify Admin
- Test in Shopify theme sandbox
- Review Shopify documentation
- Contact Shopify Support via admin dashboard

## Pro Tips

1. **Use Browser Dev Tools**: Inspect elements and test responsive design
2. **Version Control**: Use Git to track changes
3. **Create Backups**: Regularly backup before major changes
4. **Test Mobile First**: Design for mobile, enhance for desktop
5. **Monitor Analytics**: Track customer behavior post-launch
6. **Gather Feedback**: Ask customers what they like/dislike
7. **Keep Updating**: Add new products and refresh content regularly
8. **Security**: Keep software updated and use strong passwords
