"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  const handleEnter = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700/20 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-700/10 blur-[160px]" />
          </div>

          {/* SOUND BARS */}
          <div className="absolute bottom-20 flex gap-[4px] opacity-30">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] bg-white/40"
                animate={{
                  height: [20, 80, 40, 100, 30],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>

          {/* MAIN CONTENT */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10 px-6"
          >

            {/* NAME */}
            <h1 className="text-3xl md:text-5xl font-black tracking-[0.25em] leading-tight">
              LADY CHRYZSCHEL B. PRASMO
            </h1>

            {/* ROLE */}
            <p className="mt-7 text-zinc-500 tracking-[0.5em] text-xs md:text-sm">
              AUDIO ENGINEERING PORTFOLIO
            </p>

            {/* ENTER BUTTON */}
            <motion.button
              onClick={handleEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 rounded-full border border-white/20 text-white
              hover:bg-white hover:text-black transition-all duration-300 tracking-[0.3em]"
            >
              ENTER 
            </motion.button>

            {/* SMALL FOOTNOTE */}
            <p className="mt-8 text-zinc-600 text-xs tracking-[0.3em] animate-pulse">
              CLICK TO BEGIN
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}