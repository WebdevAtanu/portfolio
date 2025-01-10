import Nav from './comps/Nav';
import Intro from './comps/Intro';
import Content from './comps/Content';
import Skill from './comps/Skill';
import Project from './comps/Project';
import Footer from './comps/Footer';
import './App.css';

function App() {
  return (
    <>
    <Nav/>
    <div className='container m-auto p-5'>
      <Intro/>
      <Content/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
    </>
  )
}

export default App
