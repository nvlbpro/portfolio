import Tile from "./Tile";

function Skills() {
  const skills = {
    skills: [
      "apache",
      "blinka",
      "debian",
      "figma",
      "gimp",
      "gnu",
      "jira",
      "micropython",
      "raspberrypi",
      "mongodb",
      "mysql",
      "node",
      "php",
      "react",
      "redux",
      "sass",
      "jest",
    ],
  };

  return (
    <section className="skills">
      <span className="ancres" id="skills"></span>
      <div className="skills__container">
        {skills.skills?.map((skill, key) => (
          <Tile skill={skill} key={key} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
