import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Truck, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import StoreCard from "@/components/StoreCard";
import VideoCard from "@/components/VideoCard";
import { stores, videos } from "@/lib/data";

const steps = [
  {
    icon: UtensilsCrossed,
    title: "Discover premium kitchens",
    desc: "Hand-picked stores and chefs, curated for taste and craft.",
  },
  {
    icon: Truck,
    title: "Order in a tap",
    desc: "Live tracking and an average 26-minute delivery window.",
  },
  {
    icon: PlayCircle,
    title: "Watch & recreate",
    desc: "Stream masterclass videos from the chefs you order from.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* How it works */}
      <section id="how" className="container-px py-20">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to a better table"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="card-surface p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron/10 text-saffron">
                <s.icon size={26} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl font-700 text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stores — highlighted */}
      <section id="stores" className="bg-cream-deep py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Featured stores"
            title={
              <>
                Curated kitchens,{" "}
                <span className="text-saffron">worth the craving</span>
              </>
            }
            subtitle="The most-loved premium stores on mkfoodmonk this week."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {stores.slice(0, 6).map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/stores" className="btn-primary">
              View all stores <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Videos — highlighted */}
      <section id="videos" className="relative overflow-hidden bg-ink py-24">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-saffron/20 blur-3xl" />
        <div className="container-px relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Chef video library
            </span>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl">
              Watch the masters,{" "}
              <span className="text-saffron-light">cook like one</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/60">
              Exclusive masterclasses and techniques from the chefs behind your
              favourite kitchens.
            </p>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-white hover:shadow-premium"
            >
              Explore the library <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px py-24">
        <div className="relative overflow-hidden rounded-4xl bg-saffron px-8 py-20 text-center shadow-premium">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <h2 className="font-display text-4xl font-800 text-white sm:text-5xl">
            Hungry for something better?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/85">
            Join mkfoodmonk and unlock premium kitchens, exclusive stores and
            the full chef video library.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-300 hover:scale-105"
            >
              Create your account <ArrowRight size={17} />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              I already have one
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
