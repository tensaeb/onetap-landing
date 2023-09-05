import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="p-6 w-96 h-full bg-orange-500 text-white text-center rounded-3xl">
      <div className="flex flex-col items-center mt-[-50px]">
        <img className="mb-5" src={imageSrc} alt={`${title} icon`} />
        <h3 className="text-xl font-medium my-2">{title}</h3>
        <p className="text-sm my-4">{description}</p>
      </div>
      <button
        type="button"
        className="hover:text-gray-300 font-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        More
      </button>
    </div>
  );
};

export default ServiceCard;
