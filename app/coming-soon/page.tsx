"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-white">

      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-green-950 opacity-90" />

      {/* 🔵 Glow Blobs */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >

        {/* LOGO */}
        <img
          src="/logo.jpeg"
          alt="logo"
          className="mx-auto w-20 mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        />

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Coming Soon
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          We are building something innovative at DNA-DS Research Laboratory.  
          Stay tuned for cutting-edge biotechnology advancements.
        </p>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-cyan-400 mx-auto my-6 opacity-60" />

        {/* CONTACT */}
        <p className="text-sm text-gray-500">
          📧 drlindore25@gmail.com <br />
          📞 +91 9691528102
        </p>

      </motion.div>
    </div>
  );
}