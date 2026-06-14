import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";

function ProjectCard({ title, tech, image, content, description, live, git }) {
  return (
    <article
      className="project-card flex flex-col justify-between"
      data-aos="fade-up"
    >
      <div>
        <div className="project-media">
          <img src={image} alt={`${title} preview`} />
        </div>
        <div className="project-body">
          <div>
            <p className="project-tech">{tech}</p>
            <h2>{title}</h2>
            <h3>{content}</h3>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 p-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            <LanguageIcon />
            Live Demo
          </a>
        )}

        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
        >
          <GitHubIcon />
          Source Code
        </a>
      </div>
    </article>
  );
}

export default function Project() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="project">
      <section
        className={clsx("section-block", mode === "dark" && "surface-dark")}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected builds</p>
              <h1>Practice Projects</h1>
            </div>
            <p>
              I've worked on a variety of web development projects that showcase
              both frontend and backend skills. These include dynamic
              React-based interfaces, RESTful APIs using Node.js, and fully
              functional applications with integrated database systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ProjectCard
              title="Paytracker"
              image="site/payroll/home.png"
              live=""
              git="https://github.com/WebdevAtanu/pay-track"
              content="Dotnet MVC Payroll Management System"
              description="Developed a .NET MVC application for managing payroll information with a focus on user-friendly interfaces and face recognition systems."
              tech="Dotnet, MVC"
            />

            <ProjectCard
              title="Analytic Dashboard"
              image="site/streamlit/home.png"
              live=""
              git="https://github.com/WebdevAtanu/streamlit-dashboard"
              content="Python Streamlit Dashboard for Data Visualization"
              description="Developed a Streamlit dashboard for data visualization using Python, featuring interactive charts and real-time data updates."
              tech="Python, Streamlit"
            />

            <ProjectCard
              title="AI Reply"
              image="site/replyai/home.png"
              live="https://reply-ai-ashy.vercel.app/"
              git="https://github.com/WebdevAtanu/replyai"
              content="Email reply generator that creates context-aware responses in multiple tones."
              description="Developed an AI-powered email reply generator that creates context-aware responses in multiple tones."
              tech="React.js, Gemini AI"
            />

            <ProjectCard
              title="Dev Diagram"
              image="site/devdiagram/home.png"
              live="https://dev-diagram.vercel.app/"
              git="https://github.com/WebdevAtanu/dev-diagram"
              content="React App for Visualizing Development Workflows"
              description="Dev Diagram is a React-based application that transforms development ideas into structured flowchart diagrams, enhancing project planning and communication."
              tech="React.js, Mermaid.js"
            />

            <ProjectCard
              title="Shopper"
              image="site/shopper/home.jpeg"
              live="https://shopper-ecommerce.onrender.com/"
              git="https://github.com/WebdevAtanu/shopper-ecommerce"
              content="MERN Stack Shopping App with ShadCN UI"
              description="Built a shopping application with authentication, product and cart workflows, CRUD operations, and a polished interface focused on smooth navigation."
              tech="MERN stack, ShadCN UI"
            />

            <ProjectCard
              title="Techdown Blog"
              image="site/blog/home.jpeg"
              live="https://blog-appwrite-pi.vercel.app/"
              git="https://github.com/WebdevAtanu/blog-appwrite"
              content="Dynamic Blog Platform with React & Appwrite"
              description="Created a blog platform with React, DaisyUI, Appwrite authentication, database operations, post creation, and realtime content updates."
              tech="React.js with Appwrite"
            />

            <ProjectCard
              title="Ecommerce"
              image="site/ecom/home.jpeg"
              live="https://lifestyle-ecommerce-project.vercel.app/"
              git="https://github.com/WebdevAtanu/lifestyle-ecommerce"
              content="Dynamic Ecommerce Platform with React"
              description="Implemented product listings, detailed views, realtime search, cart updates, and React Router navigation for a responsive shopping experience."
              tech="React.js"
            />

            <ProjectCard
              title="Quiz Time"
              image="site/quiz/home.jpeg"
              live="https://quiz-app-alpha-lac.vercel.app/"
              git="https://github.com/WebdevAtanu/quiz-app"
              content="React Quiz App with Topic Selection"
              description="Built an interactive quiz app with topic selection, instant answer feedback, score calculation, and a responsive interface."
              tech="React.js"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
