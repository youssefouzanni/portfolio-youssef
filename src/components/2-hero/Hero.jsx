import "./hero.css";
import img from "../../../public/assets/images/hero-img.png";
import SocialMedia from "../SocialMedia";
import { MdOutlineFileDownload } from "react-icons/md";


function Hero() {

  const handleDownload = () => {
    const pdfUrl = "http://localhost:5173/public/assets/pdf/cv-youssef-ouzanni.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv-Youssef-Ouzanni.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flex hero" id="hero">
      <section className="left-section">
        <h3>Hello!</h3>
        <h2>
          I'm <span></span>
        </h2>
        <p>
          Hello! I'm Youssef, a passionate web developer from Morocco. I
          specialize in building dynamic, user-friendly, and fast websites using
          a variety of programming languages and technologies. I’m eager to
          embrace opportunities that will help me grow professionally and
          continue expanding my knowledge in this ever-evolving field.
        </p>

        <button className="cv" onClick={handleDownload}>
          Download CV <MdOutlineFileDownload />
        </button>

        <SocialMedia/>

      </section>

      <section className="right-section">
        <img src={img} width={360} height={400} />
      </section>
    </div>
  );
}

export default Hero;
