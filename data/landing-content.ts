import type { LandingContent } from "@/types/landing";

export const landingContent: LandingContent = {
  brandName: "Yivalte",
  nav: [
    { label: "Servicio", href: "#servicio" },
    { label: "Ejemplos", href: "#ejemplos" },
    { label: "Precios", href: "#precios" },
    { label: "Confianza", href: "#confianza" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    badge: "Poleras personalizadas en Chile",
    title: "Estampado DTF con foco en calidad y servicio personalizado",
    description:
      "Creamos poleras personalizadas para regalos, cumpleanos, grupos y eventos pequenos. Tu idea, nuestra produccion.",
    highlights: [
      "Desde $11.990",
      "Descuento por cantidad",
      "Atencion 1 a 1",
    ],
    primaryCta: { label: "Cotizar mi diseno", href: "#contacto" },
    secondaryCta: { label: "Ver ejemplos", href: "#ejemplos" },
  },
  howItWorks: [
    {
      id: 1,
      title: "Nos compartes tu idea",
      description:
        "Puedes enviar diseno listo o una referencia para orientar estilo, color y ubicacion del estampado.",
    },
    {
      id: 2,
      title: "Te cotizamos segun pedido",
      description:
        "Definimos valor referencial considerando cantidad, tipo de prenda y complejidad del trabajo.",
    },
    {
      id: 3,
      title: "Producimos y coordinamos entrega",
      description:
        "Te acompanamos durante el proceso para asegurar un resultado alineado a lo que buscabas.",
    },
  ],
  examples: [
    {
      id: "ex-01",
      title: "Cumpleanos y regalos",
      caption: "Pedidos pequenos con disenos personalizados.",
      imageSrc: "/images/examples/placeholder.svg",
      imageAlt: "Ejemplo de polera personalizada para regalo",
    },
    {
      id: "ex-02",
      title: "Grupos y equipos",
      caption: "Misma idea adaptada para varias tallas.",
      imageSrc: "/images/examples/placeholder.svg",
      imageAlt: "Ejemplo de poleras para grupo",
    },
    {
      id: "ex-03",
      title: "Eventos pequenos",
      caption: "Produccion cuidada para ocasiones especiales.",
      imageSrc: "/images/examples/placeholder.svg",
      imageAlt: "Ejemplo de polera para evento pequeno",
    },
  ],
  pricing: {
    heading: "Precios referenciales",
    startingPrice: "$11.990",
    description:
      "El valor final depende de prenda, diseno y volumen. Hay descuentos por cantidad.",
    notes: [
      "Desde $11.990 por unidad (referencial).",
      "Descuento por volumen en pedidos multiples.",
      "Cotizacion final segun requerimiento real.",
    ],
    disclaimer:
      "Precios informativos para orientar. El valor final se confirma al revisar tu pedido.",
    cta: {
      label: "Pedir cotizacion exacta",
      href: "#contacto",
    },
  },
  trust: [
    {
      id: "tr-01",
      title: "Atencion 1 a 1",
      description: "No somos tienda masiva. Te guiamos en cada decision clave.",
    },
    {
      id: "tr-02",
      title: "Calidad visual DTF",
      description: "Color, detalle y buen acabado para uso personal o eventos.",
    },
    {
      id: "tr-03",
      title: "Proceso claro",
      description: "Sin pasos confusos: idea, cotizacion, produccion y entrega.",
    },
  ],
  faq: [
    {
      id: "faq-01",
      question: "Debo enviar un diseno terminado?",
      answer:
        "No necesariamente. Puedes enviar una idea o referencia y te ayudamos a aterrizarla.",
    },
    {
      id: "faq-02",
      question: "Hay minimo de unidades?",
      answer:
        "Depende del caso. Trabajamos pedidos pequenos y tambien volumen con descuento.",
    },
    {
      id: "faq-03",
      question: "Cuanto demora un pedido?",
      answer:
        "El plazo depende de cantidad y complejidad. Se confirma durante la cotizacion.",
    },
    {
      id: "faq-04",
      question: "Hacen envios en Chile?",
      answer:
        "Si, podemos coordinar entrega o envio segun la ciudad y tipo de pedido.",
    },
  ],
  contact: {
    title: "Cuentanos tu idea y te cotizamos",
    description:
      "Estamos dejando esta etapa preparada para conectar WhatsApp o formulario mas adelante.",
    buttonLabel: "Contactar para cotizar",
    buttonHref: "#",
    helperText: "Placeholder de contacto. Integracion real en siguiente fase.",
    responseTimeNote: "Tiempo referencial de respuesta: dentro del dia habil.",
    quoteChecklist: [
      "Cantidad aproximada de poleras",
      "Tallas o rango de tallas",
      "Fecha estimada en que la necesitas",
      "Idea o referencia del diseno",
    ],
  },
  footer: {
    note: "Servicio de poleras personalizadas con estampado DTF",
    copyright: "(c) 2026 Yivalte. Todos los derechos reservados.",
  },
};
