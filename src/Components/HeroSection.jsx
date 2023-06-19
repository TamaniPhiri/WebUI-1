import Hero from "../assets/images/Hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="text-gray-600 body-font pt-12">
      <div className="container mx-auto flex md:px-12 px-4 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#1f2937]">
            Eco-friendly carbonless
            <br className="hidden lg:inline-block" /> readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed md:text-lg text-sm">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-[#1f2937] bg-lime-400 border-0 py-2 justify-center items-center px-4 focus:outline-none hover:bg-[#1f2937] hover:text-white transition-all ease-in-out rounded text-sm md:text-lg">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-8 text-sm focus:outline-none hover:bg-gray-200 rounded md:text-lg">
              Contact
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden hover:scale-105 transition-all ease-in-out">
          <img
            className="object-cover object-center rounded h-full w-full md:h-80  hover:shadow-xl"
            alt="hero"
            src={Hero}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
