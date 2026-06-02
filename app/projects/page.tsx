"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  desc: string;
  tag: string;
  type: "audio" | "video" | "youtube";
  src: string;
  featured?: boolean;
};

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Strings of Serenity",
      desc: "An original audio production exploring atmosphere, emotion, and musical storytelling through layered sound design and composition.",
      tag: "Featured Project",
      type: "video",
      src: "/video/test.mp4",
      featured: true,
    },
    {
      title: "Beat Matching",
      desc: "This project highlights my ability to synchronize tracks seamlessly.",
      tag: "Mix Audio",
      type: "audio",
      src: "/audio/BeatMatching.mp3",
    },
    {
      title: "Cut-up",
      desc: "Explored cut-up techniques to reshape existing audio.",
      tag: "Sin City",
      type: "audio",
      src: "/audio/CUTUP.mp3",
    },
    {
      title: "Dubbing",
      desc: "Voice and sound synchronization for multimedia storytelling.",
      tag: "Moana's Grandma",
      type: "youtube",
      src: "vs3KmJpBPeE",
    },
    {
      title: "Mashup",
      desc: "Blending multiple tracks into one cohesive mix.",
      tag: "Eenie Meenie x Beauty and a Beat x We Found Love",
      type: "audio",
      src: "/audio/MASHUP.mp3",
    },
    {
      title: "Medley",
      desc: "Smooth transitions with consistent energy flow.",
      tag: "Mundo x Raining in Manila x Your Name",
      type: "audio",
      src: "/audio/MEDLEY.mp3",
    },
    {
      title: "Remix",
      desc: "Re-imagined tracks with modern production techniques.",
      tag: "Counting Stars",
      type: "audio",
      src: "/audio/REMIX.mp3",
    },
  ];

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const regularProjects = projects.filter(
    (project) => !project.featured
  );

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelected(null);
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#05010a] to-black" />

        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/30 blur-[200px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/25 blur-[200px] animate-pulse" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 blur-[200px]" />
      </div>

      {/* HEADER */}
      <div className="px-6 py-32 text-center">
        <p className="uppercase tracking-[0.5em] text-zinc-500 text-xs">
          Portfolio
        </p>

        <h1 className="text-6xl md:text-7xl font-black mt-6">
          My Sound Works
        </h1>

        <p className="text-zinc-400 mt-8 max-w-2xl mx-auto text-lg leading-8">
          Click any project to experience cinematic audio, sound design, and music production works.
        </p>
      </div>

    {featuredProject && (
  <section className="max-w-7xl mx-auto px-6 mb-24">
    <div
      onClick={() => setSelected(featuredProject)}
      className="
        group
        cursor-pointer
        rounded-[40px]
        overflow-hidden
        border border-purple-500/20
        bg-gradient-to-br
        from-purple-500/10
        via-black
        to-blue-500/10
        hover:border-purple-500/40
        transition
      "
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">

          <span
            className="
              w-fit
              px-4 py-2
              rounded-full
              bg-purple-500/20
              border border-purple-500/20
              text-purple-300
              text-xs
              uppercase
              tracking-[0.3em]
            "
          >
            Featured Project
          </span>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-black mt-8 leading-tight">
            {featuredProject.title}
          </h2>

          <p className="text-zinc-400 mt-8 leading-8 max-w-xl">
            {featuredProject.desc}
          </p>

          <div className="mt-10">
            <span className="inline-flex items-center gap-2 text-sm text-zinc-300">
              ▶ Play Project
            </span>
          </div>

        </div>

        {/* RIGHT SIDE - PORTRAIT PREVIEW */}
<div className="flex justify-center items-center p-8">

  <div
    className="
      relative
      w-[220px]
      md:w-[250px]
      aspect-[9/16]
      rounded-[32px]
      overflow-hidden
      border border-white/10
      shadow-[0_0_80px_rgba(168,85,247,0.25)]
      group-hover:scale-[1.03]
      transition duration-500
    "
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={featuredProject.src} type="video/mp4" />
    </video>

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* text */}
    <div className="absolute bottom-0 left-0 right-0 p-6">

      <p className="text-zinc-400 text-sm mt-2">
        Original Audio Production
      </p>

    </div>

  </div>

</div>

      </div>
    </div>
  </section>
)}

