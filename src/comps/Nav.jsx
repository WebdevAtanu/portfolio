import Intro from './Intro';
import Project from './Project';
import Skill from './Skill';
import { Link } from "react-scroll";

function Nav() {
	return (
    <>
    <div className="hidden md:block shadow sticky top-0 z-50 bg-[#091327] text-white">
      <div className="container m-auto">
        <ul className='flex justify-end gap-5 p-5'>
          <li><Link to="intro" smooth={true} className='hover:text-[#f70853] cursor-pointer'>Intro</Link></li>
          <li><Link to="do" smooth={true} className='hover:text-[#f70853] cursor-pointer'>I do</Link></li>
          <li><Link to="skill" smooth={true} className='hover:text-[#f70853] cursor-pointer'>Skills</Link></li>
          <li><Link to="project" smooth={true} className='hover:text-[#f70853] cursor-pointer'>Projects</Link></li>
        </ul>
      </div>
    </div>
    <div className="md:hidden fixed top-5 right-8 z-10">
      <div className="dropdown dropdown-bottom flex flex-col items-center">
        <div tabIndex={0} role="button" className="btn py-1 text-2xl bg-[#091327]"><i className="bi bi-list"></i></div>
        <ul tabIndex={0} className="dropdown-content z-[1] flex flex-col items-center bg-[#091327] rounded-lg px-5">
          <Link to="intro" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:text-[#f70853]'><li>Intro</li></Link>
          <Link to="do" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:text-[#f70853]'><li>I do</li></Link>
          <Link to="skill" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:text-[#f70853]'><li>Skills</li></Link>
          <Link to="project" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:text-[#f70853]'><li>Projects</li></Link>
        </ul>
      </div>
    </div>
    </>
	)
}

export default Nav