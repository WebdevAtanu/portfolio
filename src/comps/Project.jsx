import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

function Project() {
	return (
	<section>
      <div className="container">
        <Desktop href="https://mock-api-ecommerce.netlify.app/" src="pics/site/mockAPI.png" p="It is a fake e-commerce book shop website using fake APIs. Also Implemented a login and signup UI, searching and a cart functionality. It also has a customer reviews section" tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#SwiperJS</span><span className="techStack">#FakeAPI</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://customtemplate.netlify.app/" src="pics/site/template.png" p="It is a website template browser where the source code is provided for download. The codes should include bootstrap cdn to work." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Canva</span></>} class1='col-md-6 order-md-1' class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://bengalibook.netlify.app/" src="pics/site/ebook.png" p="It's a digial e-book reader webpage. Here user can read or download bengali books from various authors. Also created a selection list of authors." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Javascript</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://oh-kolkata.vercel.app/" src="pics/site/kolkata.png" p="A tour guide of the famous places of my city, Kolkata. Visitors can browse the famous places to visit in kolkata and know about our bengali culture." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#React</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://react-dashboard-three-red.vercel.app/" src="pics/site/money.png" p="It's An expense tracker dashboard website. Here users can signup and login themselves. After succesful login the they are redirected on the dashboard where data can visualised in chart format." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#ReactJS</span><span className="techStack">#Chart JS</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://traveller-one.vercel.app/" src="pics/site/travel.png" p="It's a travel blog webpage. Here users can browse places around the world. It also has a paginate functionality for efficiency." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React JS</span><span className="techStack">#React Router</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://rkdemosite.netlify.app/" src="pics/site/landing.png" p="Created this landing page from a company's website." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#AOS</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Mobile href="https://react-passgen.netlify.app/" src="pics/site/password.png" p="A random password generator using react hooks." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Mobile href="https://web-note-kappa.vercel.app/" src="pics/site/note.png" p="A note taking app using react router." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span><span className="techStack">#React Router Dom</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

      </div>
    </section>
	)
}

export default Project