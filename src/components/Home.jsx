import avatar from "../assets/image/Avatar.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {

  const [active, setActive] = useState(false)

  const handleMouseIn =() => {
    setActive(true)
  }
  const handleMouseOut =() => {
    setActive(false)
  }

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div id="Home" className="grid md:grid-cols-2 grid-cols-1 md:mt-[90px] mt-5 font-Kanit dark:text-white">
      <div className="flex flex-col justify-between md:gap-0 gap-3">
        <h1 className="font-bold text-5xl md:text-7xl">Designing for Amazing People</h1>
        <h2 className="md:text-2xl md:w-[360px] w-[300px] font-semibold text-text-main">
          Hello, I’m Wisnadiputra im a Web Designer & Front-End Engineer
        </h2>
        <a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')} >
          <button onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="md:w-[195px] md:h-[62px] h-[40px] w-[120px] mb-1 bg-secondary rounded-full flex items-center justify-start gap-2 text-white md:text-2xl font-bold hover:scale-110 hover:text-black drop-shadow-lg relative text-center">
            <p className={`text-center w-max duration-300 ${active ? 'ml-4' : 'md:translate-x-[100%] translate-x-[75%]'}`}>Hire Me!</p>
            <div className={`bg-black dark:bg-white rounded-full md:h-[58px] md:w-[58px] h-[40px] w-[40px] flex items-center justify-center absolute z-10 duration-300 ${active ? 'md:translate-x-[236%] translate-x-[196%]' : ''}`}>
              <ArrowRight className="dark:text-black text-white" />
            </div>
          </button>
        </a>
        
      </div>
      <div className="flex md:justify-end justify-center relative">
        <img src={avatar} alt="Avatar" className="md:w-full w-[250px]" />
        <div className="absolute md:text-4xl font-bold bg-secondary md:px-[86px] md:py-5 px-12 py-3 z-10 rounded-full md:bottom-1 md:right-12 bottom-0 right-20 text-white">
          {'"Just be brave"'}
        </div>
      </div>
    </div>
  );
};

export default Home;
