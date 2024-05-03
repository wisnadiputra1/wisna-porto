
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-secondary via-bg-secondary to-bg-third ... py-4 mt-10 font-Kanit ">
        <div className="flex flex-col items-center justify-center mx-3 gap-6 ">
            <div className="space-y-5">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">Portfolio</h2>
                    <ul className="flex flex-col items-center">
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">Social Media</h2>
                    <ul className="flex flex-col items-center">
                        <li>GIthub</li>
                        <li>LinkedIn</li>
                        <li>Gmail</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            
            <div className="w-[300px]">
                <h2 className="text-5xl font-bold">BE CREATIVE, BE SOLUTIVE</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer