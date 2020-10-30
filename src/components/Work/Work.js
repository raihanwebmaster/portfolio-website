import React from 'react';
import './Work.css';
import AllProjects from '../../Data/AllProjects';
import Singlework from '../Singlework/Singlework';


const Work = () => {
    const projects = AllProjects;
  return (
    <main id="work">
    <h1 className="lg-heading">
      My <span className="secondary-color">Work</span>
    </h1>
    <h2 className="sm-heading">
      Check out some of my projects...
    </h2>
    <div className="project-page"  id="work">
             {
                 projects.map(project =><Singlework key={project.id} project ={project}></Singlework>)
            }
       </div>
  </main>
  );
}

export default Work;
