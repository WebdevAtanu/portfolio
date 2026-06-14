import * as React from "react";
import CodeIcon from "@mui/icons-material/Code";
import HubIcon from "@mui/icons-material/Hub";
import StorageIcon from "@mui/icons-material/Storage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";

function Cards({ title, content, icon }) {
  return (
    <article className="feature-card" data-aos="zoom-in">
      <div className="feature-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

function Field() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="playground">
      <section
        className={clsx("section-block", mode === "dark" && "surface-dark")}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What I build</p>
              <h1>My Playground</h1>
            </div>
            <p>
              I work as a backend developer specializing in .NET Core Web API
              and Webforms at Softmed Technologies. My role involves building
              and maintaining REST APIs, managing databases, and ensuring
              scalable and secure backend systems that power web applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Cards
              title="Frontend (React & Modern UI)"
              icon={<CodeIcon />}
              content="Skilled in building responsive and dynamic web interfaces using React.js, JavaScript, and Tailwind CSS. I focus on creating clean, user-friendly UIs with optimized performance and seamless user experiences."
            />
            <Cards
              title="Backend (.NET Core Web API & Node.js)"
              icon={<HubIcon />}
              content="Experienced in building robust and scalable backend systems using .NET Core and Node.js. Skilled in creating RESTful APIs, handling database operations with SQL and NoSQL databases, and ensuring secure, high-performance server-side logic."
            />
            <Cards
              title="Full Stack (Next.js & MVC)"
              icon={<AccountTreeIcon />}
              content="Proficient in full-stack development with experience in Next.js for server-side rendering and MVC architecture for structured application design. I build end-to-end web applications that integrate frontend interfaces with backend APIs and databases effectively."
            />
            <Cards
              title="Database Management (SQL & NoSQL)"
              icon={<StorageIcon />}
              content="Proficient in working with relational databases like SQL Server and MSSQL, as well as NoSQL databases like MongoDB. Skilled in writing optimized queries, designing efficient schemas, and managing data operations securely and effectively."
            />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Field;
