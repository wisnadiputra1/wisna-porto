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
    <div className='font-Kanit mt-16 flex flex-col gap-20'>
      <div className='space-y-16'>
        <div className='space-y-6'>
            <h2 className='text-5xl font-bold'>{"Let's Keep Connect"}</h2>
            <p className='text-text-main'>{"I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your team, please don't hesitate to reach out. You can find my contact information on this site."}</p>
        </div>

        <div className='w-ful flex items-center'>
          <ul className='w-full flex flex-wrap gap-20 justify-center items-center'>
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

        <div className='flex flex-col items-center gap-6'>
        <h3 className='text-5xl font-bold'>Get In Touch With Us</h3>
        <p className='text-text-main'>Feel free to contact us for collaboration opportunities or freelance work. We're open to exciting projects and look forward to hearing from you!</p>
      </div>
      </div>

      <div>
            <div>
              <img src={vector} alt="" className='w-[250px' />
            </div>
        
      </div>
    </div>
  )
}

export default Contact