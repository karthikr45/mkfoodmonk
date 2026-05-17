import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-ink text-cream">
      <div className="container-px grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo.png"
            alt="mkfoodmonk"
            width={210}
            height={140}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            Premium food delivery, curated artisan stores, and a world-class
            chef video library — all in one place.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-saffron hover:text-saffron"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream/40">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/stores" className="hover:text-saffron-light">
                Stores
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-saffron-light">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/#how" className="hover:text-saffron-light">
                How it works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream/40">
            Account
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/login" className="hover:text-saffron-light">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-saffron-light">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} mkfoodmonk. Crafted with taste.</p>
          <p>Premium food, delivered with soul.</p>
        </div>
      </div>
    </footer>
  );
}
