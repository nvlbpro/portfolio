import Flipcard from "./Flipcard";
import { useEffect, useState } from "react";
import Button from "./Button";

function Projects() {
  const [projects, setProjects] = useState(null);
  // Number of projects to initially display
  const [visibleProjects, setVisibleProjects] = useState(4);
  // Number of additionals projects to show after showMore click
  const showMoreQuantity = 4;
  //mock API
  const fetchData = async () => {
    const data = await fetch("./projects.json");
    const json = await data.json();
    const projectsList = json.projects;
    setProjects(projectsList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowMore = () => {
    // Increase the number of visible projects
    setVisibleProjects(visibleProjects + showMoreQuantity);
  };

  return (
    <section className="projects">
      <span className="ancres" id="projects"></span>
      <h2 className="projects__title">MY WORK</h2>
      <div className="projects__cards-container">
        {projects?.slice(0, visibleProjects).map((project, key) => (
          <Flipcard
            key={key}
            title={project.title}
            cover={project.cover}
            logo={project.logo}
            skills={project.skills}
            competences={project.competences}
            alt={project.picture}
            speech={project.speech}
            liveDemo={project.liveDemo}
            repoGithub={project.repoGithub}
          />
        ))}
      </div>
      {visibleProjects < projects?.length && (
        <Button
          buttonText="show more"
          className="button__show-more"
          onClick={handleShowMore}
        />
      )}
    </section>
  );
}

export default Projects;
