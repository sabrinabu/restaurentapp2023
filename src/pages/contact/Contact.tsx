import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  const form = useRef<HTMLInputElement>();

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q6io2ra",
        "template_x97ejgo",
        form.current,
        "Ber6FSSH9ok11opMa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <Banner />
      <Navbar />
      <div className="contactWrapper">
        <div className="formWrapper">
          <h1 className="heading">Contact us </h1>
          <div className="innerWrapper">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <label className="labelName">Name</label>
              <input className="input" type="text" name="user_name" />
              <label className="labelName">Email</label>
              <input className="input" type="email" name="user_email" />
              <label className="labelName">Message</label>
              <textarea name="message" />
              <label className="labelName"></label>
              <input className="inputsend" type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="mapWrapper">
          <h1 className="heading">Our location</h1>
          <div className="mapInnerWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.9389693678945!2d13.516740176466852!3d52.570714932473734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84c5edfb854e3%3A0xed24ca5a7e5b95f2!2sGrevesm%C3%BChlener%20Str.%2051%2C%2013059%20Berlin!5e0!3m2!1sen!2sde!4v1691675841105!5m2!1sen!2sde"
              width="500"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
