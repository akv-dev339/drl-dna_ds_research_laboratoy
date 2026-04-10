"use client";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();

  const services = [
    "DNA Sequencing",
    "Bioinformatics",
    "Molecular Diagnostics",
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-white text-center">

      <h2 className="text-3xl font-bold text-[#020617]">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => router.push("/services")}
            className="cursor-pointer bg-gray-50 p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition border border-gray-200 hover:border-cyan-400"
          >
            <h3 className="font-bold text-lg text-cyan-700">
              {service}
            </h3>

            <p className="text-sm mt-2 text-gray-600">
              Click to explore more →
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}