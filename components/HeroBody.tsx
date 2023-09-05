import Link from "next/link";

const HeroBody = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center space-y-6 sm:space-y-0 md:space-x-6 pt-10">
      <div className="text-center sm:text-left md:text-left mx-auto sm:mx-4 md:mx-0">
        <p className="m-0 text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold tracking-wider leading-tight text-tomato [text-shadow:58px_213px_62px_rgba(0,_0,_0,_0.01),_37px_136px_56px_rgba(0,_0,_0,_0.07),_21px_77px_48px_rgba(0,_0,_0,_0.25),_9px_34px_35px_rgba(0,_0,_0,_0.43),_2px_9px_19px_rgba(0,_0,_0,_0.49)]">
          Powering Progress
        </p>
        <p className="mb-8 text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold tracking-wider leading-tight text-tomato [text-shadow:58px_213px_62px_rgba(0,_0,_0,_0.01),_37px_136px_56px_rgba(0,_0,_0,_0.07),_21px_77px_48px_rgba(0,_0,_0,_0.25),_9px_34px_35px_rgba(0,_0,_0,_0.43),_2px_9px_19px_rgba(0,_0,_0,_0.49)]">
          Through Innovation
        </p>
        <Link
          href="#about"
          className="mt-12 mb-10 text-white border border-white hover:border-orange-700 hover:bg-orange-700 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Learn More
        </Link>
      </div>
      <div className="pl-0 sm:pl-4 md:pl-4 lg:pl-80">
        <img className="" alt="" src="/hero-vector.svg" />
      </div>
    </div>
  );
};

export default HeroBody;
