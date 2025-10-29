"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  id: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({ id, title = "YouTube video", className }: YouTubeEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (clicked || shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [clicked, shouldLoad]);

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className={cn("relative aspect-video", className)}>
      {shouldLoad || clicked ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setClicked(true)}
          className="group absolute inset-0 flex w-full items-center justify-center overflow-hidden"
          aria-label="Play video"
          style={{ backgroundImage: `url(${thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
          <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}

export default YouTubeEmbed;

