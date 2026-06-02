"use client";

export default function Footer() {
  return (
    <footer className="relative mt-32 px-6 py-12 text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[180px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[160px]" />
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-zinc-600 tracking-[0.3em]">
        © {new Date().getFullYear()} LC Prasmo
      </p>

    </footer>
  );
}