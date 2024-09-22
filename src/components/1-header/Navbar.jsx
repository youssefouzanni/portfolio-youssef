import { useState } from "react"
import "./navbar.css"
import { ImCross } from "react-icons/im";


function Navbar() {
  const [showMenu,setShowMenu] = useState(true)
  console.log(showMenu);
  return (
    <nav className="flex" id="about">
        <div className="logo">
          <span>Y</span>oussef.
        </div>

        <ul className="flex menu">
          <li className="box">
            <a href="#about">About Me</a>
          </li>
          <li className="box">
            <a href="#skills">Skills </a>
          </li>
          <li className="box">
            <a href="#services">Services</a>
          </li>
          <li className="box">
            <a href="#contact">Contact Me </a>
          </li>
        </ul> 

        <div/>  
        <button className="menu-btn" onClick={()=>{setShowMenu(!showMenu)}}>
          menu
        </button>

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