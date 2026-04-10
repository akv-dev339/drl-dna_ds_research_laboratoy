"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/coming-soon" },
    { name: "Services", path: "/coming-soon" },
    { name: "Team", path: "/coming-soon" },
    { name: "Training", path: "/training" },
    { name: "Events", path: "/events" },
    { name: "MoU", path: "/mou" },
    { name: "Publications", path: "/coming-soon" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#020617]/90 border-b border-cyan-900 px-6 md:px-12 py-4 shadow-sm">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-lg md:text-xl font-bold text-cyan-400">
            DNA-DS Research Lab
          </h1>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`transition ${
                pathname === link.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden text-cyan-400 text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-slate-900/90 backdrop-blur-lg p-4 rounded-xl border border-cyan-500/10">

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`text-sm ${
                pathname === link.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}