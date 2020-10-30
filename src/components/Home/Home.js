import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';
import Particles from "react-particles-js";
import { particlesOptions } from '../../particlesOptions';

const Home = () => {
  return (
  //   <Particles
  //   className="particles particles-box"
  //   params={particlesOptions}
  // >
    <main id="home"   >
      <h1  className="lg-heading">
     Raihan 
      <span className="secondary-color"> Uddin</span>
    </h1>
    <h2 className="sm-heading">
      Hi, I am {' '}
      <Typical
        steps={[
          'A Web Developer', 2000, 
          'A Programmer', 2000,
          'A Designer', 2000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </h2>
    <div className="icons">
      <a target="_blank" href="">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a target="_blank" href="https://www.facebook.com/nayan.uddin.39">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/uddin-raihan/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a target="_blank" href="https://github.com/raihanwebmaster">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </main>
  // </Particles>
  );
}

export default Home;