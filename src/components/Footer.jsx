
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-secondary via-bg-secondary to-bg-third ... py-4 md:py-10 mt-10 font-Kanit">
        <div className="flex flex-col items-center justify-center md:justify-start mx-3 md:mx-[416px] gap-6 md:grid md:grid-cols-2">
            <div className="space-y-5 md:space-y-0 md:flex md:gap-16 md:w-full">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="font-bold">Portfolio</h2>
                    <ul className="flex flex-col items-center md:items-start">
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="font-bold">Social Media</h2>
                    <ul className="flex flex-col items-center md:items-start">
                        <li>GIthub</li>
                        <li>LinkedIn</li>
                        <li>Gmail</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            
            <div className="w-[300px] md:w-full md:flex md:flex-col md:justify-end md:items-end">
                <h2 className="text-5xl md:text-7xl font-bold md:w-[450px]">BE CREATIVE, BE SOLUTIVE</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer