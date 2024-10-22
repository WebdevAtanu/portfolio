import React from 'react'

function Card(props) {
	return (
		<div className="card bg-base-100 w-full border border-gray-500 flex flex-col gap-3 justify-between p-3">
			<div className='flex flex-col gap-3'>
				<figure>
					<img src={props.image} alt="image" className='w-full aspect-video'/>
				</figure>
				<hr/>
				<div>
					<h2 className="text-xl">{props.title}</h2>
					<p className='text-sm'>{props.desc}</p>
				</div>
			</div>
			<div className="card-actions justify-end">
				<div className="badge badge-outline">{props.badge1}</div>
				{
				props.badge2?<div className="badge badge-outline">{props.badge2}</div>:null
				}
			</div>
		</div>
	)
}

export default Card