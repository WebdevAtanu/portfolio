import React from 'react';
import Content from './Content';
import Skill from './Skill';
import { motion } from "framer-motion";
function Intro() {
return (
<section id='intro'>
<dialog id="my_image" className="modal">
<div className="modal-box">
  <div className="flex flex-col gap-3 justify-center items-center">
    <img src="pics/me.jpg" className='w-1/3 rounded-lg'/>
    <h6 className='text-sm'>React.js || Web application || MERN stack</h6>
    <div className="w-full grid grid-cols-3 gap-2">
      <a href="CV.pdf" target="_blank">
        <div className="flex flex-col items-center border text-sm p-1 rounded-lg hover:bg-base-200">
          <i className="bi bi-file-earmark-person-fill"></i>
          <p>Resume</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank">
        <div className="flex flex-col items-center border text-sm p-1 rounded-lg hover:bg-base-200">
          <i className="bi bi-linkedin"></i>
          <p>LinkedIn</p>
        </div>
      </a>
      <a href="https://github.com/WebdevAtanu" target="_blank">
        <div className="flex flex-col items-center border text-sm p-1 rounded-lg hover:bg-base-200">
          <i className="bi bi-github"></i>
          <p>GitHub</p>
        </div>
      </a>
    </div>
  </div>
</div>
<form method="dialog" className="modal-backdrop">
  <button>close</button>
</form>
</dialog>
<motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0,opacity: 1 }} transition={{
    duration: 1,
    ease: "easeInOut"
  }}>
<div className="flex gap-3">
  <div className="flex flex-col gap-5">
    <div className="flex gap-3 items-center">
      <div className="avatar cursor-pointer" onClick={()=>document.getElementById('my_image').showModal()}>
        <div className="ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src="pics/me.jpg" />
        </div>
      </div>
      <div>
        <h6 className="text-sm">Hey there, I'm</h6>
        <h1 className="m-0 text-3xl tracking-wide" id='bolder'>Atanu Mondal</h1>
      </div>
    </div>
    <p className='text-sm'>I'm a Front-end developer with a solid foundation in backend technologies. Proficient in creating engaging and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React. Leverage backend knowledge in Node.js and Express to seamlessly integrate APIs and enhance application functionality. Experienced in working with databases to ensure smooth data management and flow. Passionate about delivering high-quality, user-friendly solutions while continuously learning and adapting to new technologies. Adept at collaborating in team environments to bring innovative ideas to life.</p>
  </div>
  <img src="pics/dev.png" alt="" className="hidden lg:block w-1/4"/>
</div>
</motion.div>
</section>
)
}
export default Intro