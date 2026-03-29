"use client";

import { FormEvent, useState } from "react";

interface ContactFormProps {
  whatsappNumber: string;
  defaultMessage: string;
}

export function ContactForm({ whatsappNumber, defaultMessage }: ContactFormProps) {
  const [error, setError] = useState<string | null>(null);

  const hasWhatsApp = Boolean(whatsappNumber);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!hasWhatsApp) {
      setError("Falta configurar el numero de WhatsApp para recibir cotizaciones.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const quantity = String(formData.get("quantity") ?? "").trim();
    const neededDate = String(formData.get("neededDate") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    const messageLines = [
      defaultMessage,
      "",
      "Datos de cotizacion:",
      `Nombre: ${name}`,
      phone ? `Telefono: ${phone}` : "Telefono: No informado",
      `Cantidad estimada: ${quantity}`,
      neededDate ? `Fecha estimada: ${neededDate}` : "Fecha estimada: No definida",
      `Detalle del diseno/pedido: ${details}`,
    ];

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageLines.join("\n")
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Nombre
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-white/15 bg-[color:var(--surface)]/60 px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)]"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Telefono
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="+56... (opcional)"
            className="w-full rounded-xl border border-white/15 bg-[color:var(--surface)]/60 px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)]"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Cantidad
          </span>
          <input
            name="quantity"
            type="number"
            min={1}
            required
            placeholder="Ej: 12"
            className="w-full rounded-xl border border-white/15 bg-[color:var(--surface)]/60 px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)]"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Fecha estimada
          </span>
          <input
            name="neededDate"
            type="date"
            className="w-full rounded-xl border border-white/15 bg-[color:var(--surface)]/60 px-3 py-2 text-sm text-[color:var(--text-primary)]"
          />
        </label>
      </div>

      <label className="space-y-1.5">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
          Detalle del pedido
        </span>
        <textarea
          name="details"
          required
          rows={4}
          placeholder="Describe tu idea, colores, tallas o cualquier referencia que tengas."
          className="w-full rounded-xl border border-white/15 bg-[color:var(--surface)]/60 px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)]"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="cta-primary" disabled={!hasWhatsApp}>
          Enviar cotizacion por WhatsApp
        </button>
        <p className="text-xs text-[color:var(--text-muted)]">
          Al enviar, se abre WhatsApp con tu mensaje listo para revisar y enviar.
        </p>
      </div>

      {error ? <p className="text-xs text-red-300">{error}</p> : null}
    </form>
  );
}
