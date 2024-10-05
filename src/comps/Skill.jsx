import React from 'react'
function Skill() {
return (
<section>
  <div className="container-fluid g-0" id="aboutMe">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="container-fluid mb-4" id="abouts">
            <ul>
              <li>A passionate web developer with a focus on creating seamless user experiences and innovative solutions.</li>
              <li>Specializing in front-end development, with a passion for creating user-friendly, responsive, scalable and visually appealing web applications.</li>
              <li>Constantly learning and adapting to new technologies to stay ahead in the ever-evolving digital landscape.</li>
              <li>My Techstack includes-</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <td><p className="techStack">HTML</p></td>
                  <td><p className="techStack">CSS</p></td>
                  <td><p className="techStack">Javascript</p></td>
                  <td><p className="techStack">Bootstrap</p></td>
                </tr>
                <tr>
                  <td><p className="techStack">React.js</p></td>
                  <td><p className="techStack">TailwindCSS</p></td>
                  <td><p className="techStack">Node.js</p></td>
                  <td><p className="techStack">Express.js</p></td>
                </tr>
                <tr>
                  <td><p className="techStack">MongoDB</p></td>
                  <td><p className="techStack">Mysql</p></td>
                  <td><p className="techStack">Typescript</p></td>
                  <td><p className="techStack">Next.js</p></td>
                </tr>
              </tbody>
            </table>
            <div className="text-center" id="viewcv">
              <a href="CV.pdf" target="_blank" download><button className="btn mb-2 mt-4">View CV</button></a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
            <img src="pics/dev.gif" alt="" id="me"/>
          </div>  
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default Skill