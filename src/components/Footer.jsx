import React from "react";
import AnimatedComponent from "./AnimatedComponent";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="main-footer">
        <div className="main-footer__container container">
          <AnimatedComponent>
            <div className="main-footer__text">
              <h1>Say Hello.</h1>
              <p>
                Got a question or just want to say hi? Connect with me. <br /> I
                look forward to hearing from you.
              </p>
            </div>
          </AnimatedComponent>
          <AnimatedComponent delay={100}>
            <hr />
          </AnimatedComponent>

          <div className="main-footer__socials">
            <AnimatedComponent delay={200}>
              <a href="tel:+13174468807" className="social-info-holder">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span className="underline">+1 317-446-8807</span>
              </a>
            </AnimatedComponent>
            <AnimatedComponent delay={200}>
              <a
                href="mailto:builtbymarielle@gmail.com"
                className="social-info-holder"
              >
                <div className="icon-circle">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span className="underline">builtbymarielle@gmail.com</span>
              </a>
            </AnimatedComponent>
            <AnimatedComponent delay={200}>
              <a
                href="https://www.google.com/maps/place/Indianapolis,+IN"
                target="_blank"
                rel="noopener noreferrer"
                className="social-info-holder"
              >
                <div className="icon-circle">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span className="underline">Indianapolis, IN</span>
              </a>
            </AnimatedComponent>
          </div>
        </div>
      </div>

      <div className="true-footer">
        <div className="true-footer__container container">
          <p>&copy; BuiltByMarielle2025</p>
          <div className="connect-icons">
            <a
              className="connect-icon"
              href="https://github.com/builtbymarielle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="connect-icon"
              href="https://www.linkedin.com/in/marielle-harrell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
