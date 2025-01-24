import React from 'react';
import { motion } from "framer-motion";
import Slider from './Slider'
import { FaLightbulb } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Project() {    
function Desktop(props) {
    return (
    <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{
    duration: 1,
    ease: "easeInOut"
  }} className='bg-[#091327] hover:bg-[#071023] border border-[#9b24af] p-5 rounded-xl flex flex-col gap-5'>
      <div className="flex flex-col gap-2">
        <h5 className='text'>{props.h5}</h5>
        <p>{props.tech}</p>
      </div>
      <div className="w-full m-auto text-white">
        <Slider image1={props.img1&&props.img1} image2={props.img2&&props.img2} image3={props.img3&&props.img3}/>
      </div>
      <div className='flex flex-col justify-between h-full gap-4'>
        <p className='text-sm'>{props.p}</p>
        <div className="flex gap-3 justify-end text-lg">
        <a href={props.github} target='_blank' className='text-[#9b24af]'><FiGithub /></a>
        <a href={props.href} target='_blank' className='text-[#9b24af]'><FaLink /></a>
      </div>
      </div>
    </motion.div>
    )
}

return (
    <section id='project' className='pt-5'>
      <div className="flex gap-2 items-center text-2xl mb-6 text-[#9b24af]">
        <p id='bolder'>Practice Projects</p> 
        <FaLightbulb />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <Desktop href="https://shopper-ecommerce.onrender.com/" github="https://github.com/WebdevAtanu/shopper-ecommerce" img1="pics/site/shopper/home.jpeg" img2="pics/site/shopper/cart.jpeg" img3="pics/site/shopper/dashboard.jpeg" h5='Shopper' p="Developed a MERN stack-based shopping app, utilizing ShadCN for a modern design system. The app offering a seamless shopping experience. ShadCN's pre-built components and utility-first design made it easy to implement a responsive interface, while the MERN stack ensures efficient handling of data, authentication, and real-time updates." tech={<><span className="techStack">MERN</span><span className="techStack">ShadCN</span></>}/>

        <Desktop href="https://blog-appwrite-pi.vercel.app/" github="https://github.com/WebdevAtanu/blog-appwrite" img1="pics/site/blog/home.jpeg" img2="pics/site/blog/login.jpeg" img3="pics/site/blog/dash.jpeg" h5='Techdown Blog' p="Developed a dynamic and responsive blog site using React, styled with DaisyUI for a sleek, modern design. Integrated Appwrite as the backend to handle user authentication, content management, and real-time updates, ensuring a seamless and scalable user experience." tech={<><span className="techStack">Appwrite</span><span className="techStack">React.js</span></>}/>

        <Desktop href="https://lifestyle-ecommerce-project.vercel.app/" github="https://github.com/WebdevAtanu/lifestyle-ecommerce" img1="pics/site/ecom/home.jpeg" img2="pics/site/ecom/product.jpeg" img3="pics/site/ecom/cart.jpeg" h5='Lifestyle E-commerce' p="Developed an e-commerce website using React, implementing a clean, user-friendly interface with a focus on performance and responsiveness. Integrated a search functionality and a dynamic cart feature for an enhanced shopping experience." tech={<><span className="techStack">Tailwind CSS</span><span className="techStack">React.js</span></>}/>

        <Desktop href="https://mock-api-ecommerce.netlify.app/" github="https://github.com/WebdevAtanu/e-commerce" img1="pics/site/mock/home.jpeg" img2="pics/site/mock/user.jpeg" img3="pics/site/mock/cart.jpeg" h5='Mock book store' p="Developed a mock e-commerce bookshop website, leveraging fake APIs to simulate real-world data. Implemented a search functionality and a dynamic cart feature for a smooth shopping experience. Added a customer reviews section to enhance user interaction and feedback." tech={<><span className="techStack">Bootstrap</span><span className="techStack">Swiper.js</span><span className="techStack">FakeAPI</span></>}/>

        <Desktop href="https://react-dashboard-three-red.vercel.app/" github="https://github.com/WebdevAtanu/react-dashboard" img1="pics/site/dashboard/home.jpeg" img2="pics/site/dashboard/user.jpeg" img3="pics/site/dashboard/dash.jpeg" h5='Dashboard example' p="Developed an intuitive expense tracker dashboard website using React, allowing users to securely sign up and log in. Upon successful login, users are redirected to a personalized dashboard where their financial data is visually represented through interactive charts." tech={<><span className="techStack">Tailwind CSS</span><span className="techStack">React.js</span><span className="techStack">Chart JS</span></>}/>

        <Desktop href="https://quiz-app-alpha-lac.vercel.app/" github="https://github.com/WebdevAtanu/quiz-app" img1="pics/site/quiz/home.jpeg" img2="pics/site/quiz/quiz.jpeg" img3="pics/site/quiz/result.jpeg" h5='Quiz Club' p="Developed an engaging online quiz app using React, where users can select from various subjects to play quizzes and test their knowledge. The app features an intuitive interface, providing a seamless experience for users to explore different topics, track their progress, and challenge themselves." tech={<><span className="techStack">Tailwind CSS</span><span className="techStack">React.js</span><span className="techStack">React Router</span></>}/>

        <Desktop href="https://recipes-datatable.vercel.app/" github="https://github.com/WebdevAtanu/recipes-datatable" img1="pics/site/recipes/home.jpeg" img2="pics/site/recipes/about.jpeg" img3="pics/site/recipes/recipes.jpeg" h5='Food Recipes' p="Created a vibrant food recipes webpage using React, allowing users to browse a wide variety of food recipes across different categories. Integrated a React Data Table component to efficiently display recipe details, enabling easy sorting and filtering of data." tech={<><span className="techStack">TailwindCSS</span><span className="techStack">React.js</span><span className="techStack">Datatable</span></>}/>

        <Desktop href="https://oh-kolkata.vercel.app/" github="https://github.com/WebdevAtanu/ohkolkata-react" img1="pics/site/kolkata.jpeg" h5='Hello Kolkata' p="Developed a static tour guide blog website for Kolkata, where users can explore the city's famous landmarks and attractions. The website features detailed information about various places to visit, offering a rich, visually appealing experience for users interested in learning more about Kolkata’s culture and heritage." tech={<><span className="techStack">Bootstrap</span><span className="techStack">React.js</span></>}/>

        <Desktop href="https://customtemplate.netlify.app/" github="https://github.com/WebdevAtanu/template-bootstrap" img1="pics/site/template.jpeg" h5='Bootstrap Templates' p="Created a responsive website template browser using Bootstrap, with designs sourced from Canva. The platform allows users to browse and explore a variety of pre-designed website templates, offering a clean and modern interface." tech={<><span className="techStack">Bootstrap</span><span className="techStack">Canva</span></>}/>
      </div>
    </section>
)
}
export default Project