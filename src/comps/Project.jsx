import React from 'react';
import Desktop from './Desktop';
import Projectcard from './Projectcard';
function Project() {
return (
    <div>
      <div className="">
        <Desktop href="https://lifestyle-ecommerce-project.vercel.app/" src="pics/site/ecommerce.png" h5='Lifestyle E-commerce' p="It's an e-commerce website using React. Also Implemented a login and signup UI, searching and a cart functionality." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://mock-api-ecommerce.netlify.app/" src="pics/site/mockAPI.png" h5='Fake Store' p="It is a fake e-commerce book shop website using fake APIs. Also Implemented a login and signup UI, searching and a cart functionality. It also has a customer reviews section." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Swiper.js</span><span className="techStack">#FakeAPI</span></>}/>
      </div>
      
      <div className="">
        <Desktop href="https://oh-kolkata.vercel.app/" src="pics/site/kolkata.png" h5='Hello Kolkata' p="A tour guide blog website of Kolkata. Here users can browse the famous places to visit and know about kolkata." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#React.js</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://react-dashboard-three-red.vercel.app/" src="pics/site/money.png" h5='Money Manager' p="It's An expense tracker dashboard website. Here users can signup and login themselves. After succesful login they are redirected on the dashboard where data can be visualised in chart format." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span><span className="techStack">#Chart JS</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://traveller-one.vercel.app/" src="pics/site/travel.png" h5='Traveller' p="It's a travel blog webpage. Here users can browse places around the world. It also has a paginate and dynamic routing functionality for efficiency." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span><span className="techStack">#React Router</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://recipes-datatable.vercel.app/" src="pics/site/recipe.png" h5='Food Recipes' p="It's a food recipes webpage. Here users can browse different types of food recipes." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React.js</span><span className="techStack">#React Router</span><span className="techStack">#Datatable</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://quiz-app-alpha-lac.vercel.app/" src="pics/site/quiz.png" h5='Quiz Club' p="It is a online quiz app. Here users can select different subjects for playing a quiz." tech={<><span className="techStack">#Tailwind CSS</span><span className="techStack">#React.js</span><span className="techStack">#React Router</span></>}/>
      </div>

      <div className="">
        <Desktop href="https://customtemplate.netlify.app/" src="pics/site/template.png" h5='Bootstrap Templates' p="It is a website template browser using bootstrap." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Canva</span></>}/>
      </div>
    </div>
)
}
export default Project