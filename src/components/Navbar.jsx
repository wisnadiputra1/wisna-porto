import { Sun, X, Menu, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [fixed, setFixed] = useState(false)
    const html = document.documentElement;
    

    useEffect(()=>{
        const nav = document.getElementById('nav');
        const fixednav = nav.offsetTop;
        const handleScroll = () => {
            if(window.pageYOffset > fixednav){
                setFixed(true)
            }else{
                setFixed(false)
            }
        }
       window.addEventListener('scroll', handleScroll)
    },[])
    

   const handleToggle = () => {
      setActive(true);
    }

    const handleToggleOff = () => {
        setActive(false);
    }

    const handleTheme = () => {
        if(isActive === true){
            setIsActive(false)
            html.classList.remove('dark')
        }else{
            setIsActive(true)
            html.classList.add('dark')
        }
    }

  return (
    <div id='nav' className={`grid grid-cols-2 py-4 font-Kanit w-full ${fixed ? 'navbar-fixed top-0 left-0 right-0 px-4 md:px-[416px]' : ''} dark:text-white`}>
        <div className='flex items-center justify-between '>
            <h2 className='font-bold text-[24px] ' >Wisna</h2>
            <ul className={`flex md:items-center md:translate-x-0 md:relative  md:h-full h-screen w-1/2 md:w-max md:bg-transparent bg-white dark:bg-black md:drop-shadow-none drop-shadow-lg md:justify-around justify-around items-center md:space-x-8 md:flex-row flex-col absolute md:z-0 z-20 top-0 right-0 md:top-0 md:right-auto duration-1000 md:duration-0 ${active ? 'translate-x-0' : 'translate-x-[100%] '}`}>
                <button type='button' className='block md:hidden'><X onClick={handleToggleOff} /></button>
                <a href="#Home" onClick={handleToggleOff}><li>Home</li></a>
                <a href="#Skills" onClick={handleToggleOff}><li>Skills</li></a>
                <a href="#Projects" onClick={handleToggleOff}><li>Projects</li></a>
                <a href="#Contact" onClick={handleToggleOff}><li>Contact</li></a>
                
            </ul>
        </div>
        <div className='flex justify-end gap-5'>
            <button className='md:hidden' onClick={handleToggle}><Menu /></button>
            <button type='button' onClick={handleTheme} className='w-[52px] h-[30px] bg-secondary rounded-full cursor-pointer'>
                <div className={`w-max ${isActive ? 'translate-x-[100%] transition-transform duration-500': 'translate-x-[0] duration-500'}`}>
                {
                    isActive ? <Moon color='#ffffff' className={`rounded-full transition bg-black p-1 mr-[3px]` } /> : <Sun color="#FFCA0F" className={`rounded-full bg-zinc-100 p-1 ml-[3px]`} />
                }
                </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar