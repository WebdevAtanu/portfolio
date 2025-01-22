import React from 'react'
import { motion } from "framer-motion";

function Do() {
const parentVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const childVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Card(props) {
  return (
    <motion.div variants={childVariant}>
      <div className="card bg-[#091327] w-full h-full flex flex-col justify-between px-4 py-6 drop-shadow-sm">
        <div className='flex flex-col gap-5'>
          <figure>
            <img src={props.image} alt="image" className='w-1/3 rounded-full'/>
          </figure>
          <div className='text-center mt-3 text-white'>
            <h2 className="mb-4 text-lg">{props.title}</h2>
            <p className='mb-3 text-sm'>{props.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

return (
    <div className="pt-5 md:h-auto lg:h-screen" id='do'>
      <p className='text-center mb-10 mt-10 md:mt-0 text-2xl tracking-wider text-[#f70853]' id='bolder'>Things I Do</p>
      <motion.div variants={parentVariant}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card image='pics/logo.png' title='Front-End' desc='Proficient in frontend development with experience in React to create responsive user interfaces, ensuring a seamless experience across devices and browsers.'/>
        <Card image='pics/logo.png' title='Back-End' desc='Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance.'/>
        <Card image='pics/logo.png' title='Database' desc='Proficient in database management, ensuring data integrity and performance optimization in relational and NoSQL databases.'/>
      </motion.div>
    </div>
    )
}
export default Do