import React from 'react';
import Content from './Content';

function Intro() {
	return (
    <>
	<section>
      <div className="container mb-3">
        <div className="container g-0 mt-3" id="intro">
          <h6 className="mb-0">Hey there, I'm</h6>
          <h1 className="m-0">ATANU MONDAL</h1>
          <h6 className='mb-4'>Front-end designer & developer</h6>
          <div className='d-flex gap-5 justify-content-between'>
          <p>I am seeking a front-end developer position to utilize my skills in web development technologies to contribute to innovative projects.</p>
          <div className="social d-flex flex-column">
            <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/WebdevAtanu" target="_blank"><i className="bi bi-github"></i></a>
            <a href="https://youtube.com/@Code_While_Gaming?si=DYZPusvXhZbqbbcz" target="_blank"><i className="bi bi-youtube"></i></a>
            <a href="https://www.instagram.com/noob_web_dev?igsh=MXIzcTA4M2FqanZqMw==" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="https://codepen.io/AmatureDev" target="_blank"><i className="bi bi-code-square"></i></a>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Content/>
    </>
	)
}

export default Intro