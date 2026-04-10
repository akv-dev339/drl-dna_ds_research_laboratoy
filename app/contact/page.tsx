"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-28 px-4 max-w-6xl mx-auto text-white">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="text-gray-400 mt-4">
          Reach out to DNA-DS Research Laboratory for collaborations, training, or inquiries
        </p>
      </motion.div>

      {/* MAIN CARD */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >

          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            DNA-DS Research Laboratory (DRL)
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>
              <span className="text-cyan-400 font-medium">📍 Address:</span><br />
              LB32 Nalanda Parisar, Kesar Bagh Road, Indore
            </p>

            <p>
              <span className="text-cyan-400 font-medium">🧾 Registration No:</span><br />
              INDO141229SE019665
            </p>

            <p>
              <span className="text-cyan-400 font-medium">📞 Contact:</span><br />
              +91-9691528102
            </p>

            <p>
              <span className="text-cyan-400 font-medium">✉ Email:</span><br />
              <a
                href="mailto:drlindore25@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                drlindore25@gmail.com
              </a>
            </p>

          </div>

        </motion.div>

        {/* RIGHT - LOGO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >

          <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/10 shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:scale-105 transition duration-300">

            <img
              src="/logo.jpeg"
              alt="DNA-DS Logo"
              className="w-48 mx-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            />

          </div>

        </motion.div>

      </div>

      {/* OPTIONAL CONTACT FORM */}
      {/* <div className="mt-20">

        <h2 className="text-2xl text-cyan-400 mb-6 text-center">
          Send a Message
        </h2>

        <form className="max-w-3xl mx-auto grid gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-900/60 border border-cyan-500/10 p-3 rounded-lg outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-slate-900/60 border border-cyan-500/10 p-3 rounded-lg outline-none focus:border-cyan-400"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-slate-900/60 border border-cyan-500/10 p-3 rounded-lg outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

      </div> */}

    </div>
  );
}