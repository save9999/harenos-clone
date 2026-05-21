import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const ZONES = [
  { dept: "75", name: "Paris" },
  { dept: "92", name: "Hauts-de-Seine" },
  { dept: "93", name: "Seine-Saint-Denis" },
  { dept: "94", name: "Val-de-Marne" },
  { dept: "77", name: "Seine-et-Marne" },
  { dept: "78", name: "Yvelines" },
  { dept: "91", name: "Essonne" },
  { dept: "95", name: "Val-d'Oise" },
];

export function Zones() {
  return (
    <section id="zones" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[48px]">
              Partout en Île-de-France
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Nos équipes interviennent dans les 8 départements franciliens,
              aussi bien à Paris intramuros qu&apos;en grande couronne. Un chef
              de projet se déplace gratuitement pour votre visite technique.
            </p>
            <div className="mt-8">
              <Button href="#contact">Vérifier ma zone d&apos;intervention</Button>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {ZONES.map(({ dept, name }) => (
              <li
                key={dept}
                className="flex flex-col items-center gap-2 rounded-[20px] bg-white px-4 py-5 text-center ring-1 ring-[var(--color-line)]"
              >
                <span className="grid size-10 place-items-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                  <MapPin size={16} />
                </span>
                <span className="text-xl font-bold text-[var(--color-ink)]">
                  {dept}
                </span>
                <span className="text-xs leading-tight text-[var(--color-ink-soft)]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
