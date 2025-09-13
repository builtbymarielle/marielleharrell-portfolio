import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="about__container container">
        <div className="about__content">
          <h2>About Me</h2>
          <p>
            Hello! My name is Marielle Harrell, and I'm passionate about
            crafting innovative solutions for the web. My journey into coding
            began in 2018 during my junior year of high school when I was
            introduced to C++. This initial spark ignited my interest in coding,
            leading me to pursue it as a career.
          </p>
          <p>
            At Indiana University Indianapolis, I pursued majors in Informatics
            and Media Arts & Science with a specialization in Web Development.
            Throughout my college years, I had the opportunity to collaborate
            with peers on various projects, develop my own web applications, and
            serve as a peer mentor, assisting other students in my major. My
            education equipped me with proficiency in coding languages such as
            HTML, CSS, JavaScript, and Python. Today, my focus lies in tackling
            larger projects and continuously enhancing my skills in web
            development.
          </p>
          <p>
            Complementing my academic journey, I've acquired invaluable
            experience through both internships and professional roles. From my
            impactful internship at Infosys to my current position as a Software
            Engineer at CALRegional, I've continuously enriched my skill set and
            expertise.
          </p>

          <div className="about__btn-holder">
            <a href="#" className="about__button btn__outline">
              View Resume
            </a>
            <a href="#projects" className="about__button btn__solid">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
