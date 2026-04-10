import { getTraining } from "@/lib/api";

export default async function TrainingPage() {

  const trainings = await getTraining();

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">

      <h1 className="text-4xl text-cyan-400 mb-10">
        Training Programs
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {trainings.map((t: any) => (
          <div
            key={t.id}
            className="bg-slate-900/60 backdrop-blur rounded-xl p-5 border border-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition"
          >
            <img src={t.imageUrl} className="rounded-lg mb-4" />

            <h2 className="text-white text-xl font-semibold">
              {t.title}
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              {t.description}
            </p>

            <div className="mt-4 text-sm text-cyan-400">
              {t.duration} | ₹{t.cost}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}