export default function SectionHead({ n, eyebrow, title, intro }: { n: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
      <p className="text-sm text-muted md:col-span-3"><span className="me-3 text-accent">{n}</span>{eyebrow}</p>
      <div className="md:col-span-9">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>}
      </div>
    </header>
  );
}
