"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {

  const sections = [
    {
      title: "Academic & Research Support",
      items: [
        "Project work & internships for B.Sc., M.Sc., and Ph.D. students",
        "Thesis & dissertation guidance (writing, formatting, and editing)",
        "Research article support — from conceptualization to publication",
        "Complete Ph.D. support (topic selection, experimental design, analysis, thesis, publication, presentation)",
      ],
    },
    {
      title: "Training & Skill Development",
      items: [
        "Short-term & long-term certificate courses",
        "Workshops & hands-on training programs",
        "Presentation preparation & delivery coaching",
        "Coaching for competitive exams (NEET & NET)",
      ],
    },
    {
      title: "Technical & Analytical Services",
      items: [
        "Sample analysis across Life Sciences, Biotechnology, Chemistry, Physics, Forensics, Engineering & more",
        "Advanced laboratory tools and multidisciplinary expertise",
        "Plagiarism checking using iThenticate (original software)",
      ],
    },
    {
      title: "Intellectual Property & Publications",
      items: [
        "Patent filing support (proposal to submission)",
        "Copyright registration guidance",
        "Scientific writing & publication support",
      ],
    },
    {
      title: "Global Academic & Professional Support",
      items: [
        "Support for M.S., Ph.D., and Postdoctoral opportunities abroad",
        "Visa assistance for students and researchers",
        "Guidance for international academic pathways",
      ],
    },
    {
      title: "Events & Conferences",
      items: [
        "Organization of National & International Conferences",
        "Academic event planning and execution support",
      ],
    },
  ];

  return (
    // 🔥 FULL HEIGHT + NO WHITE SPACE
    <div className="bg-[#020617] min-h-screen w-full flex flex-col">

      {/* CONTENT */}
      <div className="pt-28 px-4 max-w-7xl mx-auto text-white flex-1 pb-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Our Services
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive scientific, academic, and research solutions tailored to empower innovation and excellence.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/10 
                         hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] 
                         hover:-translate-y-2 transition duration-300"
            >

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-cyan-400 mb-4">
                {section.title}
              </h2>

              {/* LIST */}
              <ul className="space-y-2 text-sm text-gray-300">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-400">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h2 className="text-2xl text-gray-300 mb-6">
            Ready to elevate your research journey?
          </h2>

          <button
            onClick={() => window.location.href = "/contact"}
            className="px-10 py-3 text-lg font-semibold rounded-lg 
                       bg-gradient-to-r from-cyan-500 to-teal-400 
                       text-black 
                       hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] 
                       transition duration-300"
          >
            Contact Us →
          </button>

        </div>

      </div>

    </div>
  );
}