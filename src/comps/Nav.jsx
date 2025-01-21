import {useState} from 'react';
import Intro from './Intro';
import Project from './Project';
import Skill from './Skill';
import { Link } from "react-scroll";

function Nav() {
  const [flag,setFlag]=useState(false);
  var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

    window.onscroll = function() {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (previousPosition > currentPosition) {
            setFlag(true);
        } else {
            setFlag(false);
        }
        previousPosition = currentPosition;
    };
	return (
    <>
    <div className={`hidden md:block shadow sticky z-50 bg-[#091327] text-white ${flag?'top-0':'top-[-5rem]'}`}>
      <div className="container m-auto">
        <ul className='flex justify-end gap-5 p-5 text-sm'>
          <li><Link to="intro" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='hover:text-[#f70853] cursor-pointer'>Intro</Link></li>
          <li><Link to="do" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='hover:text-[#f70853] cursor-pointer'>I do</Link></li>
          <li><Link to="skill" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='hover:text-[#f70853] cursor-pointer'>Skills</Link></li>
          <li><Link to="project" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='hover:text-[#f70853] cursor-pointer'>Projects</Link></li>
          <li><Link to="github" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='hover:text-[#f70853] cursor-pointer'>Github stats</Link></li>
        </ul>
      </div>
    </div>
    <div className="md:hidden fixed top-5 right-8 z-10">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button px-2 rounded text-2xl bg-blue-800 hover:bg-blue-900"><i className="bi bi-list"></i></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="flex flex-col items-center bg-base-200 text-base-content min-h-full w-1/2">
            <Link to="intro" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='cursor-pointer my-3 hover:text-[#f70853] p-1'><li>Intro</li></Link>
            <Link to="do" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='cursor-pointer my-3 hover:text-[#f70853] p-1'><li>I do</li></Link>
            <Link to="skill" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='cursor-pointer my-3 hover:text-[#f70853] p-1'><li>Skills</li></Link>
            <Link to="project" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='cursor-pointer my-3 hover:text-[#f70853] p-1'><li>Projects</li></Link>
            <Link to="github" activeStyle={{'color':'#f70853'}} spy={true} smooth={true} className='cursor-pointer my-3 hover:text-[#f70853] p-1'><li>Github stats</li></Link>
          </ul>
        </div>
      </div>
    </div>
    </>
	)
}

export default Nav