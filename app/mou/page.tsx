import { getMou } from "@/lib/api";

export default async function MouPage() {

  const mous = await getMou();

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">

      <h1 className="text-4xl text-cyan-400 mb-10">
        Collaborations
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {mous.map((m: any) => (
          <div
            key={m.id}
            className="bg-slate-900/60 backdrop-blur p-6 rounded-xl border border-cyan-500/10"
          >
            <img src={m.logo_url} className="h-16 mb-4" />

            <h3 className="text-white text-lg font-semibold">
              {m.organization_name}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {m.description}
            </p>

           <a
  href={`${m.document_url}?fl_attachment=false`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-4 inline-block hover:underline"
>
  View Document →
</a>
          </div>
        ))}

      </div>

    </div>
  );
}