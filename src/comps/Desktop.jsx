import React from 'react';
import { motion } from "framer-motion";

function Desktop(props) {
	return (
    <motion.div initial={{ y: 50,opacity: 0 }} whileInView={{ y: 0,opacity: 1 }} viewport={{ once: true }}  transition={{
          duration: 0.5,
          ease: "easeInOut"
        }} className='bg-[#0c1425] p-3 my-6'>
    <h5 className='mb-2 tracking-wider' id='bolder'>{props.h5}</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 p-3">
      <div className="mockup-browser bg-slate-900 text-white border border-black rounded bg-[#0f172a]">
        <div className="mockup-browser-toolbar p-2">
          <div className="input text-white">{props.href}</div>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {props.img1&&<img src={props.img1} alt="" className='w-full'/>}
          {props.img2&&<img src={props.img2} alt="" className='w-full'/>}
          {props.img3&&<img src={props.img3} alt="" className='w-full'/>}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
          <p>{props.p}</p>
          <p className='text-sm'>TechStack Used : {props.tech}</p>
          <div className="flex gap-3">
          <a href={props.href} target='_blank' className='bg-blue-800 p-1 rounded text-white hover:bg-blue-900 text-sm'><i className="bi bi-browser-chrome"></i> Live Link</a>
          <a href={props.github} target='_blank' className='bg-blue-800 p-1 rounded text-white hover:bg-blue-900 text-sm'><i className="bi bi-github"></i> GitHub Link</a> 
          </div>
      </div>
      </div>
    </motion.div>
	)
}

export default Desktop