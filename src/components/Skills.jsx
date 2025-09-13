import React, { useState } from "react";

const Skills = () => {
  const skills = [
    { name: "Angular", icon: "angular.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "C++", icon: "cplusplus.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "Illustrator", icon: "illustrator.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "jQuery", icon: "jquery.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "React", icon: "react.svg" },
    { name: "SASS", icon: "sass.svg" },
    { name: "Wordpress", icon: "wordpress.svg" },
    { name: "XD", icon: "xd.svg" },
  ];

  const [visibleCount, setVisibleCount] = useState(10); // show first 10 initially
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, skills.length)); // load 10 more at a time
  };

  // Create repeating "My Skills" text
  const repeatingText = Array(20).fill("MY SKILLS").join(". ");

  return (
    <section id="skills">
      <section className="slope-skew">
        <div className="inner marquee">
          <h1>{repeatingText}</h1>
        </div>
      </section>

      <section className="skills__container content">
        <div className="skills__grid container">
          {skills.slice(0, visibleCount).map((skill, index) => (
            <div key={index} className="skills__item">
              <div className="skills__icon-wrapper">
                <img
                  src={`/images/icons/${skill.icon}`}
                  alt={skill.name}
                  className="skills__icon"
                />
              </div>
              <span className="skills__name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < skills.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default Skills;
