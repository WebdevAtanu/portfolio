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
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn text-2xl bg-blue-800 hover:bg-blue-900"><i className="bi bi-list"></i></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-1/3 p-4">
            <Link to="intro" smooth={true} className='cursor-pointer my-3 hover:text-[#f70853]'><li>Intro</li></Link>
            <Link to="do" smooth={true} className='cursor-pointer my-3 hover:text-[#f70853]'><li>I do</li></Link>
            <Link to="skill" smooth={true} className='cursor-pointer my-3 hover:text-[#f70853]'><li>Skills</li></Link>
            <Link to="project" smooth={true} className='cursor-pointer my-3 hover:text-[#f70853]'><li>Projects</li></Link>
          </ul>
        </div>
      </div>
    </div>
    </>
	)
}

export default Nav