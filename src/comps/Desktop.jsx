import React from 'react'

function Desktop(props) {
	return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 p-3 shadow">
      <div className="flex justify-center">
        <img src={props.src} alt="" className='w-2/3 md:w-1/2'/>
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className='text-xl'>{props.h5}</h5>
        <p>{props.p}</p>
        <p className='text-sm'>TechStack Used: {props.tech}</p>
        <a href={props.href} className='text-blue-600 text-sm underline underline-offset-4 hover:text-blue-800'>Live Link  <i className="bi bi-box-arrow-up-right"></i></a>
      </div>
    </div>
	)
}

export default Desktop