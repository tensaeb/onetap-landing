import React from "react";

interface AboutCardProps {
  title: string;
  body: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, body }) => {
  return (
    <div className=" text-justify">
      <p className="text-orange-600 font-black text-center">{title}</p>
      <p className="text-sm font-light my-3">{body}</p>
    </div>
  );
};

export default AboutCard;
