import React from 'react';
import {Link} from 'react-router-dom'

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
          <li><h5><Link to='/'>INTRO</Link></h5></li>
          <li><h5><Link to='/skill'>ABOUT</Link></h5></li>
          <li><h5><Link to='/project'>PROJECTS</Link></h5></li>
          <li><button onClick={mode}><i className="bi bi-moon-stars"></i></button></li>
        </ul>
        </div>
      </div>
    </nav>
	)
}

export default Nav