import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Hello, I'm Marielle"
        subtitle="SOFTWARE ENGINEER"
        backgroundImage="/images/hero.png"
        showSocials={true}
        showImage={true}
        backgroundImageCirc="/images/profile-me.png"
      />
      <About title="About Me">
        <p>
          Hello! My name is Marielle Harrell, and I'm passionate about crafting
          innovative solutions for the web. My journey into coding began in 2018
          during my junior year of high school when I was introduced to C++.
          This initial spark ignited my interest in coding, leading me to pursue
          it as a career.
        </p>
        <p>
          At Indiana University Indianapolis, I pursued majors in Informatics
          and Media Arts & Science with a specialization in Web Development.
          Throughout my college years, I had the opportunity to collaborate with
          peers on various projects, develop my own web applications, and serve
          as a peer mentor, assisting other students in my major. My education
          equipped me with proficiency in coding languages such as HTML, CSS,
          JavaScript, and Python. Today, my focus lies in tackling larger
          projects and continuously enhancing my skills in web development.
        </p>
        <p>
          Complementing my academic journey, I've acquired invaluable experience
          through both internships and professional roles. From my impactful
          internship at Infosys to my current position as a Software Engineer at
          CALRegional, I've continuously enriched my skill set and expertise.
        </p>
        <div className="about__btn-holder">
          <a
            href="https://drive.google.com/file/d/1jxJ3IrAUvs9SI2QBY8C59HAPfL5WIBKR/view?usp=sharing"
            target="_blank"
            className="about__button btn__outline"
          >
            View Resume
          </a>
          <a href="#projects" className="about__button btn__solid">
            View Projects
          </a>
        </div>
      </About>
      <Skills />
      <Projects limit={6} />
      <Footer />
    </>
  );
};

export default HomePage;
