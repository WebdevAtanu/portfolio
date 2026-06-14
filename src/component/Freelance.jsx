import * as React from "react";
import Button from "@mui/material/Button";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";
import freelance from "../assets/freelance.jpg";

function Cards({ title, image, content, link }) {
  return (
    <article className="freelance-card" data-aos="zoom-in">
      <img src={image} alt={`${title} preview`} />
      <div>
        <p className="eyebrow">Client-style demo</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="contained">View Demo</Button>
        </a>
      </div>
    </article>
  );
}

function Freelance() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="freelance">
      <section
        className={clsx("section-block", mode === "dark" && "surface-dark")}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Available for work</p>
              <h1>Freelance Demo</h1>
            </div>
            <p>
              I am available for freelance projects specializing in React and
              Node.js. With hands-on experience in building full-stack web
              applications, I can help develop responsive user interfaces,
              efficient APIs, and seamless integration between frontend and
              backend systems.
            </p>
          </div>
          <div className="w-full">
            <Cards
              image={freelance}
              title="Everything Everywhere (React)"
              content="Everything Everywhere is a React-based freelance demo showcasing a sleek, responsive interface for browsing diverse content categories. It demonstrates component architecture, dynamic routing, and fast frontend interactions."
              link="https://everything-everywhere-nu.vercel.app"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Freelance;
