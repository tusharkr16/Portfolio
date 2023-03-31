import React from 'react'
import "./Menu.scss";

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"Menu " +(menuOpen && "active") }>
    <ul>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#Intro">Intro</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#Portfolio">Portfolio</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#Testimonial">Testimonial</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
            <a href="#Contact">Contact</a>
        </li>
    </ul>
    </div>
  )
}

export default Menu