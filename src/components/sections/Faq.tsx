"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ITEMS = [
  {
    q: "Sous quel délai obtient-on une estimation ?",
    a: "Nous répondons à toute demande sous 24h ouvrées avec une première fourchette budgétaire et un créneau de visite technique.",
  },
  {
    q: "Dans quels départements intervenez-vous ?",
    a: "Nous intervenons partout en Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95).",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. La visite technique et le devis détaillé n'engagent à rien. Vous ne payez qu'à la signature de l'ordre de mission.",
  },
  {
    q: "Quels corps d'état gérez-vous ?",
    a: "Tous : gros œuvre, plomberie, électricité, menuiserie, carrelage, peinture, climatisation. Nous coordonnons les équipes pour vous.",
  },
  {
    q: "Comment se passent les paiements ?",
    a: "Échelonnés selon l'avancement, avec validation contradictoire à chaque étape. Aucun paiement avant la signature du devis.",
  },
  {
    q: "Que se passe-t-il en cas d'imprévu technique ?",
    a: "Nous documentons l'imprévu, proposons une solution chiffrée et attendons votre validation avant d'agir.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-line)] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-[16px] font-semibold tracking-tight text-[var(--color-ink)]">
          {q}
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          {a}
        </p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--color-brand-soft)] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
              Vos questions, nos réponses
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Une question sur votre projet, le devis ou nos services ? Nous y
              répondons ici, ou directement par téléphone.
            </p>
            <div className="relative mt-10 hidden aspect-square w-full max-w-sm overflow-hidden rounded-[28px] md:block">
              <Image
                src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b5eb31e838030a662d5121_faq-image.png"
                alt=""
                fill
                unoptimized
                sizes="400px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-[28px] bg-white px-6 ring-1 ring-[var(--color-line)] md:px-8">
            {ITEMS.map((item) => (
              <Item key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
