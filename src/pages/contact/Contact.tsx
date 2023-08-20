import "./contact.scss";
import { Suspense, useRef } from "react";
import emailjs from "@emailjs/browser";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currrentForm = form.current;
    if (currrentForm == null) return;

    emailjs
      .sendForm(
        "service_q6io2ra",
        "template_x97ejgo",
        currrentForm,
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
          <form className="form" ref={form} onSubmit={sendEmail}>
            <span className="heading">Contact Us</span>
            <div className="formRow">
              <label className="labelName">Name</label>
              <input className="input" type="text" name="user_name" />
            </div>
            <div className="formRow">
              <label className="labelName">Email</label>
              <input className="input" type="email" name="user_email" />
            </div>
            <div className="formRow">
              <label className="labelName">Message</label>
              <textarea className="textInput" name="message" />
            </div>
            <input className="inputSendBtn" type="submit" value="Send" />
          </form>
        </div>
        <div className="addressWrapper">
          <span className="heading">Our Location</span>
          <div className="addressBox">
            <span className="address">Grevesmühlener Straße 51</span>
            <span className="address">13059 Berlin</span>
            <span className="address">Phone: +4917661834500</span>
            <span className="address">Email: khaledreza@gmail.com</span>
          </div>
        </div>
        <div className="mapWrapper">
          <div className="mapInnerWrapper">
            <Suspense fallback={<LoadingSpinner />}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.9389693678945!2d13.516740176466852!3d52.570714932473734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84c5edfb854e3%3A0xed24ca5a7e5b95f2!2sGrevesm%C3%BChlener%20Str.%2051%2C%2013059%20Berlin!5e0!3m2!1sen!2sde!4v1691675841105!5m2!1sen!2sde"
                width="420"
                height="430"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Suspense>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
