"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NAV = [
  { href: "#projets", label: "Nos projets" },
  { href: "#expertises", label: "Travaux de rénovation" },
  { href: "#pourquoi", label: "Pourquoi Harenos" },
  { href: "#process", label: "Comment ça marche" },
  { href: "#faq", label: "FAQ" },
];

const LOGO =
  "https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b4ef69340625108f0191a4_logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={LOGO}
            alt="Harenos"
            width={140}
            height={36}
            unoptimized
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact">Décrire mon projet</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full ring-1 ring-[var(--color-line-strong)] lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button href="#contact" className="w-full">
                Décrire mon projet
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
