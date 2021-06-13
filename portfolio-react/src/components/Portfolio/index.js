import React from 'react';

function Portfolio() {
  return (
    <section>
      <h1>PROJECT</h1>
      <p>DESCRIPTION</p>
    </section>
  );
}
export default Portfolio;

// import { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import PortfolioCard from '../PortfolioCard';
// import projects from '../../projects.json';
// const Project = () => {
//   const params = useParams();
//   const history = useHistory();
//   const [ currentProject, setCurrentProject ] = useState('');
//   useEffect(() => {
//     const selectedProject = projects.find(project => project.id === Number(params.projectId));
//     setCurrentProject(selectedProject );
//   }, [params.projectdId])
//   console.log(params);
//   console.log(history);
//   return (
//     <div>
//       <PortfolioCard
//         name={currentProject.name}
//         github={currentProject.github}
//         img={currentProject.img}
//         deployedlink={currentProject.deployedlink}
//         tools={currentProject.tools}
//       />
//       {/* <button
//         onClick={() => history.push('/Home')}
//       >Go home</button> */}
// //     </div>
//   )
// }
// export default Project;
