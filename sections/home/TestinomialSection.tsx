"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dr. Ankit Sharma",
    role: "Biotech Researcher",
    text: "DNA DS Research Lab provided exceptional support in our genomic analysis project. Their expertise and infrastructure are truly world-class.",
  },
  {
    name: "Priya Verma",
    role: "MSc Biotechnology Student",
    text: "The training programs here helped me gain real lab experience. The mentors are highly knowledgeable and supportive.",
  },
  {
    name: "Rahul Mehta",
    role: "Industry Partner",
    text: "We collaborated with DNA DS Lab for molecular diagnostics, and the results were accurate and delivered on time.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-[#020617] text-white py-16 px-6 md:px-16 text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        What People Say
      </h2>

      <div className="max-w-3xl mx-auto bg-cyan-900/20 backdrop-blur-md border border-cyan-800 p-8 rounded-xl shadow-lg transition-all duration-500">

        <p className="text-lg text-cyan-100 italic">
          “{t.text}”
        </p>

        <div className="mt-6">
          <h3 className="font-bold text-cyan-400">
            {t.name}
          </h3>
          <p className="text-sm text-cyan-200">
            {t.role}
          </p>
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-cyan-400" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}