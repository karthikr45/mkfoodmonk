import Link from "next/link";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AuthShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Visual side */}
      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80"
          alt="Premium dining"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl bg-cream px-5 py-3 shadow-soft"
          >
            <Image
              src="/logo.png"
              alt="mkfoodmonk"
              width={720}
              height={221}
              priority
              className="h-11 w-auto"
            />
          </Link>
          <div>
            <Quote size={36} className="text-saffron-light" />
            <p className="mt-4 max-w-md font-display text-3xl font-600 leading-snug text-cream">
              The finest kitchens in the city, delivered with soul.
            </p>
            <p className="mt-4 text-sm text-cream/60">
              Premium food, curated stores & a world-class chef library.
            </p>
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center bg-cream px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 flex items-center lg:hidden">
            <Image
              src="/logo.png"
              alt="mkfoodmonk"
              width={720}
              height={221}
              className="h-12 w-auto"
            />
          </Link>
          {children}
        </div>
      </div>
    </main>
  );
}
