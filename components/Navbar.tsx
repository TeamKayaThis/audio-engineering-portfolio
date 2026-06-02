"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/50 border-b border-white/10">

      {/* glow line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* LEFT LINKS */}
        <div className="hidden md:flex items-center gap-10 text-base">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CENTER LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-[0.45em] hover:opacity-70 transition"
        >
          LP
        </Link>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex items-center gap-10 text-base">
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}