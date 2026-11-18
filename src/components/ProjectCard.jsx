import Icon from './Icon'
export default function ProjectCard({ project, index }) {
  return <article className={`project-card theme-${project.color}`}>
    <figure className="project-cover">
      <div className="project-visual"><img src={project.image} alt={project.imageAlt} loading="lazy" width="1672" height="941" /></div>
      <figcaption className="project-caption"><span className="project-number">0{index + 1}</span><span>Design concept</span>{project.status && <span className="project-status"><span />{project.status}</span>}</figcaption>
    </figure>
    <div className="project-body"><div className="project-meta"><span>{project.category}</span>{project.collaboration && <span>{project.collaboration}</span>}</div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <ul className="tags" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <a className="project-link" href={project.github} target="_blank" rel="noreferrer"><span><Icon name="github" size={17} /> View repository<span className="sr-only"> for {project.name} (opens in a new tab)</span></span><Icon name="arrow" size={19} /></a>
    </div>
  </article>
}
