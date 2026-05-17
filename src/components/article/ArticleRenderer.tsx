import type { Block } from "@/lib/posts";

export function ArticleRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-article space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="text-[17px] leading-[1.75] text-[var(--color-ink-soft)]"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-display mt-10 text-[26px] font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-[32px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display mt-6 text-[20px] font-semibold tracking-tight text-[var(--color-ink)] md:text-[22px]"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[10px] inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-brand)]"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2 pl-1">
                {block.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[2px] inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[12px] font-bold text-[var(--color-brand-dark)]"
                    >
                      {j + 1}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-brand-soft)]/60 px-6 py-5"
              >
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand-dark)]">
                  {block.title}
                </p>
                <p className="mt-2 text-[16px] leading-[1.7] text-[var(--color-ink)]">
                  {block.text}
                </p>
              </aside>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-2 border-l-2 border-[var(--color-brand)] pl-5 text-[19px] italic leading-[1.6] text-[var(--color-ink)]"
              >
                "{block.text}"
                {block.author && (
                  <footer className="mt-2 text-[14px] not-italic text-[var(--color-muted)]">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
