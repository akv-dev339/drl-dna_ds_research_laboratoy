"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Training", path: "/training" },
    { name: "Events", path: "/events" },
    { name: "MoU", path: "/mou" },
    { name: "Publications", path: "/publications" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#020617]/90 border-b border-cyan-900 px-6 md:px-12 py-4 flex justify-between items-center shadow-sm">

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <img
          src="/logo.jpeg"
          alt="logo"
          className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
        />

        <h1 className="text-lg md:text-xl font-bold text-cyan-400">
          DNA-DS Research Lab
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6 text-sm">

        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`relative transition duration-300 
              ${
                pathname === link.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
          >
            {link.name}

            {/* underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                ${
                  pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
            ></span>
          </Link>
        ))}

      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-cyan-400 text-xl cursor-pointer">
        ☰
      </div>
    </nav>
  );
}