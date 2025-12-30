/**
 * Schema.org - Structured Data for SEO
 * Generates JSON-LD markup for Google Rich Results
 * 
 * @version 2.0.0 - Multi-Product Optimized
 * @updated December 2024
 */

// ============================================
// ORGANIZATION SCHEMA
// ============================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boracity",
  "alternateName": "Boracity - Multi-Product Architecture Resource Platform",
  "url": "https://www.boracity.com",
  "logo": "https://www.boracity.com/assets/images/icon-512x512.png",
  "description": "Professional BIM families for Revit, SketchUp 3D models, D5 Render assets, and architectural textures. All-in-one platform for architects, interior designers, and students.",
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
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "knowsAbout": [
    "BIM Families",
    "Revit Families",
    "SketchUp Models",
    "D5 Render Assets",
    "Architectural Textures",
    "3D Models",
    "Architecture Software"
  ]
};

// ============================================
// WEBSITE SCHEMA
// ============================================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Boracity",
  "url": "https://www.boracity.com",
  "description": "Download professional Revit families, SketchUp models, D5 Render assets, and architectural textures. Free and Premium plans for architects.",
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.boracity.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Architects, Interior Designers, Architecture Students"
  }
};

// ============================================
// PRODUCT SCHEMA (Multi-Product Platform)
// ============================================
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boracity - Multi-Product Architecture Resource Platform",
  "description": "Download professional Revit families, SketchUp 3D models, D5 Render assets, and architectural textures. 10,000+ assets for architects, interior designers, and students.",
  "brand": {
    "@type": "Brand",
    "name": "Boracity"
  },
  "category": "Software > Design Tools > BIM & 3D Resources",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "19",
    "offerCount": "2",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan - Revit Families",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "3 downloads per day of Revit families. Access to basic catalog including furniture, doors, windows, and lighting.",
        "eligibleCustomerType": "Students, Hobbyists, Individual Architects"
      },
      {
        "@type": "Offer",
        "name": "Premium Plan - Unlimited Access",
        "price": "19",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Unlimited downloads of all Revit families, SketchUp models (coming soon), D5 assets (coming soon), and textures (coming soon). Priority support included.",
        "eligibleCustomerType": "Professional Architects, Design Firms, Interior Designers"
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
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Architects, Interior Designers, Architecture Students, Design Professionals"
  }
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Explore",
      "item": "https://www.boracity.com/#explore"
    }
  ]
};

