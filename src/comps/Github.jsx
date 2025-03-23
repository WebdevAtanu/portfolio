import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  BsGithub } from "react-icons/bs";

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/WebdevAtanu")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <section id="github" className="pt-5 mb-10 lg:h-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-2xl font-semibold mb-6 text-indigo-500">
        <p>GitHub Stats</p>
        <BsGithub className="text-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* GitHub Profile Card */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center bg-gray-900 border border-indigo-600 rounded-xl p-6"
        >
          <a href={data?.html_url} target="_blank" rel="noopener noreferrer" className="mb-4">
            <img
              src="pics/github.png"
              alt="GitHub"
              className="w-20 h-20 rounded-full hover:scale-110 transition duration-300"
            />
          </a>
          <ul className="text-center text-white">
            <li className="text-lg font-semibold">{data?.name}</li>
            <li className="text-sm text-gray-400">{data?.public_repos} Repositories</li>
            <div className="flex justify-center gap-4 text-sm text-gray-400 mt-2">
              <li>{data?.followers} Followers</li>
              <li>{data?.following} Following</li>
            </div>
          </ul>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 md:col-span-2 bg-gray-900 border border-indigo-600 rounded-xl p-6"
        >
          <div className="shadow-lg">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=WebdevAtanu&layout=compact&theme=catppuccin_mocha&hide_border=false"
              alt="Top Languages"
              className=""
            />
          </div>
          <div className="shadow-lg">
            <img
              src="https://github-readme-stats.vercel.app/api?username=WebdevAtanu&show_icons=true&include_all_commits=false&theme=dracula&hide_border=false"
              alt="GitHub Stats"
              className=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Github;
