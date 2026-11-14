"use client";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";
import { asset } from "@/lib/asset";

export default function About() {
  const { c } = useSite();
  const a = c.about;
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="03" eyebrow={a.eyebrow} title={a.title} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/img/me.jpg")} alt={a.imgAlt} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>
        <div className="lg:col-span-8">
          <div className="max-w-2xl space-y-5 text-lg text-muted">{a.paras.map((p) => <p key={p}>{p}</p>)}</div>
          <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
            {a.stats.map(([k, v]) => (
              <div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="mt-1 text-2xl font-semibold tracking-tight">{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
