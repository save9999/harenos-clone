"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, Clock4 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { ok: false, message: "" };

const PROJECT_TYPES = [
  "Rénovation complète",
  "Cuisine",
  "Salle de bain",
  "Toiture & façade",
  "Extension / gros œuvre",
  "Autre",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-[var(--color-ink)] text-white">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative p-10 md:p-14">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[var(--color-brand)]/25 blur-3xl"
              />
              <div className="relative">
                <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-tight md:text-[44px]">
                  Décrivez votre projet
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                  Un chef de projet vous rappelle sous 24h avec une première
                  estimation budgétaire et un créneau de visite technique.
                </p>

                <ul className="mt-10 space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <Clock4
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--color-brand)]"
                    />
                    <span>
                      <span className="font-semibold text-white">
                        Réponse sous 24h
                      </span>
                      <br />
                      <span className="text-white/60">
                        Du lundi au vendredi, créneau confirmé par email
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--color-brand)]"
                    />
                    <span>
                      <a
                        href="tel:+33180000000"
                        className="font-semibold text-white hover:underline"
                      >
                        +33 1 80 00 00 00
                      </a>
                      <br />
                      <span className="text-white/60">9h–19h en semaine</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--color-brand)]"
                    />
                    <span>
                      <a
                        href="mailto:bonjour@harenos.fr"
                        className="font-semibold text-white hover:underline"
                      >
                        bonjour@harenos.fr
                      </a>
                      <br />
                      <span className="text-white/60">Toutes vos questions</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 text-[var(--color-ink)] md:p-12">
              {state.ok ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid size-16 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                    <CheckCircle2 size={32} strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                    Demande reçue
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                    {state.message}
                  </p>
                </div>
              ) : (
                <form action={formAction} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nom" name="name" required />
                    <Field
                      label="Téléphone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@email.fr"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label="Type de projet"
                      name="projectType"
                      options={PROJECT_TYPES}
                    />
                    <Field
                      label="Ville / département"
                      name="city"
                      placeholder="Paris 12, 92, etc."
                    />
                  </div>
                  <Field
                    label="Décrivez votre projet"
                    name="message"
                    required
                    textarea
                    placeholder="Surface, pièces concernées, délai souhaité…"
                  />

                  {state.message && !state.ok && (
                    <p className="text-sm font-medium text-[var(--color-brand)]">
                      {state.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {pending ? "Envoi…" : "Envoyer ma demande"}
                    {!pending && <ArrowRight size={16} />}
                  </button>
                  <p className="text-xs text-[var(--color-muted)]">
                    En envoyant ce formulaire, vous acceptez d&apos;être
                    recontacté par Harenos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const baseClass =
    "w-full rounded-2xl border border-[var(--color-line-strong)] bg-white px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20";

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
        {label}
        {required && <span className="text-[var(--color-brand)]"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-2xl border border-[var(--color-line-strong)] bg-white px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
