import "./contact.css";
import Lottie from "lottie-react";
import emailAnimation from "../../../public/assets/animation/email.json"
import doneAnimation from "./../../../public/assets/animation/done.json"
import { useForm,ValidationError } from "@formspree/react";

function Contact() {

  const [state, handleSubmit] = useForm("mjkbqyzy");

  return (
    <div className="contact" id="contact">
      <h2>Contact-Me</h2>
      <div className="flex container">

      <form onSubmit={handleSubmit} className="left-section">
        <div className="flex">
          <label htmlFor="email">Adresse Email : </label>
          <input type="email" id="email" name="email"  placeholder="Email..."/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="flex">
          <label htmlFor="message"> Your Message : </label>
          <textarea  id="message" name="message" placeholder="Message..."/>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
        {
          state.succeeded && (<p className="flex">
               Your message has been successfuly <Lottie loop={false} animationData={doneAnimation}  className="done"/>
             
          </p>)
        }

      </form>

      <section className="animation">
          <Lottie className="email-animation" 
                 
                  animationData={emailAnimation}/>
      </section>

      </div>
    </div>
  );
}

export default Contact;
