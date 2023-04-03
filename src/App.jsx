import './App.css'
import  NavBar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Statistic from './Components/Statistic'
import Team from './Components/Team'


function App() {


  return (
    <div className=' items-center justify-center'>
      <NavBar/>
      <HeroSection/>
      <Statistic/>
      <Team/>
    </div>
  )
}

export default App
