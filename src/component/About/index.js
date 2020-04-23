import React from "react";
import "./styles.css";

import Header from "../../component/Header";
import Profile from "../../objects/Profile";
import Title from "../../objects/Title";

import iconFacebook from "../../img/facebook-icon.png";
import iconGithub from "../../img/github-icon.png";
import iconInstagran from "../../img/instagran-icon.png";
import iconLinkedin from "../../img/linkedin-icon.png";
import iconTwitter from "../../img/twitter-icon.png";

const About = ({togleAbout}) => (
  <section className="about">
    <Header logo="white" togleAbout={togleAbout}/>
    <Profile />
    <Title content="Rafael Piedade" />
    <p className="text">
      Migrei de palhaço para Dev.
      <br />
      Front-End/UX e agora eu trabalho na comunidade da Impulso
    </p>

    <ul className="social">
      <li className="item">
        <a href="!#">
          <img src={iconGithub} alt="Social midia" />
        </a>
      </li>
      <li className="item">
        <a href="!#">
          <img src={iconFacebook} alt="Social midia" />
        </a>
      </li>
      <li className="item">
        <a href="!#">
          <img src={iconTwitter} alt="Social midia" />
        </a>
      </li>
      <li className="item">
        <a href="!#">
          <img src={iconInstagran} alt="Social midia" />
        </a>
      </li>
      <li className="item -last">
        <a href="!#">
          <img src={iconLinkedin} alt="Social midia" />
        </a>
      </li>
    </ul>
  </section>
);

export default About;
