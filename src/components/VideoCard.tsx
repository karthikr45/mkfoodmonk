import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/lib/data";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group relative overflow-hidden rounded-4xl shadow-soft transition-all duration-500 hover:shadow-premium">
      <div className="relative h-72">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="absolute left-5 top-5 rounded-full bg-saffron px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
        {video.category}
      </div>

      <button
        aria-label={`Play ${video.title}`}
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-saffron shadow-premium transition-transform duration-300 group-hover:scale-110"
      >
        <Play size={24} className="ml-1 fill-saffron" />
      </button>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="rounded-full bg-ink/60 px-2.5 py-1 text-[11px] font-semibold text-cream backdrop-blur">
          {video.duration}
        </span>
        <h3 className="mt-3 font-display text-2xl font-700 leading-tight text-cream">
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm text-cream/70">
          {video.chef} · {video.views} views
        </p>
      </div>
    </article>
  );
}
