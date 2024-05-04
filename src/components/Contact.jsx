import iconGithub from '../assets/icon/github.svg'
import iconLinkedIn from '../assets/icon/linkedin.svg'
import iconGmail from '../assets/icon/gmail.svg'
import iconInstagram from '../assets/icon/instagram.svg'
import vector from '../assets/image/email.png'

const Contact = () => {

  const listSocialMedia = [
    {
      icon : iconGithub,
      text : 'GitHub'
    },
    {
      icon : iconLinkedIn,
      text : 'LinkedIn'
    },
    {
      icon : iconGmail,
      text : 'Gmail'
    },
    {
      icon : iconInstagram,
      text : 'Instagram'
    }
  ]
  
  return (
    <div className='font-Kanit mt-16 flex flex-col gap-20 md:grid md grid-cols-2' id='Contact'>
      <div className='space-y-16'>
        <div className='space-y-6'>
            <h2 className='text-5xl font-bold'>{"Let's Keep Connect"}</h2>
            <p className='text-text-main md:text-2xl w-full'>{"I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your team, please don't hesitate to reach out. You can find my contact information on this site."}</p>
        </div>

        <div className='w-ful flex items-center'>
          <ul className='w-full md:w-[90%] flex flex-wrap gap-x-28 gap-y-8 justify-center items-center md:justify-start'>
            {
              listSocialMedia.length > 0 ? listSocialMedia.map((item) => {
              return <div key={item.text}>
                  <li className='bg-secondary h-[68px] w-[68px] rounded-full flex items-center justify-center'><img src={item.icon} alt="" className='w-8' /></li>
                  <p className='text-center font font-semibold'>{item.text}</p>
                </div>
              })
              : <p>cannot load data</p>
            }
          </ul>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className='text-5xl font-bold md:text-5xl'>Get In Touch With Us</h3>
          <p className='text-text-main md:text-2xl'>{"Feel free to contact us for collaboration opportunities or freelance work. We're open to exciting projects and look forward to hearing from you!"}</p>
        </div>
      </div>

      <div className='space-y-10'>
        <div>
          <img src={vector} alt="Vector Email" className='w-[250px md:w-full' />
        </div>
        <div>
          <div className='bg-secondary rounded-md'>
            <form className='py-1 flex flex-col items-center justify-center gap-3 mx-3'>
              <h2 className='font-semibold'>Send An Email</h2>
                <input type="text" placeholder='Name' className='rounded-md px-2 w-full py-2 focus:outline-sky-600' />
                <input type="email" placeholder='E-mail' className='rounded-md px-2 w-full py-2' />
                <textarea name="Message" id="msg" placeholder='Type message here..' className='rounded-md px-2 py-2 w-full h-36'></textarea>
                <button type='submit' className='bg-black text-white px-10 py-1 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact