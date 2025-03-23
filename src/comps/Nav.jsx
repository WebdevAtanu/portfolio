import { useState } from "react";
import { Link } from "react-scroll";
import { FaUserSecret } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import {  BsGithub } from "react-icons/bs";
import { MdWork } from "react-icons/md";

function Nav() {
  const [flag, setFlag] = useState(false);
  var previousPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  window.onscroll = function () {
    var currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (previousPosition > currentPosition) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    previousPosition = currentPosition;
  };

  return (
    <>
      <div
        className={`hidden md:block shadow sticky z-50 bg-[#091327] text-white ${
          flag ? "top-0" : "top-[-5rem]"
        }`}
      >
        <div className="container m-auto">
          <ul className="flex justify-center gap-5 p-3 nav">
            <li>
              <Link
                to="intro"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                to="do"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Working Field
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="work"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="project"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Practice Projects
              </Link>
            </li>
            <li>
              <Link
                to="github"
                activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                spy={true}
                smooth={true}
                className="hover:text-indigo-600 cursor-pointer hover:bg-[#0f172a] duration-100 py-1 px-3 rounded"
              >
                Github stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden fixed top-6 right-4 z-10">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button text-3xl text-indigo-600"
            >
              < MdOutlineMenuOpen  />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="flex flex-col bg-[#091327] justify-center w-1/2 rounded-b-lg py-4 nav">
              <li>
                <Link
                  to="intro"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <FaUserSecret />
                  <span>Intro</span>
                </Link>
              </li>
              <li>
                <Link
                  to="do"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <BsPersonWorkspace />
                  <span>Working Field</span>
                </Link>
              </li>
              <li>
                <Link
                  to="skill"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <FaPenNib />
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <MdWork />
                  <span>Work Experience</span>
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <FaLightbulb />
                  <span>Practice Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="github"
                  activeStyle={{ color: "#3949ab", background: "#0f172a" }}
                  spy={true}
                  smooth={true}
                  className="cursor-pointer my-1 pr-6 pl-6 py-1 flex items-center gap-4"
                >
                  <BsGithub />
                  <span>Github stats</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
