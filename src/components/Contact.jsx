import React, { Fragment, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./style.module.css";
import Navbar from "./Navbar";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  let [message, setMessage] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    } else if (!email.trim()) {
      setError("Email is required");
      return;
    } else if (!message.trim()) {
      setError("Message is required");
      return;
    }

    setEmail("");
    setName("");
    setMessage("");
    emailjs
      .sendForm(
        "service_5w4yly4",
        "template_0et5y6f",
        form.current,
        "uXFzE6Zx2G9l7f2XQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessDialog(true);

          // Automatically close the success dialog after 2 seconds
          setTimeout(() => {
            setShowSuccessDialog(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <Navbar />
      {showSuccessDialog && (
        <div className={style.success_dialog}>
          <p>Email sent successfully!</p>
        </div>
      )}
      <div id={style.contact}>
        <div className={style.col_1}>
          <h1>
            Lets find solutions <span>together?</span>{" "}
          </h1>
          <h2>
          {" "}
          <span>|</span>Contact
        </h2>
          <p>Fill the form or just use my contacts below.</p>
          <h3>Email Me:</h3>
          <span> vivekkumar3198@gmail.com</span>
          <h3>Address:</h3>
          3rd C Cross, BTM Layout 2nd Stage,
          <br />
          Pin - 560076, Bangalore, India.
        </div>
        <div className={style.col_2}>
          <h1>Send Me A Message</h1>
          {error && (
            <p
              style={{
                color: "red",
              }}
            >
              {error}
            </p>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label> <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name"
            />{" "}
            <br />
            <label>Email</label> <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />{" "}
            {!isValidEmail && (
              <p style={{ color: "red" }}>Invalid email address</p>
            )}
            <br />
            <label htmlFor="">Message</label> <br />
            <textarea
              name="message"
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            ></textarea>{" "}
            <br />
            <button type="submit" disabled={!isValidEmail}>
              Submit Form
            </button>
          </form>
        </div>
      </div>

      <div id={style.contact_footer}>
        <div className={style.row_1}>
          <div className={style.col_2}>
            <h1>
              You can also find me <br /> on social media :
            </h1>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/vivek-kumar-808880219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100011438388485"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VivekZZZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Github
                </a>
              </li>
            </ul>
          </div>
          <div className={style.col_1}>
            <h1>
              If you want to find out more <br /> about be check the page <br />{" "}
              below.
            </h1>

            <Link to="/about"><button className={style.contactBtn}>More About Me</button></Link>
          </div>
        </div>
        <div className={style.row_2}>
          <p>
            Built in React. <br /> Copyright {<FaRegCopyright />} 2023 Vivek
            Kumar. All rights reserved
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
