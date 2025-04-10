import React, { useState, useEffect } from "react";
import github from "../assets/github.png";
import clsx from "clsx";
import { themeContext } from "../App";
function Github() {
  const [data, setData] = useState(null);
  const { mode } = React.useContext(themeContext);

  useEffect(() => {
    fetch("https://api.github.com/users/WebdevAtanu")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            className={clsx(
              "sm:text-3xl text-2xl font-medium title-font mb-2",
              mode == "dark" ? " text-gray-300" : "text-gray-600"
            )}
          >
            GitHub Activity
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p
          className={clsx(
            "lg:w-1/2 w-full leading-relaxed",
            mode == "dark" ? " text-gray-300" : "text-gray-600"
          )}
        >
          Actively contributing to a variety of personal and collaborative
          projects on GitHub. My contributions reflect consistent learning and
          growth, with commits across frontend, backend, and full-stack
          repositories. I maintain clean, readable code and follow version
          control best practices, showcasing my dedication to continuous
          improvement and open-source collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center outline outline-gray-300 shadow rounded-xl p-6">
          <a
            href={data?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-20 h-20 rounded-full hover:scale-110 transition duration-300"
            />
          </a>
          <ul
            className={clsx(
              "text-center",
              mode == "dark" ? " text-gray-300" : null
            )}
          >
            <li className="text-lg">{data?.name}</li>
            <li className="text-sm0">{data?.public_repos} Repositories</li>
            <div className="flex justify-center gap-4 text-sm mt-2">
              <li>{data?.followers} Followers</li>
              <li>{data?.following} Following</li>
            </div>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 md:col-span-2 outline outline-gray-300 shadow rounded-xl p-6">
          <div className="shadow-lg" data-aos="flip-left">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=WebdevAtanu&layout=compact&theme=catppuccin_mocha&hide_border=false"
              alt="Top Languages"
              className=""
            />
          </div>
          <div className="shadow-lg" data-aos="flip-right">
            <img
              src="https://github-readme-stats.vercel.app/api?username=WebdevAtanu&show_icons=true&include_all_commits=false&theme=dracula&hide_border=false"
              alt="GitHub Stats"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
