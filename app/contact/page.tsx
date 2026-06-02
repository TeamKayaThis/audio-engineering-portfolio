"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND (AURORA CINEMATIC) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06010f] to-black" />

        {/* animated aurora blobs */}
        <div className="absolute top-[-15%] left-[-10%] w-[900px] h-[900px] bg-purple-600/30 blur-[220px] animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] bg-blue-600/25 blur-[240px] animate-pulse" />
        <div className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-fuchsia-500/10 blur-[200px] animate-pulse" />

        {/* soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 blur-[240px]" />

        {/* cinematic grid */}
        <div className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-[size:80px_80px]" />

        {/* vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90" />

        {/* noise texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />
      </div>

      {/* MAIN */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 relative">

        <div className="max-w-6xl w-full text-center z-10">

          {/* HEADER */}
          <p className="uppercase tracking-[0.5em] text-zinc-400 text-xs">
            Contact Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Let’s Build Something
            <br />
             Together
          </h1>

          <p className="text-zinc-300 mt-8 max-w-2xl mx-auto leading-8 text-lg">
            Open for collaborations, film audio projects, sound design,
            music production, and multimedia storytelling.
          </p>

          {/* INFO GRID */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 text-left">

            {/* EMAIL */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
              <p className="text-xs tracking-[0.4em] text-zinc-400 uppercase">
                Email
              </p>

              <a
                href="mailto:prasmo.ladychryzschel25@gmail.com"
                className="text-2xl mt-4 font-light block group-hover:tracking-wider transition text-white"
              >
                prasmo.ladychryzschel25@gmail.com
              </a>

              <p className="text-zinc-500 text-sm mt-4">
                Best way to reach me for projects & collaborations
              </p>
            </div>

            {/* PHONE */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
              <p className="text-xs tracking-[0.4em] text-zinc-400 uppercase">
                Phone
              </p>

              <a
                href="tel:09120667238"
                className="text-2xl mt-4 font-light block group-hover:tracking-wider transition text-white"
              >
                0912 066 7238
              </a>

              <p className="text-zinc-500 text-sm mt-4">
                Available for urgent project inquiries
              </p>
            </div>

            {/* LOCATION */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition group md:col-span-2">
              <p className="text-xs tracking-[0.4em] text-zinc-400 uppercase">
                Location
              </p>

              <a
                href="https://www.google.com/maps/place/Delos+Santos+St,+Sampaloc,+Manila,+1008+Metro+Manila/@14.6009221,120.9926376,18.04z/data=!4m6!3m5!1s0x3397c9f90810b84d:0x29cbd642e34b429e!8m2!3d14.6014656!4d120.9912842!16s%2Fg%2F11gj1b6q68?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-2xl mt-4 font-light block group-hover:tracking-wider transition text-white"
              >
                International Ladies Dormitory & Computer Cafe, Manila
              </a>

              <p className="text-zinc-500 text-sm mt-4">
                Click to open in Google Maps
              </p>
            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-16">

            <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-8">
              Social Media
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="https://www.instagram.com/lciiinnngg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 hover:bg-white hover:text-black transition"
              >
                Instagram • @lciiinnngg
              </a>

              <a
                href="https://facebook.com/lc.prasmo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 hover:bg-white hover:text-black transition"
              >
                Facebook • LC Prasmo
              </a>

              <a
                href="https://www.youtube.com/@LCPrasmo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 hover:bg-white hover:text-black transition"
              >
                YouTube • @LCPrasmo
              </a>
            </div>
          </div>

          {/* FOOT NOTE */}
          <div className="mt-16">
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase animate-pulse">
              READY WHEN YOU ARE
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}