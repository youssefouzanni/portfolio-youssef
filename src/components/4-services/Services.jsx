import "./services.css";
import { CgWebsite } from "react-icons/cg";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";

function Services() {
  return (
    <main className="services" id="services">
      <h2>services</h2>
      <div className="container">
        <div className="card">
          <CgWebsite className="logo" />
          <div className="card-content">
            <h3>Web Design</h3>
            <p>
              Transform your online presence with our custom web design
              services. We create modern, responsive websites that engage users
              and elevate your brand. Let’s build a site that stands out and
              drives results!
            </p>
          </div>
        </div>
        <div className="card">
          <BsCloudArrowUpFill className="logo" />
          <div className="card-content">
            <h3>Cloud</h3>
            <p>
              
Elevate your business with our cloud solutions. We offer secure, scalable cloud services to streamline your operations, boost productivity, and reduce costs. Transform how you work with the power of the cloud!
            </p>
          </div>
        </div>
        <div className="card">
          <FaFigma className="logo" />
          <div className="card-content">
            <h3>UX/UI Design</h3>
            <p>
              
Streamline your design process with our UX/UI services in Figma. We create interactive, user-centered designs that enhance usability and engagement. Let’s bring your vision to life with collaborative, pixel-perfect Figma prototypes!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
