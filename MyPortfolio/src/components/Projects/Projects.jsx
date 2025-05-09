import React from "react";
import styles from "./ProjectStyles.module.css";
import OCR from "../../assets/OCR.png";
import StepCount from "../../assets/StepCount.png";
import car from "../../assets/Car.png";
import ProjectsCard from "../../common/ProjectsCard";
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={OCR}
          link="https://github.com/ShriramRsn/OCR"
          h3="OCR"
          p="Optical Character Recognition"
        />
        <ProjectsCard
          src={StepCount}
          link="https://github.com/ShriramRsn/StepTracker"
          h3="Step Count"
          p={<>"Mobile Sensor based Step Counting<br/>program."</>}
        />
        <ProjectsCard
          src={car}
          link="https://github.com/ShriramRsn/Car-Price-Detection"
          h3="Car Price"
          p="Car Price Detection program"
        />
      </div>
    </section>
  );
};

export default Projects;
