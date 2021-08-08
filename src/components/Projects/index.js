import ProjectsCard from '../ProjectsCard';
import projects from '../../projects';

export default function Projects() {
  return (
    <section class="section-tours" id="projects">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          Projects
        </h2>
      </div>
      <div class="row">
        <div class='container'>
          {projects.map((project) => {
            return <ProjectsCard
            key={project.name}
              name={project.name}
              github={project.github}
              img={project.img}
              deployedlink={project.deployedlink}
              tools={project.tools}
              role={project.role}
              about={project.about}
            />
          })}
        </div>
      </div>
    </section>
  );
}

