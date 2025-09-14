import React from "react";

const About = ({ title, children, showButtons = false }) => {
  return (
    <section id="about">
      <div className="about__container container">
        <div className="about__content">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default About;
