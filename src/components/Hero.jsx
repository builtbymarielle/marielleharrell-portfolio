import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__container container">
        <div className="hero__text">
          <h1>Hello, I'm Marielle</h1>
          <h2>SOFTWARE ENGINEER</h2>
          <div className="hero__socials">
            <a href="tel:+13174468807" className="hero__socials-holder">
              <div className="icon-circle">
                <i className="fa-solid fa-phone"></i>
              </div>
              <span>+1 317-446-8807</span>
            </a>
            <a href="mailto:builtbymarielle@gmail.com" className="hero__socials-holder">
              <div className="icon-circle">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <span>builtbymarielle@gmail.com</span>
            </a>
            <a href="https://www.google.com/maps/place/Indianapolis,+IN" target="_blank" rel="noopener noreferrer" className="hero__socials-holder">
              <div className="icon-circle">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span>Indianapolis, IN</span>
            </a>
          </div>
        </div>
        <div className="image__moveable"></div>
      </div>
    </section>
  );
};

export default Hero;
