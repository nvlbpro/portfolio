import Flipcard from "./Flipcard";

import { useEffect, useState } from "react";

function Projects() {

  const [projects, setProject] = useState(null);
  
  //mock API
  const fetchData = async () => {
    const data = await fetch("./projects.json");
    const json = await data.json();
    const projectsList = json.projects;
    setProject(projectsList);
  };

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <section className="projects">
      <span className="ancres" id="projects"></span>
      <h2 className="projects__title">MY WORK</h2>
      <div className="projects__cards-container">

        {projects?.map((project, key) => (
          <Flipcard
            key={key}
            title={project.title}
            // img={`../../src/assets/img/${project.picture}`}
            image={project.picture}
            // img={argentBankPicture}
            skills={project.skills}
            alt={project.picture}
            speech={project.speech}
            liveDemo={project.liveDemo}
            repoGithub={project.repoGithub}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
