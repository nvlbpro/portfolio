import Flipcard from "./Flipcard";
// import argentBankPicture from "../assets/img/argentbank.png";
// import argentBankPicture from "../assets/img/argentbank.png"
import { useEffect, useState } from "react";
// import projectsList from "../assets/fakeAPI/projects.json";
function Projects() {
  // const PICTURE_PATH = "../assets/img/";
  const [projets, setProjet] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./projects.json");
      const json = await data.json();
      const projectsList = json.projects;
      setProjet(projectsList);
    };
    fetchData();
  }, []);

  // const skills = ["HTML", "CSS", "REACT"];
  return (
    <section className="projects">
      <span className="ancres" id="projects"></span>
      <h2 className="projects__title">MY WORK</h2>
      <div className="projects__cards-container">

        {projets?.map((project, key) => (
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
