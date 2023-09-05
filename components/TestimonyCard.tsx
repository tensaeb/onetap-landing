import React from "react";

interface TestimonyCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ name, role, text }) => {
  return (
    <div className="lg:w-[60%] sm-w-full md:w-full px-5 md:px-10 py-5 md:py-10 text-center md:text-justify">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/profile.svg"
          alt="profile"
          className="w-12 h-12 md:mr-3 mb-3 md:mb-0"
        />
        <div className="flex flex-col">
          <p className="text-lg">{name}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="pt-3">
        <i className="text-sm">{text}</i>
      </div>
    </div>
  );
};

export default TestimonyCard;
