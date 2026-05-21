"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "harenos_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-line)] bg-white px-6 py-5 shadow-2xl md:bottom-6 md:left-6 md:right-auto md:max-w-sm md:rounded-[20px] md:border"
    >
      <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
        Nous utilisons des cookies fonctionnels pour améliorer votre expérience.
        Aucune donnée publicitaire.{" "}
        <Link
          href="/confidentialite"
          className="underline hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
        >
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={accept}
          className="flex-1 rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
        >
          Accepter
        </button>
        <button
          type="button"
          onClick={decline}
          className="flex-1 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-brand-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
