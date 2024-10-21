import React from 'react';
import Content from './Content';
import Skill from './Skill';
function Intro() {
return (
  <>
  <div className="flex gap-3 mb-3 items-center">
    <div className="avatar">
      <div className="ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
        <img src="pics/me.jpg" />
      </div>
    </div>
    <div>
      <h6 className="text-sm text-gray-500">Hey there, I'm</h6>
      <h1 className="m-0 text-2xl">Atanu Mondal</h1>
      <h6 className='text-sm text-gray-500'>React.js || Web application || MERN stack</h6>
    </div>
  </div>
  <div className="flex flex-col gap-2 justify-between">
    
    <div className="flex gap-3 items-center">
      <a href="CV.pdf" target="_blank" download><button className="border bg-slate-800 hover:bg-slate-900 px-2 py-1 rounded text-white text-sm">View CV</button></a>
      <a className='scale-[1.5] hover:text-blue-800 duration-150' href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank"><i className="bi bi-linkedin"></i></a>
      <a className='scale-[1.5] hover:text-black duration-150' href="https://github.com/WebdevAtanu" target="_blank"><i className="bi bi-github"></i></a>
    </div>
    <p>Front-end developer with a solid foundation in backend technologies. Skilled in creating engaging and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React. Leverage backend knowledge in Node.js and Express to seamlessly integrate APIs and enhance application functionality. Experienced in working with databases to ensure smooth data management and flow. Passionate about delivering high-quality, user-friendly solutions while continuously learning and adapting to new technologies. Adept at collaborating in team environments to bring innovative ideas to life.</p>
  </div>
  <Content/>
  <Skill/>
  </>
)
}
export default Intro