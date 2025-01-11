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
      staggerChildren: 0.2, // Delay between child animations
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: 20, // Moves the child down
  },
  visible: {
    opacity: 1,
    y: 0, // Moves the child back to position
    transition: {
      duration: 0.5,
    },
  },
};

function Skills(props) {
  return (
    <motion.div variants={childVariant} className="flex flex-col items-center justify-center bg-[#0c1425] py-3 rounded-lg">
                <props.logo className={props.class}/>
                <p>{props.text}</p>
              </motion.div>
  )
}

return (
  <section id='skill' className='md:h-screen'>
      <div>
        <div className="mb-4">
          <p className='text-center md:pt-20 mt-10 text-2xl tracking-wider' id='bolder'>My Skillsets</p>
          <div className='mt-3 px-3 py-6' id='skills'>
            <motion.div variants={parentVariant}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} className='grid grid-cols-2 md:grid-cols-4 gap-10'>
              <Skills logo={RiJavascriptFill} text='Javascript' class='text-yellow-500 text-2xl'/>
              <Skills logo={FaReact} text='React.js' class='text-blue-600 text-2xl'/>
              <Skills logo={RiTailwindCssFill} text='TailwindCSS' class='text-sky-500 text-2xl'/>
              <Skills logo={FaNodeJs} text='Node.js' class='text-green-700 text-2xl'/>
              <Skills logo={SiExpress} text='Express' class='text-2xl'/>
              <Skills logo={DiMongodb} text='MongoDB' class='text-green-500 text-2xl'/>
              <Skills logo={SiMysql} text='Mysql' class='text-blue-500 text-2xl'/>
              <Skills logo={SiAppwrite} text='Appwrite' class='text-pink-500 text-2xl'/>
              <Skills logo={RiNextjsFill} text='Next.js' class='text-2xl'/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
)
}
export default Skill