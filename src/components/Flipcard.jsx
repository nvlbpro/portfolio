/* eslint-disable react/prop-types */
import ReactFlipCard from "reactjs-flip-card";
import Button from "./Button";
// import argentBankPicture from '../assets/img'
function Flipcard(props) {
  // Dynamically load the feature image from the assets folder based on the provided image filename
  const cover = require(`../assets/img/projects/${props.cover}`);
  const logo = require(`../assets/img/projects/${props.logo}`);
  const logoOC = require(`../assets/img/logo/logo-oc.png`);
  // Load skills from the '../assets/img/logo' folder
  const skillsLogos = props.skills?.map((skill, key) => {
    const skillLogosPath = require(`../assets/img/logo/${skill}.png`);
    return (
      <img
        key={key}
        src={skillLogosPath}
        alt={skill}
        className="flipcard__skill"
      />
    );
  });

  const competences = props.competences;
  return (
    <ReactFlipCard
      flipTrigger="onClick"
      containerCss="flipcard__container"
      flipCardCss="flipcard"
      frontCss="flipcard__front"
      backCss="flipcard__back"
      frontComponent={
        <>
          {/* <div className="flipcard__header">
            <h3 className="flipcard__title">{props.title}</h3>
          </div> */}
          <div className="flipcard__content">
            <img
              className="flipcard__front-cover"
              src={cover}
              alt={props.cover}
            />
            <img className="flipcard__logo" src={logo} alt={props.logo} />
          </div>
        </>
      }
      backComponent={
        <>
          <img className="flipcard__back-cover" src={cover} alt={props.cover} />
          <div className="flipcard__header">
            <img className="logo-oc" src={logoOC} alt="logo openclassrooms" />
            <p>PARCOURS INTEGRATEUR WEB</p>
          </div>
          <h3>{props.title}</h3>

          <ul>
            {competences?.map((competence, key) => (
              <li className="flipcard__competence" key={key}>
                {competence}
              </li>
            ))}
          </ul>

          <div className="flipcard__footer">{skillsLogos}</div>

          <div className="flipcard__links-container">
            <a href={props.repoGithub} target="_blank" rel="noreferrer">
              <Button className="button__github" buttonText="REPO GITHUB">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </Button>
            </a>

            <a href={props.liveDemo} target="_blank" rel="noreferrer">
              <Button className="button__live-demo" buttonText="VISIT SITE">
                <i className="fa-solid fa-globe"></i>
              </Button>
            </a>
          </div>
        </>
      }
    />
  );
}

export default Flipcard;
