"use client";

import { useRouter } from "next/navigation";

type Props = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
};

export default function PageHeader({
  title,
  subtitle,
  showBack = true,
}: Props) {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">

      {showBack && (
        <button
          onClick={() => router.back()}
          className="mb-8 text-xs px-4 py-2 rounded-full border border-white/15 text-zinc-400 hover:text-white transition"
        >
          Back
        </button>
      )}

      <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>

      {subtitle && (
        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}