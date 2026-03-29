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
- Llevar a contacto para cotizar.

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

## Configurar WhatsApp (sin hardcode)

1. Copia `.env.example` a `.env.local`.
2. Configura tu numero de WhatsApp en formato internacional (solo digitos).
3. Ajusta el mensaje prellenado.

Ejemplo:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola Yivalte, quiero cotizar poleras personalizadas.
```

Comportamiento:

- Con `NEXT_PUBLIC_WHATSAPP_NUMBER`:
  - CTA principal abre `wa.me`.
  - El formulario de contacto arma y abre el mensaje con los datos del cliente.
- Sin `NEXT_PUBLIC_WHATSAPP_NUMBER`:
  - CTA usa fallback interno a `#contacto`.
  - El formulario avisa que falta configurar WhatsApp.

## Variables en Vercel

En `Project Settings > Environment Variables` agrega:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - Valor: tu numero en formato internacional sin `+`, sin espacios, sin guiones.
  - Ejemplo Chile: `56912345678`
- `NEXT_PUBLIC_WHATSAPP_MESSAGE`
  - Valor recomendado: `Hola Yivalte, quiero cotizar poleras personalizadas.`

Luego haz redeploy para aplicar cambios.

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
  contact-form.tsx
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

- Integracion de WhatsApp se controla por variables de entorno.
- Si aparece warning de hydration en desarrollo, revisa extensiones del navegador como Dark Reader.

## Deploy en Vercel

1. Conectar el repo en Vercel.
2. Framework detectado: Next.js.
3. Build command: `npm run build`.
4. Output: default de Next.js.
5. Configurar variables `NEXT_PUBLIC_WHATSAPP_*` en Project Settings > Environment Variables.

## Roadmap corto

1. Reemplazar placeholders por fotos reales.
2. Agregar tracking basico de conversion.
3. Refinar copy y pruebas de conversion.
