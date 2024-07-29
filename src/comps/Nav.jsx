import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'

function Nav() {
  const [flag,setFlag]=useState(false);
	const mode=()=> {
    setFlag(!flag);
    let docBody = document.body;
    docBody.classList.toggle("dark_mode");
	}

	return (
	 <nav>
      <div className="container-fluid">
        <div>
        <ul className='d-flex list-unstyled align-items-center justify-content-end gap-3'>
          <li><h5><NavLink to='/' className={({isActive})=>(isActive? 'active':'notactive')}>INTRO</NavLink></h5></li>
          <li><h5><NavLink to='/skill' className={({isActive})=>(isActive? 'active':'notactive')}>ABOUT</NavLink></h5></li>
          <li><h5><NavLink to='/project' className={({isActive})=>(isActive? 'active':'notactive')}>PROJECTS</NavLink></h5></li>
          <li><button onClick={mode}>{flag?<i className="bi bi-sun"></i>:<i className="bi bi-moon-stars"></i>}</button></li>
        </ul>
        </div>
      </div>
    </nav>
	)
}

export default Nav