import React from "react";
import TestimonyCard from "./TestimonyCard";

interface Testimony {
  name: string;
  role: string;
  text: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonies: Testimony[] = [
    {
      name: "Aman Samir",
      role: "cooperative bank of Oromia, VP ",
      text: "Working with OneTap Technology has been a game-changer for our business. Their innovative solutions have transformed the way we engage with our customers, and their exceptional customer support is truly commendable.",
    },
    {
      name: "Mitiku Murezeha",
      role: "Director, Digital Banking Technology Department",
      text: "The OneInsurance solution has revolutionized our communication with policyholders. The personalized voice calls and SMS alerts have significantly improved transparency and customer satisfaction.",
    },
    {
      name: "Anonymous",
      role: "Anonymous",
      text: "OneTap Technology's Core Banking solution for microfinance has streamlined our operations and enabled us to serve our clients more effectively. Their expertise in the industry is evident in the excellence of their services.",
    },
    {
      name: "Anonymous",
      role: "Anonymous",
      text: "The Contact Center Services provided by OneTap Technology have exceeded our expectations. Their team's responsiveness and dedication to delivering exceptional customer interactions have elevated our customer service to new heights.",
    },
  ];

  return (
    <div className="mb-10 md:mb-20 lg:mb-32">
      <div className="flex items-center justify-center" id="testimonials">
        <div className="box-border border-b-3 border-solid border-orange-600 mb-6 md:mb-10">
          <i className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-600">
            Testimonials
          </i>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-8 justify-center">
        <i className="font-black text-sm sm:text-base md:text-lg lg:text-xl">
          Client Testimonials: What Our Partners Say
        </i>
        <i className="text-xs sm:text-sm md:text-base lg:text-lg">
          Discover what our valued partners have to say about their experiences
          working with OneTap Technology:
        </i>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-0 mt-5 md:mt-5 lg:mt-5">
        {testimonies.map((testimony, index) => (
          <div className="flex justify-center" key={index}>
            <TestimonyCard
              name={testimony.name}
              role={testimony.role}
              text={testimony.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
