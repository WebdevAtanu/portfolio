import {useState} from 'react';
import Intro from './Intro';
import Project from './Project';
import Skill from './Skill';
import { Link } from "react-scroll";
import { FaUserSecret } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbMenuDeep } from "react-icons/tb";


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
    <section id='nav'>
    <div className={`hidden md:block shadow sticky z-50 bg-[#091327] text-white ${flag?'top-0':'top-[-5rem]'}`}>
      <div className="container m-auto">
        <ul className='flex justify-center gap-5 p-3'>
          <li><Link to="intro" activeStyle={{'color':'#9b24af','background':'#0f172a'}} spy={true} smooth={true} className='hover:text-[#9b24af] cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded'>Intro</Link></li>
          <li><Link to="do" activeStyle={{'color':'#9b24af','background':'#0f172a'}} spy={true} smooth={true} className='hover:text-[#9b24af] cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded'>Working Field</Link></li>
          <li><Link to="skill" activeStyle={{'color':'#9b24af','background':'#0f172a'}} spy={true} smooth={true} className='hover:text-[#9b24af] cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded'>Skills</Link></li>
          <li><Link to="project" activeStyle={{'color':'#9b24af','background':'#0f172a'}} spy={true} smooth={true} className='hover:text-[#9b24af] cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded'>Practice Projects</Link></li>
          <li><Link to="github" activeStyle={{'color':'#9b24af','background':'#0f172a'}} spy={true} smooth={true} className='hover:text-[#9b24af] cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded'>Github stats</Link></li>
        </ul>
      </div>
    </div>
    <div className="md:hidden fixed top-6 right-4 z-10">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button text-3xl text-[#9b24af]"><TbMenuDeep /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="flex flex-col bg-[#091327] justify-center w-1/2 py-4">
            <Link to="intro" activeStyle={{'color':'#9b24af', 'background':'#0f172a'}} spy={true} smooth={true} className='cursor-pointer my-1 pr-6 pl-6 py-1'><li className='flex items-center gap-4'><FaUserSecret /><span>Intro</span></li></Link>
            <Link to="do" activeStyle={{'color':'#9b24af', 'background':'#0f172a'}} spy={true} smooth={true} className='cursor-pointer my-1 pr-6 pl-6 py-1'><li className='flex items-center gap-4'><BsPersonWorkspace /><span>Working Field</span></li></Link>
            <Link to="skill" activeStyle={{'color':'#9b24af', 'background':'#0f172a'}} spy={true} smooth={true} className='cursor-pointer my-1 pr-6 pl-6 py-1'><li className='flex items-center gap-4'><FaPenNib /><span>Skills</span></li></Link>
            <Link to="project" activeStyle={{'color':'#9b24af', 'background':'#0f172a'}} spy={true} smooth={true} className='cursor-pointer my-1 pr-6 pl-6 py-1'><li className='flex items-center gap-4'><FaLightbulb /><span>Practice Projects</span></li></Link>
            <Link to="github" activeStyle={{'color':'#9b24af', 'background':'#0f172a'}} spy={true} smooth={true} className='cursor-pointer my-1 pr-6 pl-6 py-1'><li className='flex items-center gap-4'><FiGithub /><span>Github stats</span></li></Link>
          </ul>
        </div>
      </div>
    </div>
    </section>
	)
}

export default Nav