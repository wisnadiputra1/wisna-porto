import Banner from "./components/Banner"
import Home  from "./components/Home"
import Main from "./components/Main"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div className=" md:block relative overflow-hidden md:overflow-auto ">
      <div className="md:mx-[416px] mx-4 ">
        <Navbar />
        <Home />
      </div>
      <Banner />
      <div className="md:mx-[416px] mx-4 md:mt-36 mt-16">
        <Main />
      </div>
    </div>
  )
}

export default App
