import React from 'react'
import { motion } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";

function Skill() {
const parentVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const childVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};

function Skills(props) {
  return (
    <motion.div variants={childVariant} className='flex justify-center p-3'>
    <div className="md:w-2/3 w-full flex items-center justify-center aspect-square rounded-lg">
    <div className={`${props.class} radial-progress`} style={{ "--value": props.value, "--size": "6rem", "--thickness": "4px"  }} role="progressbar">
        <div className="flex flex-col justify-center items-center">
            <props.logo className={`${props.class} text-lg`}/>
            <p className='text-xs text-white'>{props.text}</p>
        </div>
    </div>
    </div>
    </motion.div>
  )
}

return (
  <section id='skill' className='pt-5 lg:h-screen'>
      <div>
        <div className="mb-4">
          <p className='text-center mb-10 md:mt-10 md:mt-0 text-2xl tracking-wider text-[#f70853]' id='bolder'>My Skillsets</p>
          <div className='' id='skills'>
            <motion.div variants={parentVariant} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} className='bg-[#091327] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-12 px-4 rounded-2xl'>
              <Skills logo={RiJavascriptFill} text='Javascript' class='text-yellow-500' value='70'/>
              <Skills logo={FaReact} text='React.js' class='text-blue-600' value='80'/>
              <Skills logo={RiTailwindCssFill} text='TailwindCSS' class='text-sky-500' value='90'/>
              <Skills logo={FaNodeJs} text='Node.js' class='text-green-700' value='65'/>
              <Skills logo={SiExpress} text='Express' class='text-xl' value='75'/>
              <Skills logo={DiMongodb} text='MongoDB' class='text-green-500 text-xl' value='60'/>
              <Skills logo={SiMysql} text='Mysql' class='text-blue-500' value='55'/>
              <Skills logo={SiAppwrite} text='Appwrite' class='text-pink-600' value='60'/>
              <Skills logo={RiNextjsFill} text='Next.js' class='' value='50'/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
)
}
export default Skill