import React from 'react'
function Content() {
return (
  <div className="mt-5">
    <p className='underline underline-offset-4 mb-3 text-xl'>Things i do</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <div className="card bg-base-100 w-full border border-black flex flex-col justify-between">
        <figure>
          <img src="pics/do/front.jpg" alt="image" className='w-full aspect-video'/>
        </figure>
        <div className="p-3">
          <h2 className="card-title">Front-End</h2>
          <p>Proficient in frontend development with experience in React to create responsive user interfaces, ensuring a seamless experience across devices and browsers.</p>
          <div className="card-actions justify-end mt-5">
            <div className="badge badge-outline">React.js</div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full border border-black flex flex-col justify-between">
        <figure>
          <img src="pics/do/cms.jpg" alt="image" className='w-full aspect-video object-cover'/>
        </figure>
        <div className="p-3">
          <h2 className="card-title">CMS</h2>
          <p>Proficient in content management systems, implementing themes and plugins, optimizing site performance to create user-friendly and responsive websites.</p>
          <div className="card-actions justify-end mt-5">
            <div className="badge badge-outline">Wordpress</div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full border border-black flex flex-col justify-between">
        <figure>
          <img src="pics/do/back.jpg" alt="image" className='w-full aspect-video object-cover'/>
        </figure>
        <div className="p-3">
          <h2 className="card-title">Back-End</h2>
          <p>Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance.</p>
          <div className="card-actions justify-end mt-5">
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">Express.js</div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full border border-black flex flex-col justify-between">
        <figure>
          <img src="pics/do/db.jpg" alt="image" className='w-full aspect-video object-cover'/>
        </figure>
        <div className="p-3">
          <h2 className="card-title">Database</h2>
          <p>Proficient in database management, ensuring data integrity and performance optimization in relational and NoSQL databases.</p>
          <div className="card-actions justify-end mt-5">
            <div className="badge badge-outline">MongoDB</div>
            <div className="badge badge-outline">MySQL</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
export default Content