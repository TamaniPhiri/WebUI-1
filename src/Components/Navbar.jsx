import React from 'react'
import Logo from '../assets/images/trowel.png'




const NavBar = () => {



    document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden")}

  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a class="text-white no-underline hover:text-white hover:no-underline flex-row" href="#">
          <img src={Logo} alt="" className=' h-10 hover:rotate-45 transition-all ease-in-out hover:scale-110 hover:rounded-lg'/>
        </a>
      </div>

      <div class="block lg:hidden">
        <button id="nav-toggle" class="flex items-center px-3 py-2 transition-all ease-in-out rounded text-white hover:text-lime-400 hover:border-white ">
          <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a class="inline-block py-2 px-4 text-white no-underline transition-all ease-in-out hover:text-lime-400 w-full" href="#">Home</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full" href="#">Services</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full" href="#">About</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-white no-underline transition-all ease-in-out hover:text-lime-400 hover:text-underline py-2 px-4 w-full" href="#">Pricing</a>
          </li>
        </ul>
      </div>
	  </nav>
  
  )
}

export default NavBar