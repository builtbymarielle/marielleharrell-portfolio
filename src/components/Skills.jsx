import React, { useState, useEffect } from "react";
import skillsdata from "../data/skills.json";
import AnimatedComponent from "./AnimatedComponent";

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(10); // show first 10 initially
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, skillsdata.length)); // load 10 more at a time
  };

  // hide skills go back to only showing 10 initially
  const handleHideSkills = () => {
    setIsCollapsing(true);
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (isCollapsing) {
      const timer = setTimeout(() => {
        setVisibleCount(10);
        setIsCollapsing(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isCollapsing]);

  const getSkillItemClass = (index) => {
    if (isCollapsing && index >= 10) {
      return "skills__item collapsing";
    }
    return "skills__item";
  };

  // Create repeating "My Skills" text
  const repeatingText = Array(20).fill("MY SKILLS").join(". ");

  return (
    <section id="skills">
      <section className="slope-skew">
        <div className="inner marquee">
          <h1>{repeatingText}</h1>
          <h1>{repeatingText}</h1>
        </div>
      </section>

      <section className="skills__container">
        <div className="skills__content-wrapper">
          <div className="skills__grid container">
            {skillsdata.slice(0, visibleCount).map((skill, i) => (
              <AnimatedComponent key={skill.name} delay={i * 50}>
                <div className={getSkillItemClass(i)}>
                  <div className="skills__icon-wrapper">
                    <img
                      src={`./images/icons/${skill.icon}`}
                      alt={skill.name}
                      className="skills__icon"
                    />
                  </div>
                  <span className="skills__name">{skill.name}</span>
                </div>
              </AnimatedComponent>
            ))}
          </div>

          <div className="load-more-container">
            {/* Load More button */}
            {visibleCount < skillsdata.length && (
              <button className="load-more-button" onClick={handleLoadMore}>
                Load More Skills
              </button>
            )}

            {/* Hide Skills button */}
            {visibleCount > 10 && (
              <button className="load-more-button" onClick={handleHideSkills}>
                Collapse
              </button>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
