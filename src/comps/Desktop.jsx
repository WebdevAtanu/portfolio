import React from 'react';
import { motion } from "framer-motion";

function Desktop(props) {
	return (
    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
    <h5 className='text-xl mb-2 font-bold'>{props.h5}</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 p-3">
      <div className="mockup-browser bg-slate-900 text-white border border-black rounded">
        <div className="mockup-browser-toolbar p-2">
          <div className="input text-black border-black">{props.href}</div>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {props.img1&&<img src={props.img1} alt="" className='w-full'/>}
          {props.img2&&<img src={props.img2} alt="" className='w-full'/>}
          {props.img3&&<img src={props.img3} alt="" className='w-full'/>}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
          <p>{props.p}</p>
          <p className='text-sm'>TechStack Used: {props.tech}</p>
          <div className="flex gap-3">
          <a href={props.href} target='_blank' className='border border-black p-1 rounded hover:text-white hover:bg-slate-700 text-sm'><i className="bi bi-browser-chrome"></i> Live Link</a>
          <a href={props.github} target='_blank' className='border border-black p-1 rounded hover:text-white hover:bg-slate-700 text-sm'><i className="bi bi-github"></i> GitHub Link</a> 
          </div>
      </div>
      </div>
    </motion.div>
	)
}

export default Desktop