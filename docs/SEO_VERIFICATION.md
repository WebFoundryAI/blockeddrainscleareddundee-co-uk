# SEO Verification Checklist

This document provides verification steps to confirm SEO implementation is correct.

## 1. Static File Checks (200 responses)

Verify these URLs return 200 OK responses:

- [ ] https://swindonblockeddrains.co.uk/robots.txt
- [ ] https://swindonblockeddrains.co.uk/sitemap.xml
- [ ] https://swindonblockeddrains.co.uk/llm.html

## 2. Browser Console Checks

Run these commands in browser DevTools (Console tab) on each route:

### Check Title
```javascript
document.title
```

### Check Meta Description
```javascript
document.querySelector('meta[name="description"]')?.content
```

### Check Canonical URL
```javascript
document.querySelector('link[rel="canonical"]')?.href
```

### Check Robots Meta
```javascript
document.querySelector('meta[name="robots"]')?.content
```

### Count Tags (should be exactly 1)
```javascript
// Description count
document.querySelectorAll('meta[name="description"]').length

// Canonical count
document.querySelectorAll('link[rel="canonical"]').length

// Title count (in <head>)
document.querySelectorAll('head title').length
```

### Check Open Graph Tags
```javascript
document.querySelector('meta[property="og:title"]')?.content
document.querySelector('meta[property="og:description"]')?.content
document.querySelector('meta[property="og:url"]')?.content
document.querySelector('meta[property="og:image"]')?.content
```

### Check Twitter Card Tags
```javascript
document.querySelector('meta[name="twitter:card"]')?.content
document.querySelector('meta[name="twitter:title"]')?.content
```

## 3. Expected Results

| Check | Expected Result |
|-------|-----------------|
| Title | Unique per route, under 60 chars, keyword near start |
| Description | Unique per route, 140-160 chars |
| Canonical | Matches current route URL (no trailing slash except /) |
| Robots | "index, follow" for public pages; "noindex, follow" for utility pages |
| Description count | Exactly 1 |
| Canonical count | Exactly 1 |
| OG:URL | Matches canonical URL |

## 4. Routes to Verify

### Priority Routes (must verify)
1. `/` - Homepage
2. `/services/blocked-drains` - Service page
3. `/locations` - Location hub
4. `/location/swindon/drain-jetting` - Deep location+service page
5. `/contact` - Contact page

### Additional Routes (spot check)
- `/about`
- `/faq`
- `/blog`
- `/services/cctv-drain-surveys/pre-purchase-survey` - Sub-service page
- `/location/highworth` - Location detail page

## 5. NoIndex Routes

These routes should have `noindex, follow`:
- `/admin` and `/admin/*`
- `/login`
- `/reset-password`

These routes are NOT in the sitemap.

## 6. Canonical URL Rules

| Route | Canonical URL |
|-------|---------------|
| Homepage | `https://swindonblockeddrains.co.uk/` |
| All others | No trailing slash (e.g., `/services/blocked-drains`) |

## 7. Quick Validation Script

Copy and paste this into the browser console for a quick check:

```javascript
(function() {
  const results = {
    title: document.title,
    titleLength: document.title.length,
    description: document.querySelector('meta[name="description"]')?.content,
    descriptionLength: document.querySelector('meta[name="description"]')?.content?.length,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    robots: document.querySelector('meta[name="robots"]')?.content,
    descriptionCount: document.querySelectorAll('meta[name="description"]').length,
    canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
    ogTitle: document.querySelector('meta[property="og:title"]')?.content,
    ogUrl: document.querySelector('meta[property="og:url"]')?.content,
  };
  
  console.table(results);
  
  // Warnings
  if (results.titleLength > 60) console.warn('⚠️ Title too long');
  if (results.descriptionLength > 160) console.warn('⚠️ Description too long');
  if (results.descriptionLength < 140) console.warn('⚠️ Description may be too short');
  if (results.descriptionCount !== 1) console.error('❌ Multiple descriptions found');
  if (results.canonicalCount !== 1) console.error('❌ Multiple canonicals found');
  if (results.canonical !== results.ogUrl) console.warn('⚠️ Canonical and OG:URL mismatch');
  
  return results;
})();
```

## 8. Sitemap Validation

1. Check sitemap is valid XML: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Verify all URLs in sitemap are indexable (robots meta = "index, follow")
3. Verify noindex routes are NOT in sitemap
4. Check sitemap is referenced in robots.txt

## 9. Tools for Further Validation

- [Google Search Console](https://search.google.com/search-console) - Submit sitemap, check indexing
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Test structured data
- [Schema Markup Validator](https://validator.schema.org/) - Validate JSON-LD
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - Full site crawl
