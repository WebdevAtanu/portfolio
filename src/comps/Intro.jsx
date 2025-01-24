import React from 'react';
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
      <div className="avatar cursor-pointer">
        <div className="w-32 rounded-full ring ring-offset-0 ring-pink-600">
          <img src="pics/me.jpg" />
        </div>
      </div>
      <div>
        <h6 className="text-sm">Hey there, I'm</h6>
        <h1 className="mb-3 text-3xl tracking-wide">Atanu Mondal</h1>
            <div className="w-full mt-2 flex gap-2">
          <a href="CV.pdf" target="_blank">
            <div className="flex items-center gap-1 justify-center text-sm text-black px-4 py-2 rounded bg-pink-600">
              <MdOutlineFileDownload />
              <p id='resume'>Resume</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank" className='flex items-center'>
              <i className="bi bi-linkedin mx-1 text-lg text-pink-600"></i>
          </a>
          <a href="https://github.com/WebdevAtanu" target="_blank" className='flex items-center'>
              <i className="bi bi-github mx-1 text-lg text-pink-600"></i>
          </a>
        </div>
      </div>
    </div>
    <p className='text-sm md:text-lg'>I'm a web developer specializing in MERN stack & modern web solutions. Proficient in creating engaging and responsive user interfaces using HTML, CSS and JavaScript frameworks like React. Leverage backend knowledge in Node.js and Express to seamlessly integrate APIs and enhance application functionality. Experienced in working with databases such as MongoDB and MySQL to ensure smooth data management and flow.</p>
    <p className="text-sm md:text-lg">Explore my portfolio to see the projects I’ve worked on.</p>
  </div>
  <img src="pics/dev.png" alt="" className="hidden md:block w-full m-auto md:w-1/4"/>
</div>
</motion.div>
<div className="mt-16 flex flex-col gap-2 justify-center items-center text-sm">
  <p>scroll down</p>
  <FaAngleDoubleDown className='animate-bounce text-pink-600' />
</div>
</section>
)
}
export default Intro