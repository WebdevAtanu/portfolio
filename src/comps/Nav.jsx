import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav() {
	const mode=()=> {
    let docBody = document.body;
    docBody.classList.toggle("dark_mode");
	}

	return (
	 <nav>
      <div className="container-fluid">
        <div>
        <ul className='d-flex list-unstyled align-items-center justify-content-end gap-3'>
          <li><h5><NavLink to='/' style={({isActive})=>({color:isActive?'#8169df':'#00BCD4'})}>INTRO</NavLink></h5></li>
          <li><h5><NavLink to='/skill' style={({isActive})=>({color:isActive?'#8169df':'#00BCD4'})}>ABOUT</NavLink></h5></li>
          <li><h5><NavLink to='/project' style={({isActive})=>({color:isActive?'#8169df':'#00BCD4'})}>PROJECTS</NavLink></h5></li>
          <li><button onClick={mode}><i className="bi bi-moon-stars"></i></button></li>
        </ul>
        </div>
      </div>
    </nav>
	)
}

export default Nav