"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Mail, Lock, User, ArrowRight } from "lucide-react";

type Mode = "login" | "signup";

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const endpoint = isSignup ? "/api/auth/signup" : "/api/auth/login";
      const payload = isSignup
        ? form
        : { email: form.email, password: form.password };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      setSuccess(
        isSignup
          ? `Welcome, ${data.user.name.split(" ")[0]}! Your account is ready.`
          : `Welcome back, ${data.user.name.split(" ")[0]}!`
      );
      setTimeout(() => router.push("/"), 1200);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-4xl font-800 text-ink">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        {isSignup
          ? "Join mkfoodmonk for premium kitchens & the chef library."
          : "Log in to continue your culinary journey."}
      </p>

      <form onSubmit={handleSubmit} className="mt-9 space-y-5">
        {isSignup && (
          <Field
            icon={<User size={17} />}
            label="Full name"
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            onChange={(v) => update("name", v)}
            autoComplete="name"
          />
        )}
        <Field
          icon={<Mail size={17} />}
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
        />
        <Field
          icon={<Lock size={17} />}
          label="Password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(v) => update("password", v)}
          autoComplete={isSignup ? "new-password" : "current-password"}
        />

        {error && (
          <p className="rounded-xl border border-saffron/30 bg-saffron/5 px-4 py-3 text-sm text-saffron-dark">
            {error}
          </p>
        )}
        {success && (
          <p className="rounded-xl border border-forest/30 bg-forest/5 px-4 py-3 text-sm text-forest">
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <Loader2 size={17} className="animate-spin" />
          ) : (
            <>
              {isSignup ? "Create account" : "Log in"}
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-muted">
        {isSignup ? "Already have an account?" : "New to mkfoodmonk?"}{" "}
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="font-semibold text-saffron hover:text-saffron-dark"
        >
          {isSignup ? "Log in" : "Create one"}
        </Link>
      </p>
    </div>
  );
}

function Field({
  icon,
  label,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <span className="relative block">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">
          {icon}
        </span>
        <input
          type={type}
          required
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-ink/10 bg-white py-3.5 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
        />
      </span>
    </label>
  );
}
