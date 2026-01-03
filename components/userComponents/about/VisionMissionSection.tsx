import React from "react";

const VisionMissionSection = () => {
  return (
    <section className="bg-[#f9f6f2] py-16 px-6 md:px-20 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Vision */}
        <div className="md:w-1/2">
          <img
            src="/vision.jpg"
            alt="Vision"
            className="rounded-lg shadow-md w-full md:w-[80%] mx-auto"
          />
        </div>

        <div className="md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2b4a60] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to build a Christ-centered community where love,
              unity, and faith guide every action. We aim to create a church
              that reaches hearts, strengthens families, and uplifts the
              community through compassion and service.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2b4a60] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to share the message of Jesus Christ, inspire
              hope, and provide spiritual support to veterans and families.
              We are dedicated to serving with humility, guiding with love,
              and nurturing faith in every soul we encounter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
