import * as React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";

const experiences = [
  {
    company: "Softmed Technologies",
    role: "Backend Developer",
    duration: "2026 - Present",
    icon: BusinessCenterIcon,
    description:
      "Building scalable APIs and enterprise applications using .NET Core Web API, WebForms, SQL Server, and modern backend architecture patterns.",
    technologies: [
      ".NET Core",
      "SQL Server",
      "REST API",
      "LINQ",
      "Entity Framework",
    ],
  },
  {
    company: "Ebits Technologies",
    role: "Backend Developer",
    duration: "2025 - 2026",
    icon: BusinessCenterIcon,
    description:
      "Contributed to backend development, database management, API integrations, and collaborated with frontend teams to deliver production-ready applications.",
    technologies: [
      "Node.js",
      "Express",
      "SQL",
      "API Development",
      "JavaScript",
    ],
  },
];

function HighlightCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="work-highlight" data-aos="fade-up">
      <div className="feature-icon">
        <Icon />
      </div>
      <strong>{item.value}</strong>
      <span>{item.label}</span>
    </article>
  );
}

function ExperienceCard({ experience }) {
  const Icon = experience.icon;

  return (
    <article className="experience-card" data-aos="fade-up">
      <div className="experience-marker">
        <Icon />
      </div>
      <div className="experience-content">
        <div className="experience-head">
          <div>
            <p className="eyebrow">{experience.company}</p>
            <h2>{experience.role}</h2>
          </div>
          <span>{experience.duration}</span>
        </div>
        <p>{experience.description}</p>
        <div className="experience-tags">
          {experience.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const { mode } = React.useContext(themeContext);

  return (
    <Element name="work">
      <section
        className={clsx("section-block", mode === "dark" && "surface-dark")}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Career Journey</p>
              <h1>Work Experience</h1>
            </div>
            <p>
              My professional journey as a Backend Developer, building scalable
              APIs, optimizing databases, and delivering production-ready
              applications using modern technologies like .NET Core, Node.js,
              SQL Server, and React.
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.duration}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}
