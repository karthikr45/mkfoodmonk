import Image from "next/image";
import { Star, Clock } from "lucide-react";
import type { Store } from "@/lib/data";

export default function StoreCard({ store }: { store: Store }) {
  return (
    <article className="group card-surface overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          {store.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-forest px-3 py-1 text-xs font-bold text-white">
          <Star size={13} className="fill-white" />
          {store.rating}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-700 text-ink">{store.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{store.cuisine}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4 text-sm text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-saffron" />
            {store.deliveryTime}
          </span>
          <span className="font-medium text-ink">{store.priceForTwo}</span>
        </div>
      </div>
    </article>
  );
}
