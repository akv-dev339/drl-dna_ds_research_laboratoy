export default function TopBar() {
  return (
    <div className="bg-[#020617] text-cyan-300 text-xs md:text-sm border-b border-cyan-900">

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

        {/* LEFT */}
        <span className="text-center md:text-left">
          Registered No: INDO141229SE019665
        </span>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 text-center md:text-right">
          <span>📧 drlindore25@gmail.com</span>
          <span>📞 +91-9691528102</span>
        </div>

      </div>

    </div>
  );
}