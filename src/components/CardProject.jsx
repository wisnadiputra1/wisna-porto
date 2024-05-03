
// eslint-disable-next-line react/prop-types
const CardProject = ({ card, title, desc, tool }) => {
  return (
    <div className="space-y-5">
      <div className='flex items-center justify-center flex-col gap-10'>
        <div className='bg-gradient-to-t from-secondary via-bg-secondary to-bg-third ... md:w-[325px] md:h-[559px] w-[250px] h-[400px] rounded-2xl drop-shadow-lg hover:scale-105 duration-300 flex flex-col gap-2'>
          <img src={card} alt="Card1" className='rounded-t-2xl bg-center w-full h-48 md:h-64 object-cover hover:blur-sm' />
          <div className='w-[200px] md:w-full overflow-x-scroll md:overflow-auto text-center mx-auto scroll-smooth md:scroll-p-[0.5px] scrollable-container '>
            <div className='flex items-center justify-center gap-4 md:gap-8 text-center w-max mx-2 my-2'>
              {
                  // eslint-disable-next-line react/prop-types
                  tool && tool.length != 0 ? tool.map((item, idx) => (
                      <div key={idx} className='bg-secondary h-5 md:h-8 text-xs md:flex md:items-center drop-shadow-lg rounded-md w-[82px] hover:scale-105'><p className="w-full">{item}</p></div>
                  )) : null
              }
            </div>
          </div>
          <div className='mt-3 mx-2'>
            <h3 className='font-bold md:text-xl'>{title}</h3>
            <div className='mt-6 text-sm md:mt-12 md:text-base'>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
