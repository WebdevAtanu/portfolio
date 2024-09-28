import React from 'react'
function Content() {
return (
<>
  <h5 className="text-center mb-3">Things I do</h5>
  <div className="container mt-2 d-flex align-items-center justify-content-center">
    <div className="row g-3">
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/front.jpg" alt=""/>
              <h6>Front-End</h6>
              <p className="m-0">I code front-end with libraries as well as pure HTML, CSS and JavaScript.</p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/cms.jpg" alt=""/>
              <h6>Wordpress</h6>
              <p className="m-0">I can work with wordpress content management system.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/back.jpg" alt=""/>
              <h6>Back-end</h6>
              <p className="m-0">I'm familiar with PHP, Node.js, Express and APIs.</p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center align-items-center flex-column p-1 my_card">
              <img src="pics/do/db.jpg" alt=""/>
              <h6>DB Query</h6>
              <p className="m-0">Used to with MongoDB and MySQL queries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default Content