import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProjects(projectsData);
      setLoading(false);
    } catch (err) {
      setError('Error loading projects');
      setLoading(false);
      console.error('Error loading projects:', err);
    }
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="projects">
      <main id="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
    </section>
  );
};

export default Projects;
