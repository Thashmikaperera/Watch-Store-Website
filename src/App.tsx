import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black 
    text-black dark:text-white duration-200">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App