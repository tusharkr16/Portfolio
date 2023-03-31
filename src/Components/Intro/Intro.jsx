import "./Intro.scss";
import logo from "../asset/greeting.png"
import arrow from "../asset/arrow.png"

import { init } from 'ityped'
import { useEffect, useRef } from "react";
const Intro = () => {
const textRef = useRef();
useEffect(()=>{
  init(textRef.current,{
    showCursor: false,
    backDelay: 1500,
    backSpeed:60,
    strings: ['Designer','Developer'],
  })
},[])

  return (
    <div className="Intro" id="Intro">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="rightContainer">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Tushar Kumar</h1>
          <h3>Web <span ref={textRef}></span></h3>
        </div>
        <a href="#Portfolio">
      <img className="arrowImg" src={arrow} alt="" />
      </a>
      </div>
    </div>
  )
}

export default Intro