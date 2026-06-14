import React from "react";
import Button from "@mui/material/Button";
import me from "../assets/me.png";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import clsx from "clsx";
import { themeContext } from "../App";
import { Link } from "react-scroll";

function Intro() {
  const { mode } = React.useContext(themeContext);
  return (
    <section
      className={clsx("hero-section", mode === "dark" && "surface-dark")}
      id="intro"
    >
      <div className="container mx-auto grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Full-stack developer</p>
          <h1 className="hero-title">Atanu Mondal</h1>
          <p className="hero-copy">
            I build production-minded web applications with React, Node.js, .NET
            Core Web API, MongoDB, and SQL Server. My sweet spot is turning
            practical product needs into clean interfaces, reliable APIs, and
            data flows that feel effortless to use.
          </p>
          <div className="hero-actions">
            <Link to="project" smooth={true} duration={500}>
              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                View projects
              </Button>
            </Link>
            <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <img className="portrait-image" alt="Atanu Mondal" src={me} />
          <div className="availability-note">
            <span></span>
            Open to frontend, backend, and full-stack work
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
