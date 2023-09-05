import React from "react";

const ClientCorousel = () => {
  return (
    <div id="controls-carousel" className="w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/clients/addis-chamber.png"
            className="absolute block w-15 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCorousel;
