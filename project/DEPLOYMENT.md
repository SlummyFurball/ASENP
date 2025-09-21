# Guía de Despliegue en Vercel

## 🚀 Pasos para Desplegar en Vercel

### 1. Preparación del Repositorio
```bash
# Subir el código a GitHub
git init
git add .
git commit -m "Initial commit - ASENP Quality Consulting website"
git branch -M main
git remote add origin https://github.com/tu-usuario/asenp-website.git
git push -u origin main
```

### 2. Configuración en Vercel
1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Configura las variables de entorno (opcional):
   - `VITE_GA_TRACKING_ID`: Tu ID de Google Analytics
   - `VITE_SITE_URL`: URL de tu sitio

### 3. Configuración Automática
Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

### 4. Despliegue
- Haz clic en "Deploy"
- Vercel construirá y desplegará automáticamente
- Recibirás una URL como: `https://tu-proyecto.vercel.app`

## 🔧 Configuraciones Incluidas

### SEO Optimizado
- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Schema.org JSON-LD
- ✅ Sitemap.xml
- ✅ Robots.txt

### Performance
- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ Compresión de assets
- ✅ Caching optimizado

### Analytics
- ✅ Google Analytics 4 preparado
- ✅ Event tracking configurado
- ✅ Form submission tracking

### Seguridad
- ✅ Headers de seguridad
- ✅ HTTPS automático
- ✅ Content Security Policy

## 📊 Después del Despliegue

### Google Analytics
1. Crea una cuenta en Google Analytics 4
2. Obtén tu tracking ID (G-XXXXXXXXXX)
3. Agrégalo como variable de entorno en Vercel

### Google Search Console
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu dominio
3. Verifica la propiedad
4. Envía el sitemap: `https://tu-dominio.com/sitemap.xml`

### Dominio Personalizado (Opcional)
1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 🔄 Actualizaciones Automáticas
- Cada push a `main` desplegará automáticamente
- Preview deployments para otras ramas
- Rollback instantáneo si es necesario

## 📈 Monitoreo
- Analytics en tiempo real
- Core Web Vitals automáticos
- Error tracking integrado

¡Tu sitio estará listo para producción con todas las mejores prácticas implementadas!