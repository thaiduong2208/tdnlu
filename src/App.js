import React from 'react';
import logo from './logo.svg';  
import './App.css';
import TopMenu from './components/TopMenu/topmenu'
import Header from './components/Header/header'
import About from './components/About/about'
import Skills from './components/Skills/skill'
import Interest from './components/Interest/interest'
import Contact from './components/Contact/contact'
function App() {
  return (
    <div className="topMenu">
        <TopMenu/>
        <Header/>
        <About/>
        <Skills/>
        <Interest/>
        <Contact/>
    </div>
  );
}

export default App;
