import { getEvents } from "@/lib/api";

export default async function EventsPage() {

  const events = await getEvents();

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Events
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {events.map((event: any) => (
          <div
            key={event.id}
            className="bg-slate-900/60 backdrop-blur border border-cyan-500/10 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <img
              src={event.imageUrl}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl text-white font-semibold">
                {event.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {event.description}
              </p>

              <p className="text-cyan-400 mt-3 text-sm">
                {event.eventDate}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}