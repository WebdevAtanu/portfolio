import React from 'react'
function Skill() {
return (
    <div className="grid md:grid-cols-2 mt-5">
      <div>
        <p className='underline underline-offset-4 mb-3 text-xl'>Summary</p>
        <div className="mb-4">
          <ul className='list-none pl-0'>
            <li className='mb-2'>A passionate web developer with a focus on creating seamless user experiences and innovative solutions.</li>
            <li className='mb-2'>Specializing in front-end development, with a passion for creating user-friendly, responsive, scalable and visually appealing web applications.</li>
            <li className='mb-2'>Constantly learning and adapting to new technologies to stay ahead in the ever-evolving digital landscape.</li>
          </ul>
          <p className='underline underline-offset-4 mb-3 text-xl'>My skills</p>
          <table className='w-full mt-3'>
            <tbody>
              <tr>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">HTML</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">CSS</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Javascript</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Bootstrap</p></td>
              </tr>
              <tr>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">React.js</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">TailwindCSS</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Node.js</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Express.js</p></td>
              </tr>
              <tr>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">MongoDB</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Mysql</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Typescript</p></td>
                <td><p className="bg-gray-100 text-sm p-1 mr-1 mb-1 text-center rounded">Next.js</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="pics/dev.gif" alt=""className='w-full'/>
      </div>
    </div>
)
}
export default Skill