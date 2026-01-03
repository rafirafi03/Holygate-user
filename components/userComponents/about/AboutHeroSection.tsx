import React from "react";

const AboutHeroSection = () => {
  return (
    <section
      className="relative min-h-[110vh] bg-cover bg-center flex items-center justify-end text-[#1a3c63]"
      style={{ backgroundImage: "url('/about-sabah.png')" }}
    >
      {/* Overlay (optional subtle fade on left for better contrast) */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/30 to-transparent"></div>

      {/* Text Content (aligned right side) */}
      <div className="relative z-10 w-full md:w-[55%] px-6 md:px-16 py-12 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#567C8D] mb-6 font-playfair font-semibold">
          About Sabah
        </h2>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-8 sm:leading-9">
          <span className="font-bold">Welcome to Vettoran Sabah Church</span> — a home of faith, fellowship, and purpose.
          We are a Christ-centered community in Sabah dedicated to serving God, strengthening families, and supporting our nation’s veterans and their loved ones.
          Our mission is to provide a place of healing, belonging, and spiritual growth for all who enter our doors.
          At Veterans Sabah Church, we honor the courage and sacrifices of those who have served by offering a ministry built on compassion, unity, and service.
          <br />
          <br />
          Through worship, discipleship, and outreach, we strive to live out the message of Jesus Christ —
          bringing hope to our members, our community, and beyond.
          Whether you are a veteran, a family member, or someone seeking a deeper connection with God,
          you are welcome here. Together, we walk in faith, serve with love, and build a stronger community rooted in Christ.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
