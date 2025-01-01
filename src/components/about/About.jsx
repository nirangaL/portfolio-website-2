import React from "react";
import "./about.css";

import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years working</small>
            </div>
            <div className="about__card">
              <LuUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ worldwide</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>5+ Completed </small>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
            ipsum purus, ac malesuada arcu suscipit eu. Phasellus efficitur
            rutrum mattis. Integer vitae maximus nulla. Integer a congue dui, ut
            commodo eros. Sed ut dui egestas, faucibus nulla sed, eleifend mi.
            Praesent a congue arcu. Etiam leo est, tincidunt nec ullamcorper
            eget, elementum tincidunt nisl.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
