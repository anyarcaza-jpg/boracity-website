# 🏗️ Boracity - Professional BIM Families Platform

> Plataforma de distribución de familias BIM profesionales para Revit

## 📋 Descripción

Boracity es una plataforma web que permite a arquitectos e ingenieros descargar familias BIM de alta calidad para Revit. El sitio ofrece:

- ✅ 10,000+ familias BIM
- ✅ 8 categorías principales
- ✅ Sistema de búsqueda en tiempo real
- ✅ Favoritos y descargas
- ✅ Plan Free (3 descargas/día) y Premium (ilimitado)

## 📂 Estructura del Proyecto
```
boracity-website/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── main.css         # Variables y reset
    │   ├── styles.css       # Componentes principales
    │   └── responsive.css   # Media queries
    ├── images/
    └── js/
        ├── components/
        │   └── familyCard.js    # Componente de tarjetas
        ├── utils/
        │   ├── constants.js     # Constantes globales
        │   └── helpers.js       # Funciones auxiliares
        └── script.js            # Lógica principal
```

## 🚀 Cómo usar

### Desarrollo local:

1. **Abrir con Live Server (VS Code)**
   - Instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

2. **O usa Python:**
```bash
   python -m http.server 8000
```

3. **Abre en el navegador:**
```
   http://localhost:8000
```

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con variables CSS
- **JavaScript (ES6+)** - Módulos y funciones modernas
- **Font Awesome** - Iconos
- **Google Fonts (Inter)** - Tipografía

## 📦 Próximos pasos (Fases futuras)

### Fase 2:
- [ ] Conectar con API de Boracity
- [ ] Sistema de autenticación real
- [ ] Modelos de SketchUp
- [ ] Assets de D5 Render
- [ ] Librería de texturas

## 🛠️ Desarrollo

### Agregar nueva categoría:

1. Actualiza `assets/js/utils/constants.js`
2. Agrega el HTML en `index.html`
3. Actualiza los filtros si es necesario

### Conectar API propia:

Cuando tengas tu API de Boracity lista:

1. Crea `assets/js/api/config.js`
2. Actualiza `mockFamilies` en `script.js` con llamadas reales
3. Implementa autenticación

## 📝 Notas

- Este es un proyecto 100% independiente
- Se conectará con su propia API (no BIMShares API)
- Arquitectura preparada para escalar

## 👨‍💻 Autor

**Boracity Team**

---

*Versión 1.0.0 - Diciembre 2024*
```

**Guarda (Ctrl+S).**

---

## ✅ **¡REFACTORIZACIÓN COMPLETA!**

Tu código ahora está:
- ✅ **Organizado** en carpetas lógicas
- ✅ **Modular** (components, utils, constantes)
- ✅ **Documentado** (README.md)
- ✅ **Escalable** (fácil agregar categorías/funciones)
- ✅ **Mantenible** (código limpio y separado)

---

### **Resumen de lo que hicimos:**
```
Antes:
├── index.html
├── script.js (400 líneas, todo mezclado)
└── styles.css (800 líneas)

Después:
├── index.html
├── README.md
└── assets/
    ├── css/ (3 archivos organizados)
    └── js/ (5 archivos modulares)