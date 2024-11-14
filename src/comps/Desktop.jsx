import React from 'react'

function Desktop(props) {
	return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 p-3 shadow">
      <div className="mockup-browser bg-slate-900 text-white border border-black rounded">
        <div className="mockup-browser-toolbar">
          <div className="input text-black">{props.href}</div>
        </div>
        <img src={props.src} alt="" className='w-full'/>
      </div>
      <div className='py-3 flex flex-col justify-between gap-4'>
        <div>
          <h5 className='text-xl mb-2'>{props.h5}</h5>
          <p>{props.p}</p>
          <p className='text-sm mt-2'>TechStack Used: {props.tech}</p>
        </div>
        <div>
          <div className="flex gap-5">
          <a href={props.href} target='_blank' className='underline underline-offset-4 hover:text-blue-800'><i className="bi bi-browser-chrome"></i> Live Link</a>
          <a href={props.github} target='_blank' className='underline underline-offset-4 hover:text-blue-800'><i className="bi bi-github"></i> GitHub Link</a> 
          </div>
        </div>
      </div>
    </div>
	)
}

export default Desktop