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
    <section
      className={clsx("section-block", mode === "dark" && "surface-dark")}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Open source trail</p>
            <h1>GitHub Activity</h1>
          </div>
          <p>
            Actively contributing to personal and collaborative projects across
            frontend, backend, and full-stack repositories. I keep the code
            readable, versioned, and shaped for steady improvement.
          </p>
        </div>

        <div className="github-grid">
          <a
            href={data?.html_url || "https://github.com/WebdevAtanu"}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile"
          >
            <img src={github} alt="GitHub" />
            <div>
              <p className="eyebrow">GitHub profile</p>
              <h2>{data?.name || "WebdevAtanu"}</h2>
            </div>
            <dl>
              <div>
                <dt>{data?.public_repos ?? "--"}</dt>
                <dd>Repositories</dd>
              </div>
              <div>
                <dt>{data?.followers ?? "--"}</dt>
                <dd>Followers</dd>
              </div>
              <div>
                <dt>{data?.following ?? "--"}</dt>
                <dd>Following</dd>
              </div>
            </dl>
          </a>

          <div className="github-stats">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=WebdevAtanu&layout=compact&theme=catppuccin_mocha&hide_border=true"
              alt="Top Languages"
              data-aos="flip-left"
            />
            <img
              src="https://github-readme-stats.vercel.app/api?username=WebdevAtanu&show_icons=true&include_all_commits=false&theme=dracula&hide_border=true"
              alt="GitHub Stats"
              data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
