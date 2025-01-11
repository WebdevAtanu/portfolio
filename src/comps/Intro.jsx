import React from 'react';
import { motion } from "framer-motion";
function Intro() {
return (
<section id='intro' className='md:pt-20 pt-5 md:h-screen'>
<dialog id="my_image" className="modal">
<div className="modal-box">
  <div className="flex flex-col gap-3 justify-center items-center">
    <img src="pics/me.jpg" className='w-1/3 rounded-lg'/>
    <h6 className='text-sm'>React.js | Web application | MERN stack</h6>
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
<motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{
    duration: 1,
    ease: "easeInOut"
  }}>
<div className="flex gap-3">
  <div className="flex flex-col gap-5">
    <div className="flex gap-3 items-center">
      <div className="avatar cursor-pointer" onClick={()=>document.getElementById('my_image').showModal()}>
        <div className="ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
          <img src="pics/me.jpg" />
        </div>
      </div>
      <div>
        <h6 className="text-sm">Hey there, I'm</h6>
        <h1 className="m-0 text-3xl tracking-wide" id='bolder'>Atanu Mondal</h1>
      </div>
    </div>
    <p className='text-sm md:text-lg leading-6'>I'm a Front-end developer with a solid foundation in backend technologies. Proficient in creating engaging and responsive user interfaces using <span className='badge rounded-none bg-[#0c1425]'>HTML</span> <span className='badge rounded-none bg-[#0c1425]'>CSS</span> and <span className='badge rounded-none bg-[#0c1425]'>JavaScript</span> frameworks like <span className='badge rounded-none bg-[#0c1425]'>React</span>. Leverage backend knowledge in <span className='badge rounded-none bg-[#0c1425]'>Node.js</span> and <span className='badge rounded-none bg-[#0c1425]'>Express</span> to seamlessly integrate APIs and enhance application functionality. Experienced in working with databases such as <span className='badge rounded-none bg-[#0c1425]'>MongoDB</span> and <span className='badge rounded-none bg-[#0c1425]'>MySQL</span> to ensure smooth data management and flow.</p>
  </div>
  <img src="pics/dev.png" alt="" className="hidden lg:block w-1/4"/>
</div>
</motion.div>
</section>
)
}
export default Intro