import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";
import { FaLightbulb, FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// Project Card Component
function ProjectCard({ h5, tech, p, img1, img2, img3, github, href }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#091327] hover:bg-[#071023] border border-indigo-600 p-5 rounded-xl flex flex-col gap-5 shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-semibold text-white">{h5}</h5>
        <p className="text-sm text-gray-400">{tech}</p>
      </div>
      <div className="w-full">
        <Slider image1={img1} image2={img2} image3={img3} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-300">{p}</p>
        <div className="flex gap-3 justify-end text-lg">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-400 transition">
              <FiGithub />
            </a>
          )}
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-400 transition">
              <FaLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Main Project Section
function Project() {
  const projects = [
    {
      h5: "Shopper",
      tech: <> <span className="techStack">MERN</span> <span className="techStack">ShadCN</span> </>,
      p: "Developed a MERN stack-based shopping app, utilizing ShadCN for a modern design system. Ensures efficient data handling, authentication, and real-time updates.",
      img1: "pics/site/shopper/home.jpeg",
      img2: "pics/site/shopper/cart.jpeg",
      img3: "pics/site/shopper/dashboard.jpeg",
      github: "https://github.com/WebdevAtanu/shopper-ecommerce",
      href: "https://shopper-ecommerce.onrender.com/"
    },
    {
      h5: "Techdown Blog",
      tech: <> <span className="techStack">Appwrite</span> <span className="techStack">React.js</span> </>,
      p: "Built a dynamic blog using React and DaisyUI. Integrated Appwrite for authentication and real-time updates.",
      img1: "pics/site/blog/home.jpeg",
      img2: "pics/site/blog/login.jpeg",
      img3: "pics/site/blog/dash.jpeg",
      github: "https://github.com/WebdevAtanu/blog-appwrite",
      href: "https://blog-appwrite-pi.vercel.app/"
    },
    {
      h5: "Lifestyle E-commerce",
      tech: <> <span className="techStack">Tailwind CSS</span> <span className="techStack">React.js</span> </>,
      p: "An e-commerce site using React with a clean, user-friendly UI. Features search functionality and dynamic cart.",
      img1: "pics/site/ecom/home.jpeg",
      img2: "pics/site/ecom/product.jpeg",
      img3: "pics/site/ecom/cart.jpeg",
      github: "https://github.com/WebdevAtanu/lifestyle-ecommerce",
      href: "https://lifestyle-ecommerce-project.vercel.app/"
    },
    {
      h5: "Mock Book Store",
      tech: <> <span className="techStack">Bootstrap</span> <span className="techStack">Swiper.js</span> <span className="techStack">FakeAPI</span> </>,
      p: "Developed a mock e-commerce bookshop using fake APIs. Features search, cart, and user reviews.",
      img1: "pics/site/mock/home.jpeg",
      img2: "pics/site/mock/user.jpeg",
      img3: "pics/site/mock/cart.jpeg",
      github: "https://github.com/WebdevAtanu/e-commerce",
      href: "https://mock-api-ecommerce.netlify.app/"
    },
    {
      h5: "Dashboard Example",
      tech: <> <span className="techStack">Tailwind CSS</span> <span className="techStack">React.js</span> <span className="techStack">Chart JS</span> </>,
      p: "An interactive expense tracker dashboard with secure authentication and visual data representation using charts.",
      img1: "pics/site/dashboard/home.jpeg",
      img2: "pics/site/dashboard/user.jpeg",
      img3: "pics/site/dashboard/dash.jpeg",
      github: "https://github.com/WebdevAtanu/react-dashboard",
      href: "https://react-dashboard-three-red.vercel.app/"
    },
    {
      h5: "Quiz Club",
      tech: <> <span className="techStack">Tailwind CSS</span> <span className="techStack">React.js</span> <span className="techStack">React Router</span> </>,
      p: "An engaging online quiz app with multiple subjects. Tracks user progress and challenges their knowledge.",
      img1: "pics/site/quiz/home.jpeg",
      img2: "pics/site/quiz/quiz.jpeg",
      img3: "pics/site/quiz/result.jpeg",
      github: "https://github.com/WebdevAtanu/quiz-app",
      href: "https://quiz-app-alpha-lac.vercel.app/"
    },
    {
      h5: "Food Recipes",
      tech: <> <span className="techStack">TailwindCSS</span> <span className="techStack">React.js</span> <span className="techStack">Datatable</span> </>,
      p: "A vibrant food recipe website with category-based browsing and efficient data handling using React Data Table.",
      img1: "pics/site/recipes/home.jpeg",
      img2: "pics/site/recipes/about.jpeg",
      img3: "pics/site/recipes/recipes.jpeg",
      github: "https://github.com/WebdevAtanu/recipes-datatable",
      href: "https://recipes-datatable.vercel.app/"
    },
    {
      h5: "Hello Kolkata",
      tech: <> <span className="techStack">Bootstrap</span> <span className="techStack">React.js</span> </>,
      p: "A static tour guide website for Kolkata, featuring detailed information on landmarks and attractions.",
      img1: "pics/site/kolkata.jpeg",
      github: "https://github.com/WebdevAtanu/ohkolkata-react",
      href: "https://oh-kolkata.vercel.app/"
    },
    {
      h5: "Bootstrap Templates",
      tech: <> <span className="techStack">Bootstrap</span> <span className="techStack">Canva</span> </>,
      p: "A template browser built with Bootstrap, allowing users to explore pre-designed website templates.",
      img1: "pics/site/template.jpeg",
      github: "https://github.com/WebdevAtanu/template-bootstrap",
      href: "https://customtemplate.netlify.app/"
    }
  ];

  return (
    <section id="project" className="pt-5">
      <div className="flex items-center gap-2 text-2xl mb-6 text-indigo-600">
        <p className="font-semibold">Practice Projects</p>
        <FaLightbulb />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
