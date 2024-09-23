import { useState } from "react"
import "./navbar.css"
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import gsap from "gsap";
import { FaList } from "react-icons/fa";


function Navbar() {
  const [showMenu,setShowMenu] = useState(false)

  useEffect(() => {
    gsap.fromTo(".animation-navbar-gsap",{opacity:0 ,y:-100} ,{
      y:0,
      opacity: 1,
      duration: 1,
      stagger: 0.3
    });
    gsap.fromTo(".logo", 
      { x: -200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5, ease: "bounce.out" }
    );
  }, []);
  return (
    <nav className="flex" id="about">
        <div className="logo">
          <span>Y</span>oussef.
        </div>

        <ul className="flex menu">
          <li className="box animation-navbar-gsap">
            <a href="#about">About Me</a>
          </li>
          <li className="box animation-navbar-gsap">
            <a href="#skills" >Skills </a>
          </li>
          <li className="box animation-navbar-gsap">
            <a href="#services">Services</a>
          </li>
          <li className="box animation-navbar-gsap">
            <a href="#contact" >Contact Me </a>
          </li>
        </ul> 

        <div/>  

          <FaList  className="menu-icon" onClick={()=>{setShowMenu(!showMenu)}}/>


        {showMenu && ( <section className="fixed">
          <ul className="flex model">
          <li className="flex" onClick={()=>setShowMenu(false)}>
              <div/>
              <ImCross className="cross"/> 
          </li>
          <li>
            <a href="#about" onClick={()=>setShowMenu(false)}>About Me</a>
          </li>
          <li>
            <a href="#skills" onClick={()=>setShowMenu(false)}>Skills </a>
          </li>
          <li>
            <a href="#services" onClick={()=>setShowMenu(false)}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>setShowMenu(false)}>Contact Me </a>
          </li>
        </ul>
        </section> )}
    </nav>
  )
}

export default Navbar