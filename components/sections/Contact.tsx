"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";

// No form on purpose: your current site has none.
export default function Contact() {
  const { c } = useSite();
  const k = c.contact;
  const hrefs = [`mailto:${c.email}`, c.links.behance, c.links.photography, c.links.video];
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="09" eyebrow={k.eyebrow} title={k.title} intro={k.text} />
      <a href={`mailto:${c.email}`} className="block break-all text-[clamp(1.75rem,6vw,5rem)] font-semibold tracking-tighter hover:text-accent">{c.email}</a>
      <dl className="mt-12 grid gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {k.rows.map(([a, b]) => <div key={a}><dt className="text-sm text-muted">{a}</dt><dd className="mt-1">{b}</dd></div>)}
      </dl>
      <div className="mt-10 flex flex-wrap gap-3">
        {k.buttons.map((b, i) => (
          <a key={b} href={hrefs[i]} {...(i ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`rounded-full px-5 py-3 text-sm ${i === 0 ? "bg-fg font-medium text-bg" : "border border-line hover:bg-surface"}`}>
            {b}{i ? <span className="sr-only"> (opens in a new tab)</span> : null}
          </a>
        ))}
      </div>
      <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 text-sm text-muted">
        {k.strip.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
