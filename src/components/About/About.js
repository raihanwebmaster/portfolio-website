import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import raihan from '../../img/raihan.jpg';

const About = () => {
    return (
        <main id="about">
            <h1 className="lg-heading">
                About <span className="secondary-color">Me</span>
            </h1>
            <h2 className="sm-heading">
                Let me introduce...
      </h2>
            <div className="about-info">
                <div className='row mb-5'>
                    <div className='col-md-4'>
                    <img src={raihan} alt="John Doe" className="bio-image" />
                    </div>
                    <div className='col-md-8'>
                    <p className='bio mt-5'>
          Passionate web app developer. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work
        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12 mb-5 col-md-4 about" style={{height:'220px'}}>
                        <div class="card " >
                            <div class="card-body">
                                <h5 style={{ color: 'black' }} class="card-title">Skills</h5>
                                <p style={{ color: 'black' }} class="card-text">
                                    • <strong>Comfortable :</strong> JavaScript, ES6, React, React Router, React-Bootstrap, HTML, CSS, Bootstrap, Express.js , Node.js, MongoDB , Firebase <br />
          • <strong>Familiar : </strong> Redux, Material-UI  <br />
          • <strong>Tools :</strong> Git, VSCode, Chrome Dev Tool<br />
          • <strong>OS :</strong> Windows
           
    </p>

                            </div>
                        </div>

                    </div>

                    <div className=" col-12  mb-5 col-md-4 about  ">
                        <div class="card  " style={{height:'220px'}} >
                            <div class="card-body">
                                <h5 style={{ color: 'black' }} class="card-title">Personal Info</h5>
                                <p style={{ color: 'black' }} class="card-text">
                                    <strong>Name</strong>          :   Raihan Uddin<br />
                                    <strong>DoB</strong>           :   28 Nov 1998 <br />
                                    <strong>Nationality</strong>   :   Bangladeshi <br />
                                    <strong>Blood Group</strong>   :  B+<br />
                                    <strong>Religion</strong>      :   Muslim <br />
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="col-12 mb-5 col-md-4 about ">
                        <div class="card " style={{height:'220px'}}>
                            <div class="card-body">
                                <h5 style={{ color: 'black' }} class="card-title">Education</h5>
                                <p style={{ color: 'black' }} class="card-text">
                                    • <strong>Programming :</strong> Web-Develper, Front-end-developer <br />
                                    <strong>Institute:</strong>   CPIA <br />
                                    <strong>Subject:</strong> Media and communication
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="cv">
            <Link  onClick={() => window.open('https://drive.google.com/file/d/1f_KVzVp7IuihtebQswx8IgG4biINNhlR/view?usp=sharing')}   className="glow-on-hover">Download CV</Link>
            </div>


        </main>
    );
};

export default About;