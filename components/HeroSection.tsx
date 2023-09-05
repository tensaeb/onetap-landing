import HeroBody from "./HeroBody";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="relative bg-orange-600 w-full min-h-screen overflow-hidden">
      <NavBar />
      <HeroBody />
      <img
        className="absolute -bottom-24 left-0 w-full h-auto"
        alt=""
        src="/wave.svg"
      />
    </div>
  );
};

export default HeroSection;
