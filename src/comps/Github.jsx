import React,{useState,useEffect} from 'react'
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

function Github() {
	const [data,setData]=useState();
    useEffect(() => {
        fetch('https://api.github.com/users/WebdevAtanu').then(res => res.json()).then(res => setData(res));
    }, [])
    
    return (
		<section id='github' className='pt-5 mb-10 lg:h-screen'>
		<div className="flex gap-2 items-center text-2xl mb-6 text-[#9b24af]">
        <p id='bolder'>Github Stats</p> 
        <FiGithub />
      </div>
  		<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
			<div className='flex md:flex-col gap-4 items-center bg-[#091327] rounded-xl p-5'>
				<img src='pics/github.png' alt="" className='w-1/4 md:w-1/2 rounded-full'/>
				<ul className='md:text-center'>
					<li>{data?.name}</li>
					<li className='text-xs'>{data?.public_repos} Repositories</li>
					<div className="flex gap-2 text-xs">
						<li>{data?.followers} Followers</li>
						<li>{data?.following} Following</li>
					</div>
					<li><a href={data?.html_url} target='_blank' className='link link-primary text-xs'>visit profile</a></li>
				</ul>
			</div>
			<motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="flex flex-col gap-4 items-center justify-center md:col-span-2 bg-[#091327] rounded-xl p-5">
				<div className="shadow">
					<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=WebdevAtanu&layout=compact&theme=catppuccin_mocha&hide_border=false" />
				</div>
				<div className="shadow">
					<img src="https://github-readme-stats.vercel.app/api?username=WebdevAtanu&show_icons=true&include_all_commits=false&theme=dracula&hide_border=false" />
				</div>
			</motion.div>
		</div>
		</section>
	)
}

export default Github