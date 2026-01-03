import React from "react";

const teamMembers = [
  { name: "Leader 1", image: "/leader1.jpg" },
  { name: "Leader 2", image: "/leader2.jpg" },
  { name: "Leader 3", image: "/leader3.jpg" },
  { name: "Leader 4", image: "/leader4.jpg" },
  { name: "Leader 5", image: "/leader5.jpg" },
  { name: "Leader 6", image: "/leader6.jpg" },
];

const LeadershipTeamSection = () => {
  return (
    <section className="bg-[#f9f6f2] py-16 text-center px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-[#2b4a60] mb-12">
        Our Leadership Team
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#527a8c] flex items-center justify-center text-white text-3xl font-bold mb-3">
              <img
                src={member.image || "/user-icon.png"}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 font-medium">{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeamSection;
