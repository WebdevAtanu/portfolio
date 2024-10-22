import React from 'react'
function Skill() {
return (
    <div className="grid md:grid-cols-2 mt-10">
      <div>
        <p className='underline underline-offset-4 mb-3'>Summary</p>
        <div className="mb-4">
          <p className='text-sm'>I am currently expanding my skill set by learning MERN stack to contribute to innovative projects. Trying
            to build a strong foundation in component-based architecture, state management, modern JavaScript
            techniques and Node.js backend technology. Eager to grow and develop in a collaborative team
            environment.</p>
          <p className='underline underline-offset-4 mb-3 mt-5'>My skills</p>
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
        <img src="pics/dev.gif" alt=""className='w-1/2'/>
      </div>
    </div>
)
}
export default Skill