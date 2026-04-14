"use client";

import { useRouter } from "next/navigation";

export default function WhyChooseSection() {
  const router = useRouter();

  const points = [
    "Expert mentorship from experienced research professionals across multiple scientific disciplines",
    "End-to-end academic support — from project work to Ph.D. completion and publication",
    "Personalized guidance at every stage of research, including experimental design and data analysis",
    "Access to advanced laboratory facilities, analytical tools, and multi-disciplinary expertise",
    "Strong track record of successful theses, publications, and research outcomes",
    "Integrated support for patents, copyrights, and scientific writing",
    "Opportunities for hands-on training, workshops, and skill development programs",
    "Dedicated assistance for international opportunities (M.S., Ph.D., Postdoctoral fellowships & visa support)",
    "Experience in organizing national and international conferences and academic events",
    "Reliable plagiarism checking with iThenticate ensuring research integrity",
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#020617] text-white">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Why Choose DNA-DS?
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Delivering excellence in biotechnology through innovation, expertise, and impactful research support.
        </p>
      </div>

      {/* GRID LIST */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-slate-900/60 backdrop-blur p-5 rounded-xl border border-cyan-500/10 
                       hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition duration-300"
          >
            {/* ICON */}
            <span className="text-cyan-400 text-lg mt-1">✔</span>

            {/* TEXT */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {point}
            </p>
          </div>
        ))}

      </div>

      {/* CTA BUTTON */}
      <div className="mt-14 text-center">
        <button
          onClick={() => router.push("/services")}
          className="px-10 py-3 text-lg font-semibold rounded-lg 
                     bg-gradient-to-r from-cyan-500 to-teal-400 
                     text-black 
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] 
                     transition duration-300"
        >
          Explore Our Services →
        </button>
      </div>

    </section>
  );
}