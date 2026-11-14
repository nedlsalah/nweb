"use client";
import { useEffect, useRef } from "react";
import type { WorkItem } from "@/lib/content";
import { asset } from "@/lib/asset";

/** Native <dialog>: focus trap, Esc to close and inert background come for free. */
export default function VideoLightbox({ item, onClose, newTab }: { item: WorkItem; onClose: () => void; newTab: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    d.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; if (d.open) d.close(); };
  }, []);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()} // click on backdrop area
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 backdrop:bg-black/85 md:p-10"
      aria-label={item.title}
    >
      <div className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-4 text-fg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{item.title}</h3>
            <p className="mt-1 max-w-xl text-sm text-muted">{item.desc}</p>
          </div>
          <button onClick={onClose} className="shrink-0 rounded-full border border-line px-4 py-2 text-sm hover:bg-surface">Close</button>
        </div>
        <video
          src={asset(item.videoSrc!)}
          poster={asset(item.img)}
          controls autoPlay playsInline
          className="max-h-[70vh] w-full rounded-xl bg-black object-contain"
        />
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-fit text-sm underline underline-offset-4">
          {item.domain}<span className="sr-only"> {newTab}</span>
        </a>
      </div>
    </dialog>
  );
}
