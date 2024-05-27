import card1 from '../assets/image/card1.png'
import card2 from '../assets/image/card2.png'
import card3 from '../assets/image/card3.png'
import CardProject from './CardProject'


const MyProjects = () => {


  const listText = [
    {
      title : 'Anime List Web App',
      desc : 'Anime Online.id is a website that features a list of anime, connected to the Jikan API. Anime-Online.id was built with the aim of practicing and implementing an understanding of React.JS. ',
      tools : [
        'React', 'Api', 'TailwindCSS', 'Vercel'
      ],
      image : card1,
      url : 'https://anime-online.vercel.app/'
    },

    {
      title : 'Landing Page Company',
      desc : 'Landing Page Company is landing page project that was undertaken to practice and enhance my basic skills in implementing HTML, CSS, and JavaScript.',
      tools : [
        'HTML', 'CSS', 'JavaScript', 'Replit'
      ],
      image : card2,
      url : 'https://replit.com/@Wisnadiputra/Tester'
    },

    {
      title : 'PoseCam Filter App',
      desc : 'PoseCam is a camera filter app integrated with trained machine learning models. PoseCam is built using Python and developed to finish the final exam of Intelligent Systems Applications course.',
      tools : [
        'Python', 'Streamlit', 'TensorFlow', 'Roboflow'
      ],
      image : card3,
      url : 'https://github.com/ekawirawan/hand-pose-recognition'
    }
  ]

  return (
    <div className='font-Kanit mt-8 flex flex-col gap-8 md:mt-20' id='Projects'>
        <div className="flex flex-col gap-6 md:gap-8">
            <h2 className='text-5xl font-bold dark:text-white md:text-7xl'>My Projects</h2>
            <p className='text-text-main md:text-2xl md:w-[520px]'>Below are several projects that I have worked on while entering the world of Front-End Engineering & Web Design.</p>
        </div>

        <div className='flex items-center justify-center flex-col gap-8 md:grid md:grid-cols-3'>
          {
            listText && listText.length != 0 ? listText.map((card, index) => (
              <a href={card.url} key={index}>
                <CardProject  card={card.image} title={card.title} desc={card.desc} tool={card.tools} />
              </a>
              
            )) : <p>Data is missing!</p>
          }
        </div>
        <a href="https://github.com/wisnadiputra1" className='w-max mx-auto'>
          <button className='bg-secondary px-10 py-3 rounded-full text-white font-bold mt-5 hover:scale-105 duration-300 drop-shadow-lg'>Others</button>
        </a>
    </div>
  )
}

export default MyProjects
