import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Project() {
	return (
	<section>
  <div className="container">
  <h4>Static Pages</h4>
    <Splide
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        interval : 5000,
      }}
    >
      <SplideSlide>
      <div className="container py-4">
        <Desktop href="https://mock-api-ecommerce.netlify.app/" src="pics/site/mockAPI.png" h5='Fake Store' p="It is a fake e-commerce book shop website using fake APIs. Also Implemented a login and signup UI, searching and a cart functionality. It also has a customer reviews section." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#SwiperJS</span><span className="techStack">#FakeAPI</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://customtemplate.netlify.app/" src="pics/site/template.png" h5='Templates' p="It is a website template browser where the source code is provided for download. The codes should include bootstrap cdn to work." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Canva</span></>} class1='col-md-6 order-md-2' class2='col-md-6 d-flex align-items-center order-md-1'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://bengalibook.netlify.app/" src="pics/site/ebook.png" h5='PDF Readers' p="It's a digial e-book reader webpage. Here user can read or download bengali books from various authors. Also created a selection list of authors." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#Javascript</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://rkdemosite.netlify.app/" src="pics/site/landing.png" h5='Landing Page' p="Created this landing page from a company's website for a placement reference." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#AOS</span><span className="techStack">#Swiper.js</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>
        </div>
      </SplideSlide>
    </Splide>
    </div>
    <hr className='mt-5'/>


<div className="container">
<h4>React.js Apps</h4>
    <Splide
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        interval : 5000,
      }}
    >
      <SplideSlide>
      <div className="container py-4">
        <Desktop href="https://oh-kolkata.vercel.app/" src="pics/site/kolkata.png" h5='Hello Kolkata' p="A tour guide of the famous places of my city, Kolkata. Visitors can browse the famous places to visit in kolkata and know about our bengali culture." tech={<><span className="techStack">#Bootstrap</span><span className="techStack">#React</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://react-dashboard-three-red.vercel.app/" src="pics/site/money.png" h5='Money Manager' p="It's An expense tracker dashboard website. Here users can signup and login themselves. After succesful login the they are redirected on the dashboard where data can visualised in chart format." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#ReactJS</span><span className="techStack">#Chart JS</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://traveller-one.vercel.app/" src="pics/site/travel.png" h5='Traveller' p="It's a travel blog webpage. Here users can browse places around the world. It also has a paginate functionality for efficiency." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React JS</span><span className="techStack">#React Router</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://recipes-datatable.vercel.app/" src="pics/site/recipe.png" h5='Food Recipes' p="It's a food recipes webpage. Here users can browse different types of food recipes." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React JS</span><span className="techStack">#React Router</span><span className="techStack">#Datatable</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Desktop href="https://quiz-app-alpha-lac.vercel.app/" src="pics/site/quiz.png" h5='Quiz Club' p="It is a online quiz app. Here users can select different subjects for playing a quiz." tech={<><span className="techStack">#TailwindCSS</span><span className="techStack">#React JS</span><span className="techStack">#React Router</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
    </Splide>
    </div>
    <hr className='mt-5'/>

<div className="container">
<h4>Utility Apps</h4>
    <Splide
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        interval : 5000,
      }}
    >
      <SplideSlide>
      <div className="container py-4">
        <Mobile href="https://react-passgen.netlify.app/" src="pics/site/password.png" h5='Random Password' p="A random password generator using react hooks." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span></>} class1='col-md-6 order-md-1'
        class2='col-md-6 d-flex align-items-center order-md-2'/>
        </div>
      </SplideSlide>
      <SplideSlide>
      <div className="container py-3">
        <Mobile href="https://web-note-kappa.vercel.app/" src="pics/site/note.png" h5='Web Notes' p="A note taking app using react router." tech={<><span className="techStack">#React</span><span className="techStack">#React Hooks</span><span className="techStack">#React Router Dom</span></>} class1='col-md-6 order-md-2'
        class2='col-md-6 d-flex align-items-center order-md-1'/>
        </div>
      </SplideSlide>
    </Splide>
    </div>
    <hr className='mt-5'/>
    </section>
	)
}

export default Project