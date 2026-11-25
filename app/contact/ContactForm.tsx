"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "../../lib/site";
import { services } from "../../lib/content";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; via: string } | { kind: "error"; message: string };


export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();
    const contactPref = String(data.get("contactPref") || "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid work email.";
    if (message.length < 20) next.message = "Describe the problem in at least 20 characters so we can respond usefully.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus({ kind: "sending" });
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    const body = { name, business, email, service, message, contactPref };

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus({ kind: "sent", via: "form endpoint" });
        form.reset();
      } else {
        // Honest no-backend path: open the visitor's email client addressed to us.
        const subject = encodeURIComponent(`Enquiry — ${service || "Sting Analytics"} — ${business || name}`);
        const text = encodeURIComponent(
          `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nService: ${service}\nPreferred contact: ${contactPref}\n\n${message}`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${text}`;
        setStatus({ kind: "sent", via: "email" });
        form.reset();
      }
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-privacy" className="mt-8 space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">Name *</label>
          <input id="name" name="name" autoComplete="name" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
          {errors.name && <p role="alert" className="mt-1 text-sm text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="business" className="text-sm font-semibold text-navy">Business / organisation</label>
          <input id="business" name="business" autoComplete="organization" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">Work email *</label>
          <input id="email" name="email" type="email" autoComplete="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
          {errors.email && <p role="alert" className="mt-1 text-sm text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-semibold text-navy">Service of interest</label>
          <select id="service" name="service" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {[...services.map((s) => s.title), "Not sure yet"].map((s) => (
            <option key={s}>{s}</option>
          ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">Brief description of the business problem *</label>
        <textarea id="message" name="message" rows={6} placeholder="What is happening, what is hard to explain, and which decision needs better evidence?" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
        {errors.message && <p role="alert" className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>
      <div>
        <label htmlFor="contactPref" className="text-sm font-semibold text-navy">Preferred contact method (optional)</label>
        <input id="contactPref" name="contactPref" placeholder="Email, phone, WhatsApp…" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
      </div>
      <p id="form-privacy" className="text-xs leading-relaxed text-slate-600">
        We use your details only to respond to your enquiry. No newsletters, no sharing. Prefer email directly?{" "}
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        {!process.env.NEXT_PUBLIC_FORM_ENDPOINT && (
          <> This form currently opens your email client — no data is stored on this site. See README for connecting a form endpoint.</>
        )}
      </p>
      {status.kind === "error" && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800">Could not send: {status.message}. Please email us directly instead.</p>}
      {status.kind === "sent" && (
        <p role="status" className="rounded-md bg-green-50 p-3 text-sm text-green-900">
          {status.via === "email"
            ? "Your email client should now open with the enquiry addressed to {CONTACT_EMAIL}. If it did not open, please email us directly."
            : "Thank you — your enquiry was sent. We will reply to your work email."}
        </p>
      )}
      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-light disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
