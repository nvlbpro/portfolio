import Button from "./Button";
import { Link } from "react-router-dom";
import "../assets/documents/fake_cv.pdf";
import myCV from "../assets/documents/fake_cv.pdf";
function About() {
  return (
    <section className="about">
      <span className="ancres" id="about"></span>
      <h2 className="about__title">ABOUT ME</h2>
      <div className="about__container">
        <div className="about__picture"></div>
        <div className="about__content">
          <h3>
            Welcome to <span className="color-text">my profile</span>
          </h3>
          <h3>- It&apos;s a pleasure for me to introduce about myself.</h3>
          <p>
            I&apos;m{" "}
            <span className="color-text">
              Nicolas Vanlerberghe from France.
            </span>
          </p>
          <p>
            I&apos;m a Network and Communications Systems Technician with 5+
            years of experience & a web developer with more than 2 years
            experience in front-end development, I have deep understanding of
            the technologies and the processes required for realising a
            successful web project from A to Z.
          </p>
          <br />
          <h3>What are my values?</h3>
          <p>
            When developing a web project, I focus on understanding the business
            goals and delivering a final product that will really work for the
            client.
          </p>
          <br />
          <p>
            <span className="bold-text">Phone:</span> +33 651 638 744
          </p>

          <p>
            <span className="bold-text">E-mail:</span>
            contact@strikelab.fr
          </p>
          <p>
            <span className="bold-text">Messenger:</span>
            @strikelab
          </p>
          <Link to={myCV} target="_blank" download>
            <Button className="button__about" buttonText="Download CV" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
