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

function Skill() {
return (
  <section id='skill'></section>
    <div className="mt-10">
      <div>
        <div className="mb-4">
          <p className='text-center mb-5 mt-10 text-xl tracking-wider' id='bolder'>My Skillsets</p>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{
            duration: 1,
            ease: "easeInOut"
            }} viewport={{ once: true }} className='mt-3 px-3 py-12 bg-[#0c1425]' id='skills'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
              <div className="flex flex-col items-center text-2xl">
                <RiJavascriptFill className='text-yellow-500'/>
                <p>Javascript</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <FaReact className='text-blue-600'/>
                <p>React.js</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <RiTailwindCssFill className='text-sky-500'/>
                <p>TailwindCSS</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <FaNodeJs className='text-green-700'/>
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <SiExpress />
                <p>Express.js</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <DiMongodb className='text-green-500'/>
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <SiMysql className='text-blue-500'/>
                <p>Mysql</p>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <RiNextjsFill/>
                <p>Next.js</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
)
}
export default Skill