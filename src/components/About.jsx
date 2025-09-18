import React from "react";
import AnimatedComponent from "./AnimatedComponent";

const About = ({ title, children, showButtons = false }) => {
  return (
    <section id="about">
      <div className="about__container container">
        <AnimatedComponent>
          <div className="about__content">
            <h2>{title}</h2>
            {children}
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
};

export default About;
