import React from 'react';

const ProjectCard = ({ project }) => {
  const languagesHtml = project.languages.map((lang, index) => (
    <span key={index} className="language">
      <img 
        src={`/images/icons/${lang.toLowerCase()}.svg`} 
        alt={lang} 
        className="language-icon" 
      />
    </span>
  ));

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p><strong>Created:</strong> {project.created}</p>
      <p><strong>Languages:</strong> {languagesHtml}</p>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
    </div>
  );
};

export default ProjectCard;
