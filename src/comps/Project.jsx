import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

function Project() {
	return (
	<section>
      <div className="container">
        <Desktop href="https://rkdemosite.netlify.app/" src="pics/site/landing.png" p="Created this landing page from a company's website, in which I gave an interview." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#AOS</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://customtemplate.netlify.app/" src="pics/site/template.png" p="A template browser where user can download the sorce code. Note- All the codes should include bootstrap cdn to work." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Canva</span></>} class1='col-md-6 order-md-2' class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://vkohli18.netlify.app/" src="pics/site/virat.png" p="A tribute page for the Indian cricketer Virat Kohli." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#GSAP</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://bengalibook.netlify.app/" src="pics/site/ebook.png" p="It's a digial e-book reader webpage. Here user can read or download bengali books from various authors. Also created a selection list of authors." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Javascript</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://oh-kolkata.vercel.app/" src="pics/site/kolkata.png" p="A tour guide of my city, Kolkata. Here user can browse the famous places to visit and know about our culture." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#React</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://mock-api-ecommerce.netlify.app/" src="pics/site/mockAPI.png" p="A mock e-commerce book shop using fetch API. Also Implemented a search and a cart functionality." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#SwiperJS</span><span className="techStack">#MockAPI</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://gamerzz.netlify.app/" src="pics/site/gamerz.png" p="A game information page and the good sides of gaming." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#SwiperJS</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Desktop href="https://react-dashboard-three-red.vercel.app/" src="pics/site/money.png" p="Expense tracker dashboard where user can signup and login themselves." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#ReactJS</span><span className="techStack">#Chart JS</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Desktop href="https://traveller-one.vercel.app/" src="pics/site/travel.png" p="Travel blog around the world." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React JS</span><span className="techStack">#React Router</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

        <Mobile href="https://react-passgen.netlify.app/" src="pics/site/password.png" p="A random password generator using react hooks." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>

        <Mobile href="https://web-note-kappa.vercel.app/" src="pics/site/note.png" p="A note taking app using react router." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span><span className="techStack">#React Router Dom</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>

      </div>
    </section>
	)
}

export default Project