// // import React from 'react';

// // function Portfolio() {
// //   return (
// //     <section>
// //       <h1>PROJECT</h1>
// //       <p>DESCRIPTION</p>
// //     </section>
// //   );
// // }
// // export default Portfolio;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PortfolioCard from '../PortfolioCard';
// import projects from '../../projects.json';
// import './style.css'

// const Project = () => {
//   // const params = useParams();
//   // const history = useHistory();
//   const [ currentProject, setCurrentProject ] = useState([]);
//   useEffect(() => {
//     // const selectedProject = projects.map(project => project.id === Number(params.projectId));
//     setCurrentProject(projects);
//   }, [])
//   // console.log(params);
//   // console.log(history);
//   return (
//     <div class='container'>
//       {projects.map((project) => {
//         return <PortfolioCard
//         name={project.name}
//         github={project.github}
//         img={project.img}
//         deployedlink={project.deployedlink}
//         tools={project.tools}
//       />
//       }) }

//       {/* <button
//         onClick={() => history.push('/Home')}
//       >Go home</button> */}
// //     </div>
//   )
// }
// export default Project;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioCard from '../PortfolioCard';
import projects from '../../projects.json';

export default function Portfolio() {
  return (
<section class="section-tours" id="section-tours">
<div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">
        Most popular tours
    </h2>
</div>

<div class="row">
    <div class="col-1-of-3">
       <div class="card">
           <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
                </h4>
                <div class="card__details">
                    <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
           </div>
           <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">$297</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
            </div>
       </div>
    </div>

</div>

<div class="u-center-text u-margin-top-huge">
    <a href="#" class="btn btn--green">Discover all tours</a>
</div>
</section>
  );
}

