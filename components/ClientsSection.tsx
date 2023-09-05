import React from "react";
import ClientCorousel from "./ClientCorousel";

const ClientsSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center" id="clients">
        <div className="box-border border-b-3 border-solid border-orange-600 mb-12">
          <i className="text-5xl font-black text-orange-600">Our Key Clients</i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[url('/rectangle-3@2x.png')] w-full h-15 mb-48 p-20">
        <img src="/logos.svg" alt="logos" />
      </div>
    </div>
  );
};

export default ClientsSection;
