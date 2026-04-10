"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.img
          src="/lab.jpg"
          alt="Lab"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl shadow-lg w-full"
        />

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#020617]">
            About DNA DS Research Lab
          </h2>

          <p className="mt-6 text-gray-600">
            DNA DS Research Lab is dedicated to advancing biotechnology through
            cutting-edge research, molecular diagnostics, and bioinformatics.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Advanced DNA Sequencing</li>
            <li>✔ Bioinformatics Analysis</li>
            <li>✔ Molecular Diagnostics</li>
            <li>✔ Industry Collaboration</li>
          </ul>

          <button className="mt-6 bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition">
            Learn More →
          </button>
        </motion.div>

      </div>

    </section>
  );
}