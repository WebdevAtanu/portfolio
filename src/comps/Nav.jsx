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
          <li className='hover:animate-pulse'><a href="#intro" className='hover:text-blue-500'>Intro</a></li>
          <li className='hover:animate-pulse'><a href="#skill" className='hover:text-blue-500'>Skills</a></li>
          <li className='hover:animate-pulse'><a href="#project" className='hover:text-blue-500'>Projects</a></li>
        </ul>
      </div>
    </div>
    <div className="md:hidden fixed bottom-3 right-3 z-10">
      <div className="dropdown dropdown-top flex flex-col items-center">
        <div tabIndex={0} role="button" className="btn rounded-xl text-2xl"><i className="bi bi-list"></i></div>
        <ul tabIndex={0} className="dropdown-content menu z-[1] py-5 items-center bg-[#0c1425]">
          <li><Link to="#intro" className='hover:text-blue-500'>Intro</Link></li>
          <li><Link to="#skill" className='hover:text-blue-500'>Skills</Link></li>
          <li><Link to="#project" className='hover:text-blue-500'>Projects</Link></li>
        </ul>
      </div>
    </div>
    </>
	)
}

export default Nav