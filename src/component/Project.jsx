import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function ProjectCard({ title, tech, image, content, description, live, git }) {
  const [expanded, setExpanded] = React.useState(false);
  const { mode } = React.useContext(themeContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full" data-aos="fade-up">
      <h1 className="mb-1 text-lg px-2">{title}</h1>
      <h4
        className={clsx(
          "mb-1 px-2",
          mode == "dark" ? " text-gray-300" : "text-gray-600"
        )}
      >
        {tech}
      </h4>
      <CardMedia component="img" height="170" image={image} alt="cover" />
      <CardContent>
        <h5
          className={clsx(
            "",
            mode == "dark" ? " text-gray-300" : "text-gray-600"
          )}
        >
          {content}
        </h5>
      </CardContent>
      <CardActions disableSpacing>
        <a href={live} target="_blank">
          <IconButton aria-label="live">
            <OpenInNewIcon className="text-blue-500" />
          </IconButton>
        </a>
        <a href={git} target="_blank">
          <IconButton aria-label="github">
            <GitHubIcon className="text-blue-500" />
          </IconButton>
        </a>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p
            className={clsx(
              "",
              mode == "dark" ? " text-gray-300" : "text-gray-600"
            )}
          >
            {description}
          </p>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default function Project() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="project">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              className={clsx(
                "sm:text-3xl text-2xl font-medium title-font mb-2",
                mode == "dark" ? " text-gray-300" : null
              )}
            >
              Practice Projects
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p
            className={clsx(
              "lg:w-1/2 w-full leading-relaxed",
              mode == "dark" ? " text-gray-300" : null
            )}
          >
            I’ve worked on a variety of web development projects that showcase
            both frontend and backend skills. These include dynamic React-based
            interfaces, RESTful APIs using Node.js, and fully functional
            applications with integrated database systems. My projects reflect
            practical implementations of clean architecture, responsive design,
            and real-world problem solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard
            title="Shopper"
            image="site/ebook/home.png"
            live="https://ebook-mern.vercel.app/"
            git="https://github.com/WebdevAtanu/ebook-mern"
            content="MERN eBook App with Clerk Authentication"
            description="Developed an eBook application using the MERN stack (MongoDB, Express, React, Node.js) integrated with Clerk for user authentication. Users can sign up, log in securely, browse eBooks, and view detailed content. The app offers protected routes, ensuring only authenticated users can access certain features. It provides a smooth and responsive user experience with clean navigation and role-based access."
            tech="MERN stack, ShadCN UI"
          />

          <ProjectCard
            title="Shopper"
            image="site/shopper/home.jpeg"
            live="https://shopper-ecommerce.onrender.com/"
            git="https://github.com/WebdevAtanu/shopper-ecommerce"
            content="MERN Stack Shopping App with ShadCN UI"
            description="Built a full-featured shopping application using the MERN stack (MongoDB, Express.js, React, Node.js) with a sleek and accessible UI powered by ShadCN. The app includes seamless user authentication, efficient CRUD operations, and real-time updates for product and cart management. Designed with performance and user experience in mind, ensuring smooth navigation and responsive interactions across devices."
            tech="MERN stack, ShadCN UI"
          />

          <ProjectCard
            title="Techdown Blog"
            image="site/blog/home.jpeg"
            live="https://blog-appwrite-pi.vercel.app/"
            git="https://github.com/WebdevAtanu/blog-appwrite"
            content="Dynamic Blog Platform with React & Appwrite"
            description="Developed a responsive and feature-rich blog platform using React and DaisyUI for a clean, modern UI. Integrated Appwrite to handle user authentication, database operations, and real-time data updates. The application allows users to sign up, log in, create posts, and see content updates instantly without refreshing the page—demonstrating full-stack functionality and real-time interaction."
            tech="React.js with Appwrite"
          />

          <ProjectCard
            title="Ecommerce"
            image="site/ecom/home.jpeg"
            live="https://lifestyle-ecommerce-project.vercel.app/"
            git="https://github.com/WebdevAtanu/lifestyle-ecommerce"
            content="Dynamic Ecommerce Platform with React"
            description="The eCommerce application includes features like product listing with detailed views, real-time search functionality, and a shopping cart system that allows users to add, remove, and update items. It uses React Router for smooth navigation between pages and provides a responsive, user-friendly interface for an enhanced shopping experience."
            tech="React.js"
          />

          <ProjectCard
            title="Quiz Time"
            image="site/quiz/home.jpeg"
            live="https://quiz-app-alpha-lac.vercel.app/"
            git="https://github.com/WebdevAtanu/quiz-app"
            content="React Quiz App with Topic Selection and Instant Feedback"
            description="I built a Quiz App using React where users can select a topic and answer multiple-choice questions. The app provides immediate feedback by highlighting correct and incorrect answers with different colors. At the end of the quiz, the user receives a calculated score based on their performance. The interface is interactive and responsive, ensuring a smooth and engaging user experience."
            tech="React.js"
          />
        </div>
      </div>
    </Element>
  );
}
