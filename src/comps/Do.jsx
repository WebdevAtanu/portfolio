import React from 'react'
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child animations
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: 20, // Moves the child down
  },
  visible: {
    opacity: 1,
    y: 0, // Moves the child back to position
    transition: {
      duration: 0.5,
    },
  },
};

function Card(props) {
  return (
    <motion.div variants={childVariant} className="px-12">
      <div className="card bg-[#0c1425] w-full h-full flex flex-col justify-between p-3 drop-shadow-sm">
        <div className='flex flex-col gap-5'>
          <figure>
            <img src={props.image} alt="image" className='w-1/3 rounded-full'/>
          </figure>
          <div className='text-center mt-3 text-white'>
            <h2 className="mb-4 text-xl">{props.title}</h2>
            <p className='mb-3'>{props.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Do() {
return (
    <div className="md:pt-20 pt-10 md:h-screen" id='do'>
      <p className='text-center mb-5 text-2xl tracking-wider' id='bolder'>Things I Do</p>
      <motion.div variants={parentVariant}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card image='pics/logo.png' title='Front-End' desc='Proficient in frontend development with experience in React to create responsive user interfaces, ensuring a seamless experience across devices and browsers.'/>
        <Card image='pics/logo.png' title='Back-End' desc='Proficient in building backend APIs using Node.js and Express, with a focus on scalability and performance.'/>
        <Card image='pics/logo.png' title='Database' desc='Proficient in database management, ensuring data integrity and performance optimization in relational and NoSQL databases.'/>
      </motion.div>
    </div>
)
}
export default Do