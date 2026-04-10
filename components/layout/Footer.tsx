"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white px-6 md:px-12 py-10 mt-20 border-t border-cyan-900">

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-cyan-400 font-bold text-lg">
            DNA DS Research Lab
          </h2>

          <p className="text-sm mt-2 text-cyan-200">
            Advancing biotechnology research and innovation.
          </p>

          {/* LOGO */}
          <img
            src="/logo.jpeg"
            alt="DNA DS Logo"
            className="mt-4 h-12 object-contain"
          />

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-4 text-cyan-300 text-lg">

            <a
              href="https://www.linkedin.com/in/drl-indore-7864033a8/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaFacebook />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>

          <ul className="text-sm text-cyan-200 space-y-2">

            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/coming-soon" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link href="/coming-soon" className="hover:text-cyan-400 transition">
                Team
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>

          <p className="text-sm text-cyan-200 leading-6">
            📧 drlindore25@gmail.com <br />
            📞 +91 9691528102 <br />
            📍 Indore, Madhya Pradesh
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-cyan-400 text-xs mt-8">
        © 2026 DNA DS Research Lab. All rights reserved.
      </p>
    </footer>
  );
}