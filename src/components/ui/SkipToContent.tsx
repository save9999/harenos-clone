export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
    >
      Aller au contenu principal
    </a>
  );
}
