import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import gsap from "gsap";
import { useEffect } from "react";

function SocialMedia() {

  useEffect(()=>{
    gsap.fromTo(".social-media-box-gsap",{ x: -100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, stagger: 0.2 });
  },[])

  return (
    <ul className="social-media flex" >
      <li>
        <a href="" ><FaLinkedin className="social-media-box-gsap" /></a>
      </li>
      <li>
        <a href="" ><FaGithub  className="social-media-box-gsap"/></a>
      </li>
      <li>
        <a href="" ><FaFacebook  className="social-media-box-gsap"/></a>
      </li>
      <li>
        <a href=""><FaInstagram  className="social-media-box-gsap"/></a>
      </li>
    </ul>
  );
}

export default SocialMedia;
