/* eslint-disable react/prop-types */
import ReactFlipCard from "reactjs-flip-card";
import Button from "./Button";
// import argentBankPicture from '../assets/img'
function Flipcard(props) {
   // Dynamically load the feature image from the assets folder based on the provided image filename
   const picture = require(`../assets/img/${props.image}`);
  const skills = props.skills;
  return (
    <ReactFlipCard
      flipTrigger="onClick"
      containerCss="flipcard__container"
      flipCardCss="flipcard"
      frontCss="flipcard__front"
      backCss="flipcard__back"
      frontComponent={
        <>
          <div className="flipcard__header">
            <h3 className="flipcard__title">{props.title}</h3>
          </div>
          <div className="flipcard__content">
            <img
              className="flipcard__picture"
              src={picture}
              alt={props.img}
            />
          </div>
          <div className="flipcard__footer">
            {skills?.map((skill, key) => (
              <Button
                className="button__skill"
                disabled={true}
                buttonText={skill}
                key={key}
              />
            ))}
          </div>
        </>
      }
      backComponent={
        <>
          <p>{props.speech}</p>
          <a href={props.repoGithub} target="_blank" rel="noreferrer">
            <Button
              className="button__github"
              buttonText="REPO GITHUB"
             
            />
          </a>
          <a href={props.liveDemo} target="_blank" rel="noreferrer">
            <Button
              className="button__live-demo"
              buttonText="VISIT SITE"
        
            />
          </a>
        </>
      }
    />
  );
}

export default Flipcard;
