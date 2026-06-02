"use client";

import Navbar from "@/components/Navbar";


export default function AboutPage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      <Navbar />

      {/* 🎬 CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07010c] to-black" />

        <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-purple-600/25 blur-[220px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-blue-600/20 blur-[240px] animate-pulse" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-white/5 blur-[260px]" />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-44 pb-28 text-center relative">

        <p className="uppercase tracking-[0.6em] text-zinc-500 text-xs">
          Audio Journal
        </p>

        <h1 className="text-6xl md:text-8xl font-black mt-8 leading-none">
          Behind The Sound
        </h1>

        <p className="text-zinc-400 mt-12 max-w-2xl mx-auto leading-8 text-lg">
          A cinematic journal of sound, emotion, and storytelling — documenting my
          growth as an audio engineering student.
        </p>
      </section>

      {/* INFO STRIP */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            { label: "Name", value: "Lady Chryzschel B. Prasmo" },
            { label: "Year Level", value: "3rd Year College" },
            { label: "School", value: "National University Manila" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold">
                {item.value}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* JOURNAL */}
      <section className="max-w-5xl mx-auto px-6 pb-44 space-y-32">

        {[
          {
            title: "Who I Am in Sound",
            entry:
              "I see sound not just as audio, but as emotion — shaping how people feel stories through texture, silence, and rhythm.",
          },
          {
            title: "My Journey in College",
            entry:
              "As a BSIT student specializing in Multimedia and Animation at National University Manila, every project becomes part of my creative evolution in sound design and production.",
          },
          {
            title: "What I Believe in Sound",
            entry:
              "Silence is not absence — it is control. Every sound decision contributes to storytelling, emotion, and cinematic depth.",
          },
        ].map((item, i) => (
          <div key={i} className="relative pl-12 border-l border-white/10">

            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-[0.4em] text-zinc-300 uppercase">
              Entry 0{i + 1}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
              {item.title}
            </h2>

            <p className="text-zinc-400 mt-8 leading-9 text-lg max-w-3xl">
              {item.entry}
            </p>

          </div>
        ))}

      </section>

      {/* TOOLS */}
      <section className="px-6 pb-36 text-center">

        <p className="text-zinc-500 text-xs tracking-[0.5em] uppercase">
          Tools I Use
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["FL Studio", "BandLab", "Premiere Pro"].map((tool) => (
            <span
              key={tool}
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}