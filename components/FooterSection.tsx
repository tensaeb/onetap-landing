import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-black px-6 md:px-24 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-32">
        <div className="text-white flex flex-col items-center justify-center text-center">
          <img
            className="w-[40%] md:w-[30%]"
            src="/logo-or.png"
            alt="logo orange"
          />
          <p className="my-3">
            OneTap is a Financial Technology dedicated to empowering the
            community through Technology focus on Hospitality and service
            industries by providing innovative and convenient solutions.
          </p>
        </div>
        <div className="flex flex-col text-white items-center">
          <p>Follow us</p>
          <div className="flex flex-row gap-2 my-3">
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-instagramalt.svg"
            />
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-facebook.svg"
            />
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-twitter-square.svg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-7 text-white">
          <div className="flex flex-row gap-2">
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-alternate-phone.svg"
            />
            <p>+251 11 1 40-08-18</p>
          </div>
          <div className="flex flex-row gap-2">
            <img className="w-[25px] h-[25px]" alt="" src="/-icon-fax.svg" />
            <p>+251 11 1 40-08-18</p>
          </div>
          <div className="flex flex-row gap-3">
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-envelope.svg"
            />
            <p>info@onetap.et</p>
          </div>
          <div className="flex flex-row gap-3">
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/-icon-alternate-map-marker.svg"
            />
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="box-border border-t-[1px] border-solid border-white mt-10 md:mt-20" />
      <p className="text-sm text-white text-center py-3">
        © Copyright 2022, All Rights Reserved by OneTap
      </p>
    </footer>
  );
};

export default FooterSection;
