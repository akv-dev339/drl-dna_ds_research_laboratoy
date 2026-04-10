export default function UpdatesBar() {
  const updates = [
    "New Research Programs Open",
    "Lab Services Available",
    "Apply Now for Training",
    "Advanced DNA Sequencing Available",
    "Collaborations Open for Institutions",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#020617] via-cyan-900 to-[#020617] text-white py-2 border-y border-cyan-800">

      {/* LEFT TAG */}
      <div className="absolute left-0 top-0 h-full flex items-center z-20">
        <div className="bg-red-600 px-4 py-1 text-xs font-bold flex items-center gap-2 animate-pulse">
          🔴 UPDATES
        </div>
      </div>

      {/* TICKER */}
      <div className="ml-[110px] overflow-hidden">
  <div className="ticker-wrapper">
    <div className="ticker-content">

      {[...updates, ...updates].map((text, index) => (
        <span key={index} className="flex items-center gap-2 text-cyan-200 px-5">
          
          <span className="text-red-500">●</span>
          {text}

        </span>
      ))}

    </div>
  </div>
</div>

    </div>
  );
}