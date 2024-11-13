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
        </div>
        <div>
          <p className='text-sm'>TechStack Used: {props.tech}</p>
          <a href={props.href} target='_blank' className='text-blue-600 text-sm underline underline-offset-4 hover:text-blue-800'>Live Link  <i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    </div>
	)
}

export default Desktop