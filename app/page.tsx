"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Reveal from "../components/Reveal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="bg-black text-white overflow-x-hidden">

      {/* CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/20 blur-[160px] animate-pulse" />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />

      </div>

      {/* INTRO */}
      <Intro />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-visible">

        {/* SOUND WAVES */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">

          <div className="flex gap-[6px] items-end h-40">

            {Array.from({ length: 40 }).map((_, i) => {
              const height = ((i * 17) % 80) + 20;

              return (
                <div
                  key={i}
                  className="w-[3px] bg-white/40 animate-pulse"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              );
            })}

          </div>

        </div>

        {/* GLOW */}
        <div className="absolute inset-0">

          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px]" />

          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[160px]" />

        </div>

        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl relative z-10 overflow-visible">

          {/* LEFT SIDE */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.6em] text-zinc-400 text-xs"
            >
            </motion.p>

       <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="
          text-6xl md:text-[8rem]
          font-extrabold
          mt-8
          leading-[0.9]
          pb-6
          tracking-tight
        "
      >
        <span className="block text-white">LC</span>

        <span className="block text-white">
          PRASM
          <span
            className="
              bg-gradient-to-r
              from-purple-300
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            O
          </span>
        </span>
      </motion.h1>

            {/* MINI TAGLINE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-purple-300 tracking-[0.3em] uppercase text-xs"
            >
              Crafting emotion through sound
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-zinc-400 text-lg leading-8 max-w-xl"
            >
              I design sound that defines emotion, tension,
              and atmosphere in every frame.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex gap-4 flex-wrap"
            >

              <a
                href="/projects"
                className="
                  px-8 py-4 rounded-full
                  bg-white text-black font-semibold
                  hover:scale-105
                  transition duration-300
                "
              >
                View Work
              </a>

              <a
                href="/about"
                className="
                  px-8 py-4 rounded-full
                  border border-white/20
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                About Me
              </a>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 flex gap-10 text-zinc-500 flex-wrap"
            >

              <div>
                <h3 className="text-3xl font-bold text-white">7</h3>
                <p className="text-sm mt-1">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">3+</h3>
                <p className="text-sm mt-1">Years Learning</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-sm mt-1">Creative Energy</p>
              </div>

            </motion.div>

            {/* SCROLL INDICATOR */}
            <div className="mt-16 flex flex-col items-start gap-3">

              <span className="text-xs tracking-[0.4em] text-zinc-600">
                SCROLL TO EXPLORE
              </span>

              <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-8 bg-white animate-bounce" />
              </div>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
         <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

            {/* IMAGE GLOW */}
            <div className="absolute w-[450px] h-[450px] bg-purple-500/30 blur-[120px] rounded-full" />

            {/* IMAGE CONTAINER */}
            <div className="relative">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 rounded-[40px] z-20 pointer-events-none" />

              {/* IMAGE */}
              <Image
                src="/photos/7.jpg"
                alt="LC Prasmo"
                width={420}
                height={540}
                priority
                className="
                  relative z-10
                  w-[320px] md:w-[380px] lg:w-[420px]
                  h-auto
                  rounded-[40px]
                  object-cover
                  border border-white/10
                  shadow-2xl
                  hover:scale-[1.02]
                  transition duration-700
                "
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURE STRIP */}
      <Reveal>
        <section className="py-16 border-y border-white/10">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center text-zinc-400">

            <div className="
              p-8 rounded-2xl
              border border-white/10
              hover:border-purple-500/30
              hover:bg-white/5
              transition duration-500
            ">
              <h3 className="text-white text-xl font-semibold">
                Cinematic Audio
              </h3>

              <p className="text-sm mt-2">
                Film-grade sound design & mixing
              </p>
            </div>

            <div className="
              p-8 rounded-2xl
              border border-white/10
              hover:border-purple-500/30
              hover:bg-white/5
              transition duration-500
            ">
              <h3 className="text-white text-xl font-semibold">
                Music Production
              </h3>

              <p className="text-sm mt-2">
                Modern audio engineering workflow
              </p>
            </div>

            <div className="
              p-8 rounded-2xl
              border border-white/10
              hover:border-purple-500/30
              hover:bg-white/5
              transition duration-500
            ">
              <h3 className="text-white text-xl font-semibold">
                Storytelling
              </h3>

              <p className="text-sm mt-2">
                Emotion-driven soundscapes
              </p>
            </div>

          </div>

        </section>
      </Reveal>

      {/* ABOUT */}
      <Reveal>
        <section className="py-32 px-6 max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div>

              <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-4">
                About
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Sound is not noise.
                <span className="text-zinc-500"> It’s emotion.</span>
              </h2>

            </div>

            <div>

              <p className="text-zinc-400 leading-8 text-lg">
                I create immersive audio experiences for film,
                media, and digital content.
                My focus is emotional storytelling through sound design.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {["FL Studio", "Bandlab", "Premiere Pro"].map((tool) => (

                  <span
                    key={tool}
                    className="
                      px-4 py-2 rounded-full
                      bg-white/5
                      border border-white/10
                      text-zinc-300
                      hover:border-purple-500/30
                      hover:bg-white/10
                      transition
                    "
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </section>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <section className="py-32 px-6 max-w-7xl mx-auto">

          <div className="mb-16 flex items-end justify-between">

            <div>

              <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-4">
                Portfolio
              </p>

              <h2 className="text-5xl font-bold">
                Selected Works
              </h2>

            </div>

            <a
              href="/projects"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              View All →
            </a>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Beat Matching",
                tag: "Audio Mix",
              },

              {
                title: "Dubbing Scene",
                tag: "Film Audio",
              },

              {
                title: "Cut-up Experiment",
                tag: "Sound Design",
              },

            ].map((item, i) => (

              <motion.a
                key={i}
                href="/projects"
                whileHover={{ scale: 1.04 }}
                className="
                  group relative rounded-3xl overflow-hidden
                  border border-white/10
                  bg-white/5 hover:bg-white/10
                  transition duration-500
                "
              >

                <div className="
                  h-[300px]
                  bg-gradient-to-br
                  from-purple-600/20
                  via-black
                  to-blue-600/20
                  relative
                ">

                  <div className="
                    absolute top-4 left-4
                    text-xs px-3 py-1 rounded-full
                    bg-black/60
                    border border-white/10
                    text-zinc-300
                  ">
                    {item.tag}
                  </div>

                  <div className="
                    absolute inset-0
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    backdrop-blur-sm
                    transition duration-500
                  ">

                    <p className="tracking-[0.3em] text-zinc-300 text-sm">
                      ENTER EXPERIENCE
                    </p>

                  </div>

                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </motion.a>

            ))}

          </div>

        </section>
      </Reveal>

      {/* FOOTER */}
      <div className="mt-20">
        <Footer />
      </div>

    </main>
  );
}