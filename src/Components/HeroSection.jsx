import React from 'react'
import Hero from '../assets/images/Hero.jpg'

const HeroSection = () => {
  return (
    <section class="text-gray-600 body-font pt-12">
        <div class="container mx-auto flex md:px-12 px-4 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#1f2937]">Before they sold out
                    <br class="hidden lg:inline-block"/> readymade gluten
                </h1>
                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center">
                    <button class="inline-flex text-[#1f2937] bg-lime-400 border-0 py-2 px-6 focus:outline-none hover:bg-[#1f2937] hover:text-white transition-all ease-in-out rounded text-lg">Get Started</button>
                    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden">
                <img class="object-cover object-center rounded h-full w-full md:h-80 hover:scale-110 hover:shadow-xl transition-all ease-in-out" alt="hero" src={Hero}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection