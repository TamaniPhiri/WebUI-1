import './App.css'
import  NavBar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Statistic from './Components/Statistic'
import Team from './Components/Team'
import Feature from './Components/Feature'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'


function App() {


  return (
    <div className=' items-center justify-center'>
      <NavBar/>
      <HeroSection/>
      <Statistic/>
      <Team/>
      <Feature/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
