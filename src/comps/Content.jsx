import React from 'react'
import Card from './Card'
function Content() {
return (
    <div className="mt-10">
      <p className='text-center mb-5 mt-10 text-xl tracking-wider' id='bolder'>Things I Do</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card image='pics/logo.png' title='Front-End' desc='Proficient in frontend development with experience in React to create responsive user interfaces, ensuring a seamless experience across devices and browsers.' badge1='React.js' badge2='Tailwind'/>
        <Card image='pics/logo.png' title='Back-End' desc='Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance.' badge1='Node.js' badge2='Express.js'/>
        <Card image='pics/logo.png' title='Database' desc='Proficient in database management, ensuring data integrity and performance optimization in relational and NoSQL databases.' badge1='MongoDB' badge2='MySQL'/>
      </div>
    </div>
)
}
export default Content