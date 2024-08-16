import React from 'react'

function Desktop(props) {
	return (
		<>
		<div className="row mt-4">
          <div className={props.class1}>
            <div className="container siteImg">
              <a href={props.href} target="_blank"><img src={props.src}  alt="" id='mobile'/></a>
            </div>
          </div>
          <div className={props.class2}>
            <div className="container demos">
              <h5 className='my-2'>{props.h5}</h5>
              <p>{props.p} </p>
              <p>TechStack Used: {props.tech}</p>
            </div>
          </div>
        </div>
        </>
	)
}

export default Desktop