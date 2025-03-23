import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
function Intro() {
return (
<section id='intro' className='pt-5 mb-10 h-screen'>
<motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{
    duration: 1,
    ease: "easeInOut"
  }}>
  <div className="flex flex-col lg:flex-row gap-5">
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-offset-0 ring-indigo-600">
            <img src="pics/me.jpg" />
          </div>
        </div>
        <div>
          <h6 className="text-sm">Hey there, I'm</h6>
          <h1 className="mb-3 text-3xl tracking-wide">Atanu Mondal</h1>
        </div>
      </div>
      <p className='md:text-lg'>I'm a web developer specializing in the MERN stack, .NET Core, and modern web solutions. I excel at building dynamic, responsive user interfaces with React, HTML, and CSS, ensuring seamless user experiences. On the backend, I develop robust APIs and scalable applications using Node.js, Express, and .NET Core. With experience in both MongoDB and MSSQL, I ensure efficient data management and optimized performance for high-quality web applications.</p>
      <div className="w-full flex gap-4">
        <a href="CV.pdf" target="_blank">
          <div className="flex items-center gap-1 justify-center text-sm text-black px-4 py-1 rounded bg-indigo-600 hover:bg-indigo-700 font-bold duration-100">
            <MdOutlineFileDownload />
            <p>Resume</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank" className='flex items-center'>
          <i className="bi bi-linkedin text-lg text-indigo-600 hover:text-indigo-700 duration-100"></i>
        </a>
        <a href="https://github.com/WebdevAtanu" target="_blank" className='flex items-center'>
          <i className="bi bi-github text-lg text-indigo-600 hover:text-indigo-700 duration-100"></i>
        </a>
      </div>
      <p className="md:text-lg">Explore my portfolio to see the projects I’ve worked on.</p>
    </div>
    <img src="pics/dev.png" alt="" className="hidden lg:block w-full m-auto md:w-1/4"/>
  </div>
</motion.div>
<div className="mt-16 flex flex-col gap-2 justify-center items-center text-sm">
  <p>scroll down</p>
  <FaAngleDoubleDown className='animate-bounce text-indigo-600 text-xl' />
</div>
</section>
)
}
export default Intro