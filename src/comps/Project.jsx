import React from 'react';
import Desktop from './Desktop';
function Project() {
return (
    <div>
    <div className="">
        <Desktop href="https://blog-appwrite-pi.vercel.app/" src="pics/site/blog.png" h5='Techdown Blog' p="Developed a dynamic and responsive blog site using React, styled with DaisyUI for a sleek, modern design. Integrated Appwrite as the backend to handle user authentication, content management, and real-time updates, ensuring a seamless and scalable user experience." tech={<><span className="techStack">#Appwrite</span><span className="techStack">#React.js</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://lifestyle-ecommerce-project.vercel.app/" src="pics/site/ecommerce.png" h5='Lifestyle E-commerce' p="Developed an e-commerce website using React, implementing a clean, user-friendly interface with a focus on performance and responsiveness. Integrated a search functionality and a dynamic cart feature for an enhanced shopping experience." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://mock-api-ecommerce.netlify.app/" src="pics/site/mockAPI.png" h5='Mock book store' p="Developed a mock e-commerce bookshop website, leveraging fake APIs to simulate real-world data. Implemented a search functionality and a dynamic cart feature for a smooth shopping experience. Added a customer reviews section to enhance user interaction and feedback." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Swiper.js</span><span className="techStack">#FakeAPI</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://react-dashboard-three-red.vercel.app/" src="pics/site/dashboard.png" h5='Dashboard' p="Developed an intuitive expense tracker dashboard website using React, allowing users to securely sign up and log in. Upon successful login, users are redirected to a personalized dashboard where their financial data is visually represented through interactive charts." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span><span className="techStack">#Chart JS</span></>}/>
      </div>
     
      <div className="">
        <Desktop href="https://quiz-app-alpha-lac.vercel.app/" src="pics/site/quiz.png" h5='Quiz Club' p="Developed an engaging online quiz app using React, where users can select from various subjects to play quizzes and test their knowledge. The app features an intuitive interface, providing a seamless experience for users to explore different topics, track their progress, and challenge themselves." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span><span className="techStack">#React Router</span></>}/>
      </div>
     
      <div className="">
        <Desktop href="https://recipes-datatable.vercel.app/" src="pics/site/recipe.png" h5='Food Recipes' p="Created a vibrant food recipes webpage using React, allowing users to browse a wide variety of food recipes across different categories. Integrated a React Data Table component to efficiently display recipe details, enabling easy sorting and filtering of data." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React.js</span><span className="techStack">#React Router</span><span className="techStack">#Datatable</span></>}/>
      </div>
      
      <div className="">
        <Desktop href="https://oh-kolkata.vercel.app/" src="pics/site/kolkata.png" h5='Hello Kolkata' p="Developed a static tour guide blog website for Kolkata, where users can explore the city's famous landmarks and attractions. The website features detailed information about various places to visit, offering a rich, visually appealing experience for users interested in learning more about Kolkata’s culture and heritage." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#React.js</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://customtemplate.netlify.app/" src="pics/site/template.png" h5='Bootstrap Templates' p="Created a responsive website template browser using Bootstrap, with designs sourced from Canva. The platform allows users to browse and explore a variety of pre-designed website templates, offering a clean and modern interface." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Canva</span></>}/>
      </div>
    </div>
)
}
export default Project