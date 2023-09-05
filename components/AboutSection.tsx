import React from "react";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <div className="mt-40" id="about">
      <div className="flex items-center justify-center">
        <div className="box-border border-b-3 border-solid border-orange-600">
          <i className="text-4xl sm:text-5xl font-black text-orange-600">
            About us
          </i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-6">
        <i className="text-sm sm:text-base md:text-sm lg:text-sm font-extralight text-center w-[70%]">
          At OneTap Technology, we are driven by a relentless passion for
          innovation, a commitment to excellence, and a vision of leveraging
          technology to transform industries. Established in 2019, OneTap
          Technology has rapidly evolved into a pioneering force in the realm of
          IT services, offering a wide spectrum of cutting-edge solutions that
          empower businesses to thrive in the digital age.
        </i>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-11 md:gap-10 lg:gap-10 w-[50%] mx-auto">
        <AboutCard
          title="Our Journey"
          body="Founded by visionary entrepreneur Asfaw Tamirat, OneTap Technology emerged from a simple yet powerful idea – to revolutionize how businesses harness technology for growth. What began as a humble endeavor in the Ethiopian technology landscape soon transformed into a dynamic force that has left an indelible mark on diverse industries."
        />
        <AboutCard
          title="Our Expertise"
          body="With over a decade of experience in the technology sector, particularly in the banking and telecommunications industries, our expertise runs deep. We have collaborated with major players in both domestic and foreign markets, holding key positions in digital payments, system integration, payment gateways, and customer experience."
        />
        <AboutCard
          title="Our commitment"
          body="At OneTap Technology, our commitment goes beyond delivering solutions; it's about creating transformative experiences. We understand that every business is unique, which is why we craft tailor-made solutions that address specific challenges and drive growth. Our core values of innovation, integrity, excellence, and collaboration serve as the guiding principles that shape every decision, interaction, and endeavor."
        />
        <AboutCard
          title="Our Vision"
          body="Our vision is rooted in a desire to be more than just an IT service provider. We envision ourselves as the driving force behind technological evolution, an organization that sets new standards, propels industries forward, and creates a lasting impact on communities. We are excited to introduce our upcoming service app, a testament to our dedication to innovation and user-centric solutions."
        />
      </div>
      <div className="flex flex-col items-center justify-center my-6 mb-20">
        <i className="text-sm sm:text-base md:text-sm lg:text-sm font-extralight text-center w-[70%]">
          At OneTap Technology, we invite you to be a part of our journey.
          Together, we can harness the boundless potential of technology to
          transform challenges into opportunities, reimagine industries, and
          create a future where innovation knows no limits. <br /> <br />
          Contact us to explore how our solutions can drive your business
          forward and join us in shaping the future of technology.
        </i>
      </div>
    </div>
  );
};

export default AboutSection;
