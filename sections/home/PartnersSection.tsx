"use client";

export default function PartnersSection() {
  const partners = [
    "/partner1.jpg",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 text-center overflow-hidden">

      <h2 className="text-3xl font-bold text-[#020617] mb-6">
        Our Collaborations
      </h2>

      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We collaborate with leading research institutions and industry partners to drive innovation in biotechnology.
      </p>

      {/* SLIDER */}
      <div className="partners-wrapper">
        <div className="partners-track">

          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-lg flex items-center justify-center p-4 border border-gray-200 hover:shadow-2xl transition">

                <img
                  src={logo}
                  alt="Partner"
                  className="w-full h-full object-contain rounded-full grayscale hover:grayscale-0 transition duration-300"
                />

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}