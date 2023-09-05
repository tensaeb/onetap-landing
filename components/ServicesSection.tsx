import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <>
      <div className="flex items-center justify-center" id="services">
        <div className="box-border border-b-3 border-solid border-orange-600 mb-12">
          <i className="text-5xl font-black text-orange-600">Services</i>
        </div>
      </div>

      <img
        className="h-96 w-full max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-12 -mt-20 mb-10 mx-4 sm:mx-6 md:mx-10 lg:mx-20">
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-12 mb-48 mx-4 sm:mx-6 md:mx-10 lg:mx-20">
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
        <div className="flex justify-center">
          <ServiceCard
            title="Contact Center Services"
            description="Our state-of-the-art contact center solutions redefine customer interactions. We enable businesses to foster meaningful connections, enhance response times, and elevate overall customer satisfaction. With our Contact Center Services, you can turn every interaction into an opportunity to build lasting relationships."
            imageSrc="/icon2.svg"
          />
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
