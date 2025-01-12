import React from 'react';
import { motion } from "framer-motion";
function Intro() {
return (
<section id='intro' className='md:pt-20 pt-5 md:h-screen'>
<motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{
    duration: 1,
    ease: "easeInOut"
  }}>
<div className="flex flex-col lg:flex-row gap-5">
  <div className="flex flex-col gap-5">
    <div className="flex gap-4 items-center">
      <div className="avatar cursor-pointer">
        <div className="ring-offset-base-100 w-32 rounded-full ring ring-offset-0">
          <img src="pics/me.jpg" />
        </div>
      </div>
      <div>
        <h6 className="text-sm">Hey there, I'm</h6>
        <h1 className="m-0 text-3xl tracking-wide" id='bolder'>Atanu Mondal</h1>
            <div className="w-full mt-2 grid grid-cols-3 gap-2">
          <a href="CV.pdf" target="_blank">
            <div className="flex items-center gap-1 justify-center text-xs p-1 rounded bg-blue-800 hover:bg-blue-900">
              <i className="bi bi-file-earmark-person-fill"></i>
              <p>Resume</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank">
            <div className="flex items-center gap-1 justify-center text-xs p-1 rounded bg-blue-800 hover:bg-blue-900">
              <i className="bi bi-linkedin"></i>
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/WebdevAtanu" target="_blank">
            <div className="flex items-center gap-1 justify-center text-xs p-1 rounded bg-blue-800 hover:bg-blue-900">
              <i className="bi bi-github"></i>
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <p className='text-sm md:text-lg leading-6'>I'm a web developer specializing in MERN stack & modern web solutions. Proficient in creating engaging and responsive user interfaces using HTML, CSS and JavaScript frameworks like React. Leverage backend knowledge in Node.js and Express to seamlessly integrate APIs and enhance application functionality. Experienced in working with databases such as MongoDB and MySQL to ensure smooth data management and flow.</p>
    <p className="text-sm md:text-lg">Explore my portfolio to see the projects I’ve worked on.</p>
  </div>
  <img src="pics/dev.png" alt="" className="w-2/3 m-auto md:w-1/4"/>
</div>
</motion.div>
</section>
)
}
export default Intro