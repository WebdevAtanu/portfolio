import React from 'react'

function Content() {
	return (
	<section>
      <h2 className="text-center mb-3">Things I do</h2>
      <div className="container mt-2 d-flex align-items-center justify-content-center">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/front.jpg" alt=""/>
              <h6>Front-End</h6>
              <p className="m-0">Front-end with libraries as well as pure HTML, CSS and Javascript.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/cms.jpg" alt=""/>
              <h6>Wordpress</h6>
              <p className="m-0">Wordpress- content management system.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/back.jpg" alt=""/>
              <h6>Back-end</h6>
              <p className="m-0">Familiar with PHP, Node.js, Express and APIs.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/db.jpg" alt=""/>
              <h6>DB Query</h6>
              <p className="m-0">Familiar with MongoDB and MySQL queries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default Content