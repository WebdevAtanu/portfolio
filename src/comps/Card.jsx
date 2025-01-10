import React from 'react';
import { motion } from "framer-motion";

function Card(props) {
	return (
		<motion.div initial={{ y: 100,opacity: 0 }} whileInView={{ y: 0,opacity: 1 }} viewport={{ once: true }}  transition={{
    			duration: 1,
   				ease: "easeInOut"
   			}} className="px-12">
			<div className="card bg-[#0c1425] w-full h-full flex flex-col justify-between p-3 drop-shadow-sm">
				<div className='flex flex-col gap-5'>
					<figure>
						<img src={props.image} alt="image" className='w-1/2 rounded-full'/>
					</figure>
					<div className='text-center mt-3 text-white'>
						<h2 className="text-xl mb-5">{props.title}</h2>
						<p className='text-sm mb-3'>{props.desc}</p>
					</div>
				</div>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">{props.badge1}</div>
					{
					props.badge2?<div className="badge badge-outline">{props.badge2}</div>:null
					}
				</div>
			</div>
		</motion.div>
	)
}

export default Card