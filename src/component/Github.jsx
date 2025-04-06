import { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import github from '../assets/github.png';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/WebdevAtanu")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          GitHub Activity
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Actively contributing to a variety of personal and collaborative projects on GitHub. My contributions reflect consistent learning and growth, with commits across frontend, backend, and full-stack repositories. I maintain clean, readable code and follow version control best practices, showcasing my dedication to continuous improvement and open-source collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="flex flex-col items-center border border-blue-600 rounded-xl p-6"
        >
          <a href={data?.html_url} target="_blank" rel="noopener noreferrer" className="mb-4">
            <img
              src={github}
              alt="GitHub"
              className="w-20 h-20 rounded-full hover:scale-110 transition duration-300"
            />
          </a>
          <ul className="text-center">
            <li className="text-lg font-semibold">{data?.name}</li>
            <li className="text-sm0">{data?.public_repos} Repositories</li>
            <div className="flex justify-center gap-4 text-sm mt-2">
              <li>{data?.followers} Followers</li>
              <li>{data?.following} Following</li>
            </div>
          </ul>
        </div>

        <div
          className="flex flex-col items-center gap-4 md:col-span-2 border border-blue-600 rounded-xl p-6"
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
        </div>
      </div>
    </div>
  );
}

export default Github;
