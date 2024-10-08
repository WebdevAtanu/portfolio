import React from 'react'

function Desktop(props) {
	return (
		<div className="row mt-4">
          <div className={props.class1}>
            <div className="container siteImg position-relative">
            <div className="overlay"><a href={props.href} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-browser-chrome" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            </svg></a></div>
              <img src={props.src} alt=""/>
            </div>
          </div>
          <div className={props.class2}>
            <div className="container demos">
              <h5 className='my-2'>{props.h5}</h5>
              <p>{props.p}</p>
              <p>TechStack Used: {props.tech}</p>
            </div>
          </div>
    </div>
	)
}

export default Desktop