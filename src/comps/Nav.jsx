import Intro from './Intro';
import Project from './Project';
import Skill from './Skill';
import { Link } from "react-scroll";

function Nav() {
	return (
    <>
    <div className="hidden md:block shadow sticky top-0 z-50 bg-[#0f172a] text-white">
      <div className="container m-auto">
        <ul className='flex justify-end gap-5 p-5'>
          <li className='hover:animate-pulse'><Link to="intro" smooth={true} className='hover:text-blue-500 cursor-pointer'>Intro</Link></li>
          <li className='hover:animate-pulse'><Link to="do" smooth={true} className='hover:text-blue-500 cursor-pointer'>I do</Link></li>
          <li className='hover:animate-pulse'><Link to="skill" smooth={true} className='hover:text-blue-500 cursor-pointer'>Skills</Link></li>
          <li className='hover:animate-pulse'><Link to="project" smooth={true} className='hover:text-blue-500 cursor-pointer'>Projects</Link></li>
        </ul>
      </div>
    </div>
    <div className="md:hidden fixed bottom-3 right-3 z-10">
      <div className="dropdown dropdown-top flex flex-col items-center">
        <div tabIndex={0} role="button" className="btn rounded-xl text-2xl bg-blue-900"><i className="bi bi-list"></i></div>
        <ul tabIndex={0} className="dropdown-content z-[1] flex flex-col items-center bg-blue-900 rounded-lg">
          <Link to="intro" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:bg-blue-800 hover:text-[#f70853]'><li>Intro</li></Link>
          <Link to="skill" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:bg-blue-800 hover:text-[#f70853]'><li>Skills</li></Link>
          <Link to="do" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:bg-blue-800 hover:text-[#f70853]'><li>I do</li></Link>
          <Link to="project" smooth={true} className='my-3 w-full text-center cursor-pointer px-2 py-1 my-3 hover:bg-blue-800 hover:text-[#f70853]'><li>Projects</li></Link>
        </ul>
      </div>
    </div>
    </>
	)
}

export default Nav