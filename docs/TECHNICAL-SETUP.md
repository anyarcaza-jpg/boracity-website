# ⚙️ Technical Setup - Boracity

**Quick reference para configuración técnica**

---

## 🚀 **Deployment (Hosting)**

### **Opción Recomendada: Vercel**
```bash
1. Crear cuenta: vercel.com
2. Conectar GitHub repo
3. Deploy automático
4. Conectar dominio: boracity.com
```

**Alternativas:** Netlify, Cloudflare Pages

---

## 🌐 **DNS Configuration**
```
A Record:     @ → IP de hosting
CNAME:        www → boracity.com
SSL:          Auto (Let's Encrypt)
```

---

## 📊 **Analytics Setup**

### **Google Analytics 4:**
```html
<!-- Agregar antes de </head> en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **Google Search Console:**
```
1. search.google.com/search-console
2. Agregar propiedad: boracity.com
3. Verificar (DNS o HTML)
4. Enviar sitemap: https://www.boracity.com/sitemap.xml
```

---

## 📧 **Email Marketing**

### **Mailchimp Setup:**
```
1. Crear cuenta (gratis < 500 contactos)
2. Lista: "Boracity Waitlists"
3. Segmentos: SketchUp, D5, Textures
4. API Key → Conectar formularios
```

---

## 🔧 **Performance Optimization**
```
□ Compress images (TinyPNG)
□ Convert to WebP
□ Lazy loading (<img loading="lazy">)
□ Minify CSS/JS
□ CDN: Cloudflare
□ Caching headers: 1 year
```

**Target:** PageSpeed 90+ desktop, 85+ mobile

---

## 🔒 **Security**
```
□ HTTPS activo (SSL)
□ Content Security Policy headers
□ CORS configurado
□ Rate limiting (API futuro)
□ Environment variables (.env)
```

---

## 📱 **PWA (Progressive Web App)**
```
Archivos necesarios:
□ manifest.json ✅ (ya existe)
□ Service worker (futuro)
□ Icons 192x192, 512x512 ✅
```

---

## 🧪 **Testing Checklist**
```
□ Cross-browser (Chrome, Safari, Firefox, Edge)
□ Mobile responsive
□ Forms funcionan
□ Analytics captura eventos
□ Rich Results Test: ✅
□ PageSpeed > 85
```

---

## 🔄 **Continuous Deployment**
```
GitHub → Push
    ↓
Vercel → Auto-deploy
    ↓
https://www.boracity.com (live en 30 segundos)
```

---

## 📞 **Soporte Técnico**

**Errores comunes:**

| Error | Solución |
|-------|----------|
| DNS no resuelve | Esperar 24-48h propagación |
| SSL no activa | Verificar Vercel settings |
| Analytics no captura | Verificar Measurement ID |
| Forms no envían | Revisar Mailchimp API key |

---

**Última actualización:** Dec 2024  
**Contacto:** tech@boracity.com