import React from "react";

const ProjectsCard = ({ src, link, h3, p }) => {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={`${h3} Img`} />
      <h1>{h3}</h1>
      <p>{p}</p>
    </a>
  );
};

export default ProjectsCard;
