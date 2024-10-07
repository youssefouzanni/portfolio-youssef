import "./hero.css";
import img from "../../../public/assets/images/hero-img.png";
import SocialMedia from "../SocialMedia";
import { MdOutlineFileDownload } from "react-icons/md";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";


const text ="Hello! I'm Youssef, a passionate web developer from Morocco. I specialize in building dynamic, user-friendly, and fast websites using a variety of programming languages and technologies. I’m eager to embrace opportunities that will help me grow professionally and continue expanding my knowledge in this ever-evolving field. "


function Hero() {
  const btnRef =useRef()

  const handleDownload = () => {
    const pdfUrl = "http://localhost:5173/public/assets/pdf/cv-youssef-ouzanni.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv-Youssef-Ouzanni.pdf';
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {

    gsap.fromTo(".animation-img-gsap", 
      { rotationY: 180, opacity: 0 ,scale:.1}, 
      { rotationY: 0, opacity: 1,scale:1, duration: 1, ease:"back.inOut"});
    gsap.fromTo(".cv", 
      {y: -100, opacity: 0 ,scale:.1}, 
      { y:0, opacity: 1, duration: 1,scale:1, ease: "back.out(1.7)" });

      gsap.fromTo(
        ".text", 
        { scale: 0.5, opacity: 0, x: -200 }, 
        { 
          scale: 1, 
          opacity: 1, 
          x: 0, 
          duration: 2, 
          ease: "elastic.out(1, 0.5)" 
        }
      );
        
    
    const title = document.querySelectorAll(".title span");
    title.forEach((letter, index) => {
      gsap.fromTo(letter, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          delay: index * 0.1, 
          ease: "bounce.out" 
        });
    });
  }, []);

  return (
    <div className="flex hero" id="hero">
      <section className="left-section">
        <h3>Hello!</h3>
        <h2 className="title">
          I'm {Array.from("Youssef Ouzanni").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        </h2>
        <p className="text">
        {text}
        </p>

        <button className="cv" onClick={handleDownload} ref={btnRef}>
          Download CV <MdOutlineFileDownload />
        </button>

        <SocialMedia/>

      </section>

      <section className="right-section">
        <img src={img} width={300} height={400} className="animation-img-gsap"/>
      </section>
    </div>
  );
}

export default Hero;
