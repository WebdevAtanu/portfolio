import React from 'react'
import { motion } from "framer-motion";

function Footer() {
	return (
    <motion.div initial={{ y: 20,opacity: 0 }} whileInView={{ y: 0,opacity: 1 }} viewport={{ once: true }}  transition={{
      duration: 0.5,
      ease: "easeInOut"
      }}>
      <div className="mt-6">
      <p className='mb-3 text-xl tracking-wider text-center text-[#f70853]' id='bolder'>Summary</p>
      <p className='text-sm'>Motivated and detail-oriented web developer with a solid foundation in the MERN stack (MongoDB, Express, React, Node.js) and hands-on experience building dynamic, scalable web applications. Currently strengthening expertise in component-based architecture, state management, and modern JavaScript techniques. Expanding skills in Next.js to leverage server-side rendering and optimize performance, while actively developing knowledge in cloud computing with AWS and database management. Dedicated to delivering innovative, user-centric solutions and continuously evolving to meet the demands of the ever-changing tech landscape. Passionate about collaboration and driving impact through technology.</p>
      </div>
      <h6 className="mt-12 text-xs text-center">Made with <span className="text-red-500">❤</span> and React.js</h6>
    </motion.div>
	)
}

export default Footer