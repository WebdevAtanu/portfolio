import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './comps/Nav';
import Intro from './comps/Intro';
import Skill from './comps/Skill';
import Project from './comps/Project';
import Footer from './comps/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </>
  )
}

export default App
