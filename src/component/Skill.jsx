import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";

function Skills(props) {
  return (
    <article className="skill-pill">
      <div className="flex items-center justify-between gap-3">
        <p>{props.text}</p>
        <props.logo className={`${props.className} text-xl`} />
      </div>
      <div className="text-mute-500 text-sm mb-1 mt-1">{props.description}</div>
      <div className="skill-meter" aria-label={`${props.text} ${props.value}%`}>
        <span style={{ width: `${props.value}%` }}></span>
      </div>
    </article>
  );
}
function Skill() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="skill">
      <section
        className={clsx("section-block", mode === "dark" && "surface-dark")}
      >
        <div className="container px-5 py-26 mx-auto">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Toolkit</p>
              <h1>My Skills</h1>
            </div>
            <p>
              Skilled in building full-stack web applications with a strong
              focus on backend development using .NET Core Web API and Node.js.
              Experienced in creating dynamic UIs with React and Tailwind CSS.
              Proficient in managing both SQL and NoSQL databases, ensuring
              secure, scalable, and efficient systems.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-aos="zoom-in"
          >
            <Skills
              text="JavaScript"
              logo={RiJavascriptFill}
              value={90}
              description="Building interactive web applications with modern JavaScript and ES6+ features."
            />

            <Skills
              text="React"
              logo={FaReact}
              value={90}
              description="Creating responsive and reusable user interfaces using React and its ecosystem."
            />

            <Skills
              text="Tailwind CSS"
              logo={RiTailwindCssFill}
              value={85}
              description="Designing modern, responsive layouts quickly with utility-first CSS."
            />

            <Skills
              text="Node.js"
              logo={FaNodeJs}
              value={85}
              description="Developing scalable backend services, APIs, and server-side applications."
            />

            <Skills
              text="MongoDB"
              logo={DiMongodb}
              value={80}
              description="Managing flexible NoSQL databases for modern web applications."
            />

            <Skills
              text="SQL Server"
              logo={DiMsqlServer}
              value={85}
              description="Designing databases, writing optimized queries, and ensuring data integrity."
            />

            <Skills
              text="Next.js"
              logo={RiNextjsFill}
              value={75}
              description="Building performant React applications with server-side rendering and routing."
            />

            <Skills
              text=".NET Core"
              logo={AiOutlineDotNet}
              value={90}
              description="Developing secure, enterprise-grade APIs and backend systems using .NET Core."
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
export default Skill;
