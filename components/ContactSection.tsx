import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-32 mb-32" id="contact">
      <div className="flex items-center justify-center" id="clients">
        <div className="flex items-center justify-center" id="testimonials">
          <div className="box-border border-b-3 border-solid border-orange-600 mb-12">
            <i className="text-5xl font-black text-orange-600">Contact Us</i>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-20 mt-6 md:mt-12">
        <ContactForm />
        <img
          className="w-[80%] h-[auto] md:w-[30%] md:h-[40%]"
          src="/image@2x.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactSection;
