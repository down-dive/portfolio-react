// import React from 'react';

// function Portfolio() {
//   return (
//     <section>
//       <h1>PROJECT</h1>
//       <p>DESCRIPTION</p>
//     </section>
//   );
// }
// export default Portfolio;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioCard from '../PortfolioCard';
import projects from '../../projects.json';
import './style.css'

const Project = () => {
  // const params = useParams();
  // const history = useHistory();
  const [ currentProject, setCurrentProject ] = useState([]);
  useEffect(() => {
    // const selectedProject = projects.map(project => project.id === Number(params.projectId));
    setCurrentProject(projects);
  }, [])
  // console.log(params);
  // console.log(history);
  return (
    <div class='container'>
      {projects.map((project) => {
        return <PortfolioCard
        name={project.name}
        github={project.github}
        img={project.img}
        deployedlink={project.deployedlink}
        tools={project.tools}
      />
      }) }

      {/* <button
        onClick={() => history.push('/Home')}
      >Go home</button> */}
//     </div>
  )
}
export default Project;
