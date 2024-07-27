import React from 'react'

function Skill() {
	return (
	<section>
      <div className="container-fluid g-0" id="aboutMe">
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="container-fluid" id="abouts">
                <ul>
                  <li>A passionate web developer with a focus on creating seamless user experiences and innovative solutions.</li>
                  <li>Specializing in front-end development, with a passion for creating user-friendly, responsive, scalable and visually appealing web applications.</li>
                  <li>Constantly learning and adapting to new technologies to stay ahead in the ever-evolving digital landscape.</li>
                </ul>
                <p><span className="techStack">#CSS</span><span className="techStack">#Javascript</span><span className="techStack">#Bootstrap</span><span className="techStack">#TailwindCSS</span></p>
                <p><span className="techStack">#jQuery</span><span className="techStack">#Node.js</span><span className="techStack">#Express.js</span><span className="techStack">#React.js</span><span className="techStack">#EJS</span></p>
                <p><span className="techStack">#SQL</span><span className="techStack">#MongoDB</span><span className="techStack">#Git</span><span className="techStack">#GitHub</span></p>
                <div className="text-center" id="viewcv">
                  <a href="cv.pdf" download target="_blank"><button className="btn mb-2 mt-2">View CV</button></a>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
                <img src="pics/me.jpg" alt="" id="me"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default Skill