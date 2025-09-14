import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

import AnimatedComponent from "./AnimatedComponent";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProjects(projectsData);
      setLoading(false);
    } catch (err) {
      setError("Error loading projects");
      setLoading(false);
      console.error("Error loading projects:", err);
    }
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  // Create repeating "MY PROJECTS" text
  const repeatingText = Array(20).fill("MY PROJECTS").join(". ");

  return (
    <section id="projects">
      <section className="slope-skew">
        <div className="inner marquee">
          <h1>{repeatingText}</h1>
          <h1>{repeatingText}</h1>
        </div>
      </section>

      <section className="projects__container">
        <div className="projects__content-wrapper">
          <main className="projects-grid container">
            {projects.map((project, index) => (
              <AnimatedComponent key={index} delay={index * 100}>
                <ProjectCard project={project} />
              </AnimatedComponent>
            ))}
          </main>
        </div>
      </section>
    </section>
  );
};

export default Projects;
