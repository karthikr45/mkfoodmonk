import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/lib/data";

export const metadata = {
  title: "Videos — mkfoodmonk",
  description: "Stream masterclass videos from world-class chefs on mkfoodmonk.",
};

export default function VideosPage() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden bg-ink py-20">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-saffron/20 blur-3xl" />
        <div className="container-px relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Chef video library
            </span>
            <h1 className="mt-5 font-display text-4xl font-800 leading-tight text-cream sm:text-5xl">
              Masterclasses from{" "}
              <span className="text-saffron-light">world-class chefs</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-cream/60">
              Exclusive techniques and signature recipes, on demand.
            </p>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
