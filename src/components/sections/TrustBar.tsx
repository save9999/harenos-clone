import { ShieldCheck, Award, BadgeCheck, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ITEMS = [
  {
    icon: ShieldCheck,
    label: "Garantie décennale",
    sub: "Tous chantiers couverts",
  },
  {
    icon: Award,
    label: "Qualibat certifié",
    sub: "Artisans qualifiés",
  },
  {
    icon: BadgeCheck,
    label: "Label RGE",
    sub: "Travaux éligibles aides",
  },
  {
    icon: MapPin,
    label: "8 départements IDF",
    sub: "75 · 92 · 93 · 94 · 77 · 78 · 91 · 95",
  },
  {
    icon: Clock,
    label: "Devis sous 48h",
    sub: "Gratuit · Sans engagement",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white py-10">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:justify-between">
          {ITEMS.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                <Icon size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--color-ink)]">
                  {label}
                </div>
                <div className="text-xs text-[var(--color-muted)]">{sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
