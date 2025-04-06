import React from "react";
import Button from "@mui/material/Button";
import me from "../assets/me.jpg";

function Intro() {
  return (
    <section className="text-gray-600" id="intro">
      <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="text-sm text-gray-500">Hey there, I'm</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Atanu Mondal
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a web developer specializing in the MERN stack, .NET Core, and
            modern web solutions. I excel at building dynamic, responsive user
            interfaces with React, HTML, and CSS, ensuring seamless user
            experiences. On the backend, I develop robust APIs and scalable
            applications using Node.js, Express, and .NET Core. With experience
            in both MongoDB and MSSQL, I ensure efficient data management and
            optimized performance for high-quality web applications.
          </p>
          <p className="mb-8 leading-relaxed">
            I'm passionate about writing clean, maintainable code and following
            best practices for performance and security. I thrive in
            collaborative environments, contribute effectively to team projects,
            and adapt quickly to new technologies. Whether it's building
            full-stack applications or optimizing existing systems, I'm driven
            by a desire to deliver efficient and reliable solutions that make an
            impact.
          </p>
          <div className="flex justify-center">
            <a href="CV.pdf" target="_blank">
              <Button className="bg-red-800" variant="contained">
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mb-0">
          <img
            className="w-1/2 outline outline-blue-600 outline-offset-8 m-auto object-cover object-center rounded-2xl grayscale hover:grayscale-0 transition duration-300"
            alt="hero"
            src={me}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
