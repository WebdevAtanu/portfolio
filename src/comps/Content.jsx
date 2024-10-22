import React from 'react'
import Card from './Card'
function Content() {
return (
    <div className="mt-10">
      <p className='underline underline-offset-4 mb-3'>Things i do</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Card image='pics/do/front.jpg' title='Front-End' desc='Proficient in frontend development with experience in React to create responsive user interfaces, ensuring a seamless experience across devices and browsers.' badge1='React.js' badge2='Tailwind'/>
        <Card image='pics/do/cms.jpg' title='CMS' desc='Proficient in content management systems, implementing themes and plugins, optimizing site performance to create user-friendly and responsive websites.' badge1='Wordpress'/>
        <Card image='pics/do/back.jpg' title='Back-End' desc='Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance.' badge1='Node.js' badge2='Express.js'/>
        <Card image='pics/do/db.jpg' title='Database' desc='Proficient in database management, ensuring data integrity and performance optimization in relational and NoSQL databases.' badge1='MongoDB' badge2='MySQL'/>
      </div>
    </div>
)
}
export default Content