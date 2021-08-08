
export default function ProjectsCard({ name, github, deployedlink, tools, source, role, about }) {

  return (
    <div >
      <div className="card">
        <div className="col-1-of-2">
          <img className="card__picture card__picture--1" alt='projects screenshots' src={require(`../../assets/images/${name}.png`).default} />
        </div>
        <div className="col-1-of-2">
          <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--1">{name}</span>
          </h4>
          <div class="card__details">
            <ul>
              <li><a className='link' href={github}>Github</a></li>
              <li><a className='link' href={deployedlink}>Deployed link</a></li>
              <li>{tools}</li>
              <li>{role}</li>
              <li>{about}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

