import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function NearbyChurches() {
  const churches = [
    {
      image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&q=80",
      name: "Holy Spirit Church",
      distance: "2.5 km away",
      liveEvent: "Live Now: Morning Dhyanam",
      timing: "10:00 AM - 11:30 AM"
    },
    {
      image: "https://images.unsplash.com/photo-1581368087049-b91a2d7d6e88?w=800&q=80",
      name: "Holy Spirit Church",
      distance: "2.5 km away",
      liveEvent: "Live Now: Morning Dhyanam",
      timing: "10:00 AM - 11:30 AM"
    },
    {
      image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80",
      name: "Holy Spirit Church",
      distance: "2.5 km away",
      liveEvent: "Live Now: Morning Dhyanam",
      timing: "10:00 AM - 11:30 AM"
    },
    {
      image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80",
      name: "Holy Spirit Church",
      distance: "2.5 km away",
      liveEvent: "Live Now: Morning Dhyanam",
      timing: "10:00 AM - 11:30 AM"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-2 sm:mb-3">
              Nearby Churches
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              stories of faith and divine intervention
            </p>
          </div>
          
          <a
            href="#"
            className="flex items-center gap-2 text-black hover:text-gray-400 font-medium text-sm sm:text-base whitespace-nowrap transition-colors group mt-1"
          >
            <span className="hidden sm:inline">See all</span>
            <span className="sm:hidden">All</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Churches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
          {churches.map((church, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={church.image}
                  alt={church.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Church Name and Get Direction Button */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 flex-1 pr-4">
                    {church.name}
                  </h3>
                  <button className="flex-shrink-0 px-4 py-2 border-2 border-indigo-900 text-indigo-900 rounded-lg font-medium text-sm hover:bg-indigo-950 hover:text-white transition-colors duration-300 whitespace-nowrap cursor-pointer">
                    Get Direction
                  </button>
                </div>

                {/* Distance */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{church.distance}</span>
                </div>

                {/* Live Event */}
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium">{church.liveEvent}</span>
                </div>

                {/* Timing */}
                <div className="text-gray-700 text-sm sm:text-base pl-6">
                  {church.timing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}