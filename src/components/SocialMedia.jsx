import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


function SocialMedia() {
  return (
    <ul className="social-media flex" >
      <li>
        <a href=""><FaLinkedin/></a>
      </li>
      <li>
        <a href=""><FaGithub/></a>
      </li>
      <li>
        <a href=""><FaFacebook/></a>
      </li>
      <li>
        <a href=""><FaInstagram/></a>
      </li>
    </ul>
  );
}

export default SocialMedia;
