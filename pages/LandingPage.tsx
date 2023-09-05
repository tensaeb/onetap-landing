import { NextPage } from "next";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const LandingPage: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
