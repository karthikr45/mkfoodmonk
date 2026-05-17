import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />

      <div className="container-px grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Sparkles size={14} /> Premium kitchens · curated daily
          </span>
          <h1 className="mt-6 font-display text-5xl font-800 leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Food, <span className="text-saffron">delivered</span>
            <br />
            with soul.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            mkfoodmonk brings the city&apos;s finest kitchens, artisan stores
            and a world-class chef video library to your door.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Get started <ArrowRight size={17} />
            </Link>
            <Link href="/#stores" className="btn-ghost">
              Browse stores
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-display text-3xl font-700 text-ink">500+</p>
              <p className="text-sm text-ink-muted">Premium kitchens</p>
            </div>
            <div className="h-10 w-px bg-ink/10" />
            <div>
              <p className="flex items-center gap-1 font-display text-3xl font-700 text-ink">
                4.9 <Star size={18} className="fill-gold text-gold" />
              </p>
              <p className="text-sm text-ink-muted">Avg. rating</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative h-[460px] overflow-hidden rounded-4xl shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=80"
              alt="Premium plated dish"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden animate-float rounded-3xl bg-white p-5 shadow-premium sm:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Avg. delivery
            </p>
            <p className="font-display text-2xl font-700 text-forest">26 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