<div className="max-w-7xl mx-auto px-6 mb-10">
  <h2 className="text-3xl font-bold">
    Other Audio Projects
  </h2>

  <p className="text-zinc-500 mt-2">
    Collection of mixing, editing, dubbing, remixing, and sound production exercises.
  </p>
</div>

      {/* GRID */}
      <div className="px-6 pb-40 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {regularProjects.map((project, i) => (
          <div
            key={i}
            onClick={() => setSelected(project)}
            className="
              group
              cursor-pointer
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-white/5
              hover:bg-white/10
              hover:-translate-y-2
              hover:border-purple-500/30
              transition-all
              duration-500
              "
          >

            <div className="h-60 relative bg-gradient-to-br from-purple-500/10 via-black to-blue-500/10">

              <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-300">
                {project.tag}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-6xl">
                {project.type === "audio"
                  ? "🎵"
                  : project.type === "youtube"
                  ? "🎬"
                  : "🎥"}
              </div>
                <div className="px-6 py-2 border border-white/30 rounded-full text-sm tracking-wide animate-pulse">
                  ▶ Play Experience
                </div>
              </div>

            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold group-hover:text-white transition">
                {project.title}
              </h2>

              <p className="text-zinc-400 mt-2 text-sm leading-6">
                {project.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
{selected && (
  <div
    onClick={() => setSelected(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
  >
    {/* Glow Background */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/30 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/30 blur-[180px]" />
    </div>

    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-xs tracking-[0.5em] text-zinc-400 uppercase">
          Now Playing
        </p>

        <h2 className="text-3xl md:text-5xl font-black mt-4">
          {selected.title}
        </h2>

        <p className="text-zinc-500 mt-3 text-sm">
          {selected.tag}
        </p>
      </div>

      

     {/* Content */}
<div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl p-6 flex justify-center">

  {selected.type === "audio" ? (

    <div className="w-full max-w-2xl">
      <div className="mb-6 text-center">
        <div className="text-6xl mb-4">🎵</div>

        <h3 className="text-xl font-semibold">
          {selected.title}
        </h3>

        <p className="text-zinc-500 mt-2">
          Audio Engineering Project
        </p>
      </div>

      <audio controls autoPlay className="w-full">
        <source src={selected.src} />
      </audio>
    </div>

  ) : selected.type === "youtube" ? (

    <div className="w-full max-w-4xl">
      <div className="mb-6 text-center">
        <div className="text-6xl mb-4">🎬</div>

        <h3 className="text-xl font-semibold">
          {selected.title}
        </h3>

        <p className="text-zinc-500 mt-2">
          Dubbing & Voice Synchronization Project
        </p>
      </div>

      <div className="aspect-video overflow-hidden rounded-3xl border border-white/10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${selected.src}`}
          title={selected.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>

  ) : (

    <div className="w-full flex justify-center items-center">
      <video
        controls
        autoPlay
        className="
          max-h-[60vh]
          w-auto
          max-w-full
          rounded-3xl
          object-contain
        "
      >
        <source src={selected.src} type="video/mp4" />
      </video>
    </div>

  )}

</div>

      {/* Exit */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setSelected(null)}
          className="
            px-6
            py-2
            rounded-full
            border
            border-white/20
            text-sm
            text-zinc-300
            hover:bg-white
            hover:text-black
            transition
          "
        >
          Exit
        </button>
      </div>
    </div>
  </div>
)}

      {/* FOOTER (FIXED SPACING) */}
      <div className="mt-40">
        <Footer />
      </div>

    </main>
  );
}