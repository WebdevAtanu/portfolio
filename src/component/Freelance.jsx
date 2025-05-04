import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import { Element } from "react-scroll";
import clsx from "clsx";
import { themeContext } from "../App";
import freelance from "../assets/freelance.jpg";

function Cards({ title, image, content,link }) {
  const { mode } = React.useContext(themeContext);
  return (
    <Card className="w-full" data-aos="zoom-in">
      <CardMedia
        component="img"
        className="h-1/3 mb-4"
        image={image}
        alt="image"
      />
      <CardContent>
      <h2 className="mb-4 text-lg">{title}</h2>
        <p
          className={clsx(
            "leading-relaxed",
            mode == "dark" ? " text-gray-300" : "text-gray-600"
          )}
        >
          {content}
        </p>
      </CardContent>
      <div className="p-4">
      <a href={link} target="_blank"> <Button variant="contained" className="w-full">View Demo</Button></a>
      </div>
      
    </Card>
  );
}

function Freelance() {
  const { mode } = React.useContext(themeContext);
  return (
    <Element name="freelance">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                className={clsx(
                  "sm:text-3xl text-2xl font-medium title-font mb-2",
                  mode == "dark" ? " text-gray-300" : null
                )}
              >
                Freelance Demo
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p
              className={clsx(
                "lg:w-1/2 w-full leading-relaxed",
                mode == "dark" ? " text-gray-300" : null
              )}
            >
              I am available for freelance projects specializing in React and Node.js. With hands-on experience in building full-stack web applications, I can help develop responsive user interfaces, efficient APIs, and seamless integration between frontend and backend systems. Whether it's creating a dynamic website, an admin dashboard, or a custom web app.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Cards
              image={freelance}
              title="Everything Everywhere (React)"
              content="Everything Everywhere is a React-based freelance demo showcasing a sleek, responsive interface for browsing diverse content categories. Built with modern web technologies, the app demonstrates my skills in component-based architecture, dynamic routing, and state management. It offers a smooth user experience with clean design and fast performance, making it a great example of my frontend development capabilities."
              link="https://everything-everywhere-nu.vercel.app"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Freelance;
