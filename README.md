# 🏗️ Boracity - Professional Multi-Product Architecture Platform

> BIM Families, SketchUp Models, D5 Render Assets & Textures - All in One Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![SEO](https://img.shields.io/badge/SEO-Optimized-green)
![Status](https://img.shields.io/badge/status-Pre--Launch-orange)

---

## 📋 **Descripción del Proyecto**

Boracity es una plataforma web multi-producto que permite a arquitectos, diseñadores de interiores y estudiantes descargar recursos profesionales de alta calidad:

- ✅ **Revit Families** (10,000+ BIM families) - **ACTIVO**
- 🚧 **SketchUp Models** (3D models optimizados) - Coming Q2 2025
- 🚧 **D5 Render Assets** (Assets para visualización) - Coming Q2 2025
- 🚧 **Textures** (PBR textures 4K) - Coming Q2 2025

---

## 🎯 **Características Principales**

### **Funcionalidades Actuales:**
- ✅ Sistema de búsqueda en tiempo real
- ✅ 8 categorías de familias Revit
- ✅ Sistema de favoritos
- ✅ Plan Free (3 descargas/día) y Premium (ilimitado)
- ✅ Responsive design (mobile-first)
- ✅ SEO avanzado con Schema.org (7 tipos)
- ✅ Páginas "Coming Soon" con waitlists

### **SEO Optimizations:**
- ✅ Meta tags multi-producto
- ✅ 16 URLs en sitemap.xml
- ✅ Schema.org: Organization, Product, WebSite, Breadcrumb, ProductLines, Categories, SoftwareApplication
- ✅ Robots.txt optimizado
- ✅ Open Graph y Twitter Cards
- ✅ Canonical URLs

---

## 📂 **Estructura del Proyecto**
```
boracity-website/
├── index.html                   # Landing page principal
├── README.md                    # Este archivo
├── CHANGELOG.md                 # Historial de cambios
├── sitemap.xml                  # Sitemap para SEO
├── robots.txt                   # Directivas para crawlers
│
├── docs/                        # 📚 DOCUMENTACIÓN COMPLETA
│   ├── SEO-STRATEGY.md         # Estrategia SEO detallada
│   ├── LAUNCH-ROADMAP.md       # Plan de lanzamiento
│   ├── TECHNICAL-SETUP.md      # Setup técnico
│   └── MAINTENANCE-GUIDE.md    # Guía de mantenimiento
│
├── products/                    # Páginas de productos
│   ├── sketchup-models.html    # Coming Soon - SketchUp
│   ├── d5-render-assets.html   # Coming Soon - D5 Render
│   └── textures.html           # Coming Soon - Textures
│
└── assets/
    ├── css/
    │   ├── main.css            # Variables y reset
    │   ├── styles.css          # Componentes principales
    │   └── responsive.css      # Media queries
    ├── images/                 # Logos, favicons, OG images
    └── js/
        ├── components/
        │   └── familyCard.js   # Componente tarjetas
        ├── utils/
        │   ├── constants.js    # Constantes globales
        │   └── helpers.js      # Funciones auxiliares
        ├── seo/
        │   └── schema.js       # Schema.org estructurado
        └── script.js           # Lógica principal
```

---

## 🚀 **Inicio Rápido**

### **Desarrollo Local:**

1. **Clonar el repositorio:**
```bash
   git clone https://github.com/tu-usuario/boracity-website.git
   cd boracity-website
```

2. **Opción A: Live Server (VSCode)**
   - Instalar extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **Opción B: Python HTTP Server**
```bash
   python -m http.server 8000
```

4. **Abrir en navegador:**
```
   http://localhost:8000
```

---

## 📚 **Documentación Completa**

Para entender el proyecto completamente, lee en orden:

1. **[SEO Strategy](docs/SEO-STRATEGY.md)** - Estrategia SEO multi-producto
2. **[Launch Roadmap](docs/LAUNCH-ROADMAP.md)** - Plan de lanzamiento fase por fase
3. **[Technical Setup](docs/TECHNICAL-SETUP.md)** - Configuración técnica detallada
4. **[Maintenance Guide](docs/MAINTENANCE-GUIDE.md)** - Cómo mantener el sitio

---

## 🛠️ **Stack Tecnológico**

- **Frontend:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+ Modules)
- **Fonts:** Inter (Google Fonts)
- **Icons:** Font Awesome 6.5.1
- **SEO:** Schema.org JSON-LD, Open Graph, Twitter Cards
- **Analytics:** Google Analytics, Google Search Console (post-launch)
- **Hosting:** TBD (Recomendado: Vercel, Netlify, Cloudflare Pages)

---

## 🎯 **Roadmap de Productos**

### **Q1 2025 - Fase 1: Revit Families**
- [x] 10,000+ familias BIM
- [x] 8 categorías principales
- [x] Sistema Free/Premium
- [x] SEO multi-producto preparado
- [ ] Conexión con plugin de Revit

### **Q2 2025 - Fase 2: SketchUp Models**
- [ ] Catálogo inicial: 500 modelos
- [ ] Integración con SketchUp
- [ ] Sistema de categorías
- [ ] Launch de waitlist

### **Q2 2025 - Fase 3: D5 Render & Textures**
- [ ] Assets para D5 Render
- [ ] Librería de texturas PBR 4K
- [ ] Sistema de preview avanzado

### **Q3 2025 - Fase 4: Marketplace**
- [ ] Creadores pueden subir contenido
- [ ] Sistema de comisiones
- [ ] Reviews y ratings

---

## 📊 **Métricas de Éxito**

### **Mes 1:**
- [ ] 500 visitas orgánicas
- [ ] 100 emails capturados (waitlists)
- [ ] 50 usuarios Premium

### **Mes 6:**
- [ ] 5,000 visitas orgánicas/mes
- [ ] 500 usuarios Premium
- [ ] Lanzamiento de SketchUp Models

### **Mes 12:**
- [ ] 20,000 visitas orgánicas/mes
- [ ] 1,000 usuarios Premium
- [ ] 4 líneas de producto activas

---

## 🤝 **Contribuir**

Este es un proyecto privado. Si quieres contribuir:

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Add nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📝 **Changelog**

Ver [CHANGELOG.md](CHANGELOG.md) para historial completo de cambios.

### **[1.0.0] - 2024-12-29**
**Added:**
- Landing page multi-producto
- SEO optimizado con 7 tipos de Schema.org
- 3 páginas Coming Soon (SketchUp, D5, Textures)
- Sitemap con 16 URLs
- Robots.txt profesional
- Sistema de waitlists

---

## 👨‍💻 **Autor**

**Boracity Team**
- Website: [boracity.com](https://www.boracity.com) (coming soon)
- GitHub: [@boracity](https://github.com/boracity)
- Contact: support@boracity.com

---

## 📄 **Licencia**

Copyright © 2024 Boracity. All rights reserved.

Este proyecto es propietario y confidencial. No distribuir sin autorización.

---

## 🙏 **Agradecimientos**

- Inspiración de diseño: Freepik, Envato Elements
- Competencia analizada: RevitCity, 3D Warehouse, BIMobject
- SEO guidance: Google Search Central, Ahrefs Blog

---

**⭐ Si este proyecto te ayuda, considera darle una estrella en GitHub**