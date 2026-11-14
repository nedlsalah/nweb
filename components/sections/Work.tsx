"use client";
import { useState } from "react";
import { useSite } from "../SiteProvider";
import SectionHead from "../SectionHead";
import AutoVideo from "../AutoVideo";
import VideoLightbox from "../VideoLightbox";
import { asset } from "@/lib/asset";
import type { WorkItem } from "@/lib/content";

export default function Work() {
  const { c } = useSite();
  const w = c.work;
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<WorkItem | null>(null);
  const list = w.items.filter((i) => cat === "All" || i.cat === cat);

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHead n="02" eyebrow={w.eyebrow} title={w.title} intro={w.intro} />

      <div role="group" aria-label="Filter work" className="mb-10 flex flex-wrap gap-2">
        {w.filters.map((f) => (
          <button key={f} onClick={() => setCat(f)} aria-pressed={cat === f}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === f ? "border-fg bg-fg text-bg" : "border-line text-muted hover:text-fg"}`}>
            {f}
          </button>
        ))}
      </div>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((it, i) => {
          const media = it.videoSrc ? (
            <AutoVideo src={asset(it.videoSrc)} poster={asset(it.img)} label={it.title} className="h-full w-full object-cover" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(it.img)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          );
          const frame = "group relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface";
          const zoom = "transition-transform duration-700 ease-out group-hover:scale-[1.04]";
          return (
            <li key={it.title}>
              {it.videoSrc ? (
                <button onClick={() => setOpen(it)} className={frame} aria-label={`Play ${it.title}`}>
                  <div className={"h-full w-full " + zoom}>{media}</div>
                  <span className="absolute bottom-3 start-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">Play</span>
                </button>
              ) : (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className={frame}>
                  <div className={"h-full w-full " + zoom}>{media}</div>
                  <span className="sr-only">{it.title} {w.newTab}</span>
                </a>
              )}
              <div className="mt-4">
                <p className="text-sm text-muted">{it.cat} <span className="mx-1">/</span> {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{it.title}</h3>
                <p className="text-sm text-accent">{it.domain}</p>
                <p className="mt-2 text-sm text-muted">{it.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-16 max-w-2xl text-muted">{w.outro}</p>
      {open && <VideoLightbox item={open} newTab={w.newTab} onClose={() => setOpen(null)} />}
    </section>
  );
}