// ============================================
// PRODUCT LINES SCHEMA (Main Products)
// ============================================
const productLinesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Boracity Product Lines",
  "description": "Multi-software architecture resource platform offering Revit families, SketchUp models, D5 Render assets, and textures",
  "numberOfItems": "4",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Revit Families",
      "url": "https://www.boracity.com/products/revit-families",
      "description": "10,000+ professional BIM families for Autodesk Revit. Includes furniture, doors, windows, lighting, plumbing, equipment, structure, and finishes. Free and Premium downloads available.",
      "item": {
        "@type": "SoftwareApplication",
        "name": "Revit Families Library",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Windows",
        "softwareVersion": "Compatible with Revit 2020-2024",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          "10,000+ BIM families",
          "8 main categories",
          "Free downloads (3/day)",
          "Premium unlimited access",
          "High-quality professional models"
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SketchUp Models",
      "url": "https://www.boracity.com/products/sketchup-models",
      "description": "High-quality 3D models optimized for SketchUp. Perfect for architecture, interior design, and landscape projects. Coming Q2 2025.",
      "item": {
        "@type": "SoftwareApplication",
        "name": "SketchUp 3D Models Library",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Windows, macOS",
        "softwareVersion": "Compatible with SketchUp 2020-2024",
        "featureList": [
          "Optimized 3D models",
          "Furniture and fixtures",
          "Landscape elements",
          "Interior design assets"
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "D5 Render Assets",
      "url": "https://www.boracity.com/products/d5-render-assets",
      "description": "Premium assets for D5 Render visualization. High-quality models and materials for photorealistic rendering. Coming Q2 2025.",
      "item": {
        "@type": "SoftwareApplication",
        "name": "D5 Render Assets Library",
        "applicationCategory": "DesignApplication",
        "softwareVersion": "Compatible with D5 Render 2.0+",
        "featureList": [
          "High-poly models",
          "Render-ready materials",
          "Vegetation and landscape",
          "Interior props"
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Architectural Textures",
      "url": "https://www.boracity.com/products/textures",
      "description": "PBR textures for architectural visualization. Seamless textures for walls, floors, materials, and finishes. Coming Q2 2025.",
      "item": {
        "@type": "ImageObject",
        "name": "PBR Texture Library",
        "contentUrl": "https://www.boracity.com/products/textures",
        "description": "High-resolution PBR textures including diffuse, normal, roughness, and displacement maps",
        "keywords": "PBR textures, architectural materials, seamless textures, visualization textures"
      }
    }
  ]
};

// ============================================
// CATEGORIES SCHEMA (Revit Family Categories)
// ============================================
const categoriesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Revit Family Categories",
  "description": "Browse 10,000+ professional Revit families organized by category",
  "numberOfItems": "8",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Furniture Revit Families",
      "url": "https://www.boracity.com/categories/furniture",
      "description": "2,450 furniture families for Revit including office chairs, executive desks, conference tables, sofas, storage units, and seating. Perfect for office design and interior projects."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Door Revit Families",
      "url": "https://www.boracity.com/categories/doors",
      "description": "1,850 door families including interior doors, exterior doors, glass doors, French doors, sliding doors, and double doors. Compatible with Revit 2020-2024."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Window Revit Families",
      "url": "https://www.boracity.com/categories/windows",
      "description": "1,620 window families including sliding windows, bay windows, casement windows, fixed windows, and custom window assemblies for residential and commercial projects."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Lighting Revit Families",
      "url": "https://www.boracity.com/categories/lighting",
      "description": "980 lighting families including LED ceiling lights, pendant lamps, track lighting, recessed lighting, and decorative fixtures. Energy-efficient options available."
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Plumbing Revit Families",
      "url": "https://www.boracity.com/categories/plumbing",
      "description": "745 plumbing families including toilets, sinks, bathtubs, showers, faucets, and plumbing fixtures for residential and commercial bathrooms."
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Equipment Revit Families",
      "url": "https://www.boracity.com/categories/equipment",
      "description": "1,230 equipment families for commercial and residential projects including HVAC systems, kitchen appliances, medical equipment, and specialty tools."
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Structure Revit Families",
      "url": "https://www.boracity.com/categories/structure",
      "description": "890 structural families including steel beams, columns, concrete foundations, trusses, and structural framing elements for construction documentation."
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Finishes Revit Families",
      "url": "https://www.boracity.com/categories/finishes",
      "description": "560 finish families including flooring materials, wall treatments, ceiling systems, tile patterns, and decorative finishes for interior design."
    }
  ]
};

// ============================================
// SOFTWARE APPLICATION SCHEMA (Boracity as a Tool)
// ============================================
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Boracity Platform",
  "description": "Web-based platform for downloading professional BIM families, 3D models, and architectural resources",
  "url": "https://www.boracity.com",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web Browser (Chrome, Firefox, Safari, Edge)",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "19"
  },
  "featureList": [
    "10,000+ Revit families",
    "Real-time search",
    "Favorites system",
    "Free plan (3 downloads/day)",
    "Premium plan (unlimited downloads)",
    "Multi-product platform (Revit, SketchUp, D5, Textures)",
    "Professional quality assets",
    "Student-friendly pricing"
  ],
  "browserRequirements": "Requires modern web browser with JavaScript enabled",
  "softwareVersion": "1.0.0",
  "releaseNotes": "Initial release with Revit families. SketchUp models, D5 assets, and textures coming Q2 2025."
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
    productLinesSchema,
    categoriesSchema,
    softwareApplicationSchema
  ];

  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });

  console.log('✅ Schema.org structured data injected successfully');
  console.log('📊 Total schemas: 7');
  console.log('   1. Organization Schema (Brand identity)');
  console.log('   2. WebSite Schema (Search functionality)');
  console.log('   3. Product Schema (Pricing and offers)');
  console.log('   4. Breadcrumb Schema (Navigation)');
  console.log('   5. ProductLines Schema (4 product types)');
  console.log('   6. Categories Schema (8 Revit categories)');
  console.log('   7. SoftwareApplication Schema (Platform as tool)');
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSchemas);
} else {
  injectSchemas();
}

// ============================================
// EXPORTS
// ============================================
export { 
  organizationSchema, 
  websiteSchema, 
  productSchema, 
  breadcrumbSchema, 
  productLinesSchema,
  categoriesSchema,
  softwareApplicationSchema
};