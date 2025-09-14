import React from "react";
import AnimatedComponent from "./AnimatedComponent";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__container container">
        <div className="hero__text">
          <AnimatedComponent>
            <h1>Hello, I'm Marielle</h1>
          </AnimatedComponent>
          <AnimatedComponent delay={100}>
            <h2>SOFTWARE ENGINEER</h2>
          </AnimatedComponent>
          <div className="hero__socials">
            <AnimatedComponent delay={800}>
              <a href="tel:+13174468807" className="hero__socials-holder">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span className="underline">+1 317-446-8807</span>
              </a>
            </AnimatedComponent>
            <AnimatedComponent delay={900}>
              <a
                href="mailto:builtbymarielle@gmail.com"
                className="hero__socials-holder"
              >
                <div className="icon-circle">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span className="underline">builtbymarielle@gmail.com</span>
              </a>
            </AnimatedComponent>
            <AnimatedComponent delay={1000}>
              <a
                href="https://www.google.com/maps/place/Indianapolis,+IN"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__socials-holder"
              >
                <div className="icon-circle">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span className="underline">Indianapolis, IN</span>
              </a>
            </AnimatedComponent>
          </div>
        </div>
        <div className="image__moveable"></div>
      </div>
    </section>
  );
};

export default Hero;
