"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

export default function Process() {
  const { c } = useSite();
  const p = c.process;
  return (
    <section id="process" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="04" eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {p.steps.map(([t, d], i) => (
          <li key={t} className="bg-bg p-6 md:p-8">
            <p className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-10 text-2xl font-semibold tracking-tight">{t}</h3>
            <p className="mt-3 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
