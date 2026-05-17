"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Soup } from "lucide-react";

const links = [
  { href: "/#stores", label: "Stores" },
  { href: "/#videos", label: "Videos" },
  { href: "/#how", label: "How it works" },
  { href: "/stores", label: "Explore" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-xl">
      <nav className="container-px flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-saffron text-white shadow-soft">
            <Soup size={20} strokeWidth={2.4} />
          </span>
          <span className="font-display text-2xl font-700 tracking-tight text-ink">
            mk<span className="text-saffron">food</span>monk
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="btn-ghost py-2.5">
            Log in
          </Link>
          <Link href="/signup" className="btn-primary py-2.5">
            Sign up
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-ink/10 p-2.5 text-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-cream lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink-muted hover:bg-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Link href="/login" className="btn-ghost flex-1 py-2.5">
                Log in
              </Link>
              <Link href="/signup" className="btn-primary flex-1 py-2.5">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
