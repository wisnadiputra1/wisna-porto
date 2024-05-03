import vector from '../assets/image/skills.png'
import icon1 from '../assets/icon/react.svg'
import icon2 from '../assets/icon/typescript.svg'
import icon3 from '../assets/icon/tailwindcss.svg'
import icon4 from '../assets/icon/git.svg'
import icon5 from '../assets/icon/nextdotjs.svg'
import icon6 from '../assets/icon/figma.svg'

const Skills = () => {
  return (
    <div className=" font-Kanit dark:text-white md:grid md:grid-cols-2 md:gap-10" id='Skills'>
        <div className='flex flex-col gap-5 md:gap-10'>
            <h1 className="font-bold text-5xl md:text-7xl">Skills & Experience</h1>
            <p className='text-text-main font-medium md:text-2xl'>As a frontend engineer, I specialize in crafting engaging and user-centric web experiences through a combination of technical expertise and creative problem solving.</p>
            <div className='mt-24 flex flex-col gap-10'>
                <h2 className='font-bold text-xl md:text-2xl'>Skills</h2>
                <ul className='flex w-full flex-wrap gap-8 items-center justify-center md:justify-normal text-center text-sm font-medium md:w-[400px] md:gap-16 '>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max'>
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon1} alt="React" /></li>
                        <p>React</p>
                    </div>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max' >
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon2} alt="Typescript" /></li>
                        <p>Typescript</p>
                    </div>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max'>
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon3} alt="Tailwindcss" /></li>
                        <p>Tailwind</p>
                    </div>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max'>
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon4} alt="Git" /></li>
                        <p>Git</p>
                    </div>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max'>
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon5} alt="Next.JS" /></li>
                        <p>Next.JS</p>
                    </div>
                    <div className='hover:scale-105 hover:translate-y-1 duration-300 drop-shadow-lg w-max'>
                    <li className='bg-secondary w-[68px] h-[68px] flex items-center justify-center rounded-full '><img className='w-8' src={icon6} alt="Figma" /></li>
                        <p>Figma</p>
                    </div> 
                </ul>
            </div>
            
        </div>
        <div className='mt-8 flex flex-col gap-5'>
            <div className='flex flex-col justify-around gap-5'>
            <h2 className='font-bold text-xl'>Experience</h2>
            <div className='h-2 bg-secondary w-full rounded-full'></div>
                <div className='flex items-center gap-8 hover:scale-105 px-4 py-2 rounded-lg dark:text-black bg-white hover:drop-shadow-lg duration-300 cursor-pointer'>
                    <div className=''>
                        <h3>2024</h3>
                        <p className='text-text-main'>(March - June)</p>
                    </div>
                    <div>
                        <h3>Front-End Engineering</h3>
                        <p className='text-text-main'>BTW Edutech</p>
                    </div>
                </div>
            <div className='h-2 bg-secondary w-full rounded-full'></div>
                <h3 className='text-text-main text-center'>SOON...</h3>
            <div className='h-2 bg-secondary w-full rounded-full'></div>
            </div>
            <div className='flex items-center justify-center mt-20'>
                <img src={vector} alt="Skills" className='w-[250px] md:w-full' />
            </div>
            
        </div>
    </div>
  )
}

export default Skills