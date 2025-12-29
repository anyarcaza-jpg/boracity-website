/**
 * Schema.org - Structured Data for SEO
 * Generates JSON-LD markup for Google Rich Results
 */

// ============================================
// ORGANIZATION SCHEMA
// ============================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boracity",
  "alternateName": "Boracity - BIM & 3D Resources Platform",
  "url": "https://www.boracity.com",
  "logo": "https://www.boracity.com/assets/images/icon-512x512.png",
  "description": "Professional BIM families for Revit, SketchUp models, D5 Render assets, and high-quality textures for architects and designers.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Boracity Team"
  },
  "sameAs": [
    "https://twitter.com/boracity",
    "https://www.facebook.com/boracity",
    "https://www.linkedin.com/company/boracity",
    "https://www.instagram.com/boracity"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@boracity.com",
    "availableLanguage": ["English", "Spanish"]
  }
};

// ============================================
// WEBSITE SCHEMA
// ============================================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Boracity",
  "url": "https://www.boracity.com",
  "description": "Download professional BIM families, SketchUp models, D5 Render assets, and textures",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.boracity.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ============================================
// PRODUCT CATALOG SCHEMA
// ============================================
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boracity BIM Families Library",
  "description": "Professional BIM families for Revit, SketchUp models, D5 Render assets, and high-quality architectural textures",
  "brand": {
    "@type": "Brand",
    "name": "Boracity"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "19",
    "offerCount": "2",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "3 downloads per day, access to basic catalog"
      },
      {
        "@type": "Offer",
        "name": "Premium Plan",
        "price": "19",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Unlimited downloads, full catalog access, priority support"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "5000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "category": "Software > Design Tools > BIM Resources"
};

// ============================================
// BREADCRUMB SCHEMA
// ============================================
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.boracity.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Categories",
      "item": "https://www.boracity.com/#categories"
    }
  ]
};

// ============================================
// ITEM LIST SCHEMA (Categories)
// ============================================
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BIM Asset Categories",
  "description": "Browse our library by category",
  "numberOfItems": "8",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Revit Families",
      "url": "https://www.boracity.com/categories/revit-families",
      "description": "Professional BIM families for Autodesk Revit"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SketchUp Models",
      "url": "https://www.boracity.com/categories/sketchup-models",
      "description": "3D models for SketchUp"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "D5 Render Assets",
      "url": "https://www.boracity.com/categories/d5-render-assets",
      "description": "High-quality assets for D5 Render"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Textures",
      "url": "https://www.boracity.com/categories/textures",
      "description": "Architectural textures and materials"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Furniture",
      "url": "https://www.boracity.com/categories/furniture"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Doors",
      "url": "https://www.boracity.com/categories/doors"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Windows",
      "url": "https://www.boracity.com/categories/windows"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Lighting",
      "url": "https://www.boracity.com/categories/lighting"
    }
  ]
};

// ============================================
// INJECT SCHEMAS INTO PAGE
// ============================================
function injectSchemas() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    productSchema,
    breadcrumbSchema,
    itemListSchema
  ];

  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });

  console.log('✅ Schema.org structured data injected');
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSchemas);
} else {
  injectSchemas();
}

export { organizationSchema, websiteSchema, productSchema, breadcrumbSchema, itemListSchema };