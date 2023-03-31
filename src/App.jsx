import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Works from "./Components/Works/Works";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";


import './App.scss'
import { useState } from "react";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
         <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
