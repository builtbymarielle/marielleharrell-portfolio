import React from "react";

const ProjectCard = ({ project }) => {
  const languagesHtml = project.languages.map((lang, index) => (
    <span key={index} className="language">
      <img
        src={`./images/icons/${lang.toLowerCase()}.svg`}
        alt={lang}
        className="language-icon"
      />
    </span>
  ));

  return (
    <div className="project-card">
      {/* if project is in progress add an orange circle */}
      {project.in_progress && (
        <span className="badge badge-orange rounded-pill">In Progress</span>
      )}
      <small>{project.created}</small>
      <h3>{project.title}</h3>
      {project.description
        .split(/\n\n+/)
        .map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

      <div className="card-bottom-holder">
        <div className="languages-container">{languagesHtml}</div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noopener noreferrer">
              Figma
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
