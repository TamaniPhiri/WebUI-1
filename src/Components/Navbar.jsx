import { useState } from "react";
import Logo from "../assets/images/trowel.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleHome = () => {
    const home = document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    const services = document.getElementById("services");
    services.scrollIntoView({ behavior: "smooth" });
  };
  const handlePricing = () => {
    const pricing = document.getElementById("pricing");
    pricing.scrollIntoView({ behavior: "smooth" });
  };
  const handleTeam = () => {
    const team = document.getElementById("team");
    team.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <button
          onClick={handleHome}
          class="text-white no-underline hover:text-white hover:no-underline flex-row"
        >
          <img
            src={Logo}
            alt=""
            className=" h-10 hover:rotate-45 transition-all ease-in-out hover:scale-110 hover:rounded-lg"
          />
        </button>
      </div>

      <div class="block lg:hidden" onClick={handleMenu}>
        {open ? (
          <div>
            <button class="flex items-center px-3 py-2 transition-all ease-in-out rounded text-white hover:text-lime-400 hover:border-white ">
              <svg
                viewBox="0 0 470 1000"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
              </svg>
            </button>
            {open ? (
              <div
                id="menu"
                className="absolute top-[100%] right-0 w-1/2 shadow-2xl shadow-black"
              >
                <ul className="flex flex-col rounded-md h-screen bg-white gap-4">
                  <li>
                    <button className="flex w-full hover:bg-gray-200 py-1 px-2">
                      Home
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full hover:bg-gray-200 py-1 px-2">
                      Services
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full hover:bg-gray-200 py-1 px-2">
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full hover:bg-gray-200 py-1 px-2">
                      Team
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <button class="flex items-center px-3 py-2 transition-all ease-in-out rounded text-white hover:text-lime-400 hover:border-white ">
            <svg
              class="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
      </div>

      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <button
              onClick={handleHome}
              class="inline-block py-2 px-4 text-white no-underline transition-all ease-in-out hover:text-lime-400 w-full"
              href="#"
            >
              Home
            </button>
          </li>
          <li class="mr-3">
            <button
              onClick={handleServices}
              class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full"
              href="#"
            >
              Services
            </button>
          </li>
          <li class="mr-3">
            <button
              onClick={handlePricing}
              class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full"
              href="#"
            >
              Pricing
            </button>
          </li>
          <li class="mr-3">
            <button
              onClick={handleTeam}
              class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full"
              href="#"
            >
              Team
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
