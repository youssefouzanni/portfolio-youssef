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
        <a href="https://github.com/youssefouzanni" target="_blank"><FaLinkedin className="social-media-box-gsap" /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/youssef-ouzanni-56a922297" target="_blank"><FaGithub  className="social-media-box-gsap"/></a>
      </li>
      <li>
        <a href="https://web.facebook.com/profile.php?id=100069361247046" target="_blank"><FaFacebook  className="social-media-box-gsap"/></a>
      </li>
      <li>
        <a href="https://www.instagram.com/youssef_ouzanni" target="_blank"><FaInstagram  className="social-media-box-gsap"/></a>
      </li>
    </ul>
  );
}

export default SocialMedia;
