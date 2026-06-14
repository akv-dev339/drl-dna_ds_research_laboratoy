"use client";

import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <div className="bg-[#020617] min-h-screen w-full flex flex-col">

      <div className="pt-28 px-4 max-w-5xl mx-auto text-white flex-1 pb-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            From the Desk of the Director
          </h1>

          <p className="text-gray-400 mt-4">
            DNA-DS Research Laboratory (DRL), Indore
          </p>
        </motion.div>

        {/* DIRECTOR CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-cyan-500/10 
                     shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >

          {/* OPTIONAL IMAGE */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">

            <img
              src="/director.jpeg" // 👉 replace with actual image if available
              alt="Director"
              className="w-40 h-40 object-cover rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            />

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-cyan-400">
                Mrs. Priyanka Verma
              </h2>

              <p className="text-gray-400 mt-1">
                Director, DNA-DS Research Laboratory
              </p>
            </div>

          </div>

          {/* MESSAGE */}
          <div className="space-y-5 text-gray-300 leading-relaxed text-[15px]">

            <p>
              At DNA-DS Research Laboratory, our vision is to create a dynamic and innovative ecosystem that nurtures scientific excellence, critical thinking, and research-driven growth. We are committed to empowering students, scholars, and professionals by providing comprehensive academic and research support across diverse scientific disciplines.
            </p>

            <p>
              Our laboratory serves as a one-stop solution for aspiring researchers—from foundational project work to advanced Ph.D. guidance and international academic opportunities. With expert mentorship, state-of-the-art laboratory facilities, and personalized support at every stage, we strive to ensure that each individual achieves their academic and professional goals with confidence and competence.
            </p>

            <p>
              We take pride in our structured approach to research, which includes guidance in experimental design, data analysis, scientific writing, and publication in reputed journals. Additionally, our services extend to intellectual property support, including patent and copyright filing, ensuring that innovation is protected and recognized.
            </p>

            <p>
              At DNA-DS, we strongly emphasize skill development through hands-on training programs, workshops, and certification courses, preparing students for both academic and industrial challenges. Our commitment to research integrity is reflected in our use of authentic tools like iThenticate for plagiarism checking.
            </p>

            <p>
              We also facilitate global academic exposure by supporting students in pursuing M.S., Ph.D., and postdoctoral opportunities abroad, along with visa assistance and international conference engagement.
            </p>

            <p className="italic text-cyan-300">
              I warmly invite students, researchers, and academic professionals to collaborate with us, explore new frontiers of knowledge, and contribute to impactful scientific advancements.
            </p>

            <p className="font-semibold text-white mt-6">
              Let us innovate, investigate, and inspire—together.
            </p>

          </div>

          {/* SIGNATURE */}
          <div className="mt-10 text-right">
            <p className="text-cyan-400 font-semibold">
              Mrs. Priyanka Verma
            </p>
            <p className="text-gray-400 text-sm">
              Director, DNA-DS Research Laboratory (DRL), Indore
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  );
}