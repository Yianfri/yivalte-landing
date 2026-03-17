# Yivalte Landing

Landing page one-page para Yivalte, enfocada en conversion por cotizacion (sin ecommerce por ahora).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Deploy objetivo: Vercel

## Objetivo actual (MVP)

- Explicar el servicio de poleras personalizadas con estampado DTF.
- Mostrar ejemplos visuales.
- Entregar precio referencial (desde $11.990).
- Generar confianza.
- Llevar a contacto para cotizar (placeholder, sin backend aun).

## Requisitos

- Node.js 22+
- npm 10+

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir en navegador: `http://localhost:3000`

Si el puerto 3000 esta ocupado:

```bash
npm run dev -- -p 3001
```

## Scripts utiles

```bash
npm run dev     # desarrollo
npm run lint    # lint
npm run build   # build produccion
npm run start   # correr build local
```

## Estructura principal

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/landing/
  site-header.tsx
  hero-section.tsx
  how-it-works-section.tsx
  examples-section.tsx
  pricing-section.tsx
  trust-section.tsx
  faq-section.tsx
  contact-section.tsx
  mobile-cta.tsx
  footer-section.tsx
data/
  landing-content.ts
types/
  landing.ts
public/images/examples/
  placeholder.svg
```

## Notas

- El boton de contacto esta como placeholder (`href="#"`).
- Integracion real de WhatsApp/formulario queda para la siguiente fase.
- Si aparece warning de hydration en desarrollo, revisa extensiones del navegador como Dark Reader.

## Deploy en Vercel

1. Conectar el repo en Vercel.
2. Framework detectado: Next.js.
3. Build command: `npm run build`.
4. Output: default de Next.js.

## Roadmap corto

1. Integrar CTA de WhatsApp con mensaje prellenado.
2. Reemplazar placeholders por fotos reales.
3. Agregar tracking basico de conversion.
4. Refinar copy y pruebas de conversion.
