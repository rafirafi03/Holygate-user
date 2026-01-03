import React from "react";
import { Search } from "lucide-react";

const FAQSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/faq-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          God Is With You Even On Your Hardest Days
        </h2>

        {/* Search Bar */}
        <div className="flex items-center bg-white/90 rounded-full overflow-hidden mb-10 p-1">
          <input
            type="text"
            placeholder="What do you want to know?"
            className="flex-1 px-4 py-2 text-gray-700 bg-transparent outline-none"
          />
          <button className="bg-[#2b4a60] px-4 py-2 rounded-full hover:bg-[#1a2f42] transition">
            <Search className="text-white" size={20} />
          </button>
        </div>

        {/* FAQs */}
        <div className="space-y-4 text-left">
          <p>• How can I join the community?</p>
          <p>• What are the church service timings?</p>
          <p>• Is there a special program for veterans?</p>
          <p>• How can I volunteer or contribute?</p>
          <p>• Are there online worship services?</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
