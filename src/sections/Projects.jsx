import { useState } from 'react'
import { projects, profile } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Icon from '../components/Icon'
export default function Projects() {
  const [filter, setFilter] = useState('All projects')
  const filters = ['All projects', 'Healthcare', 'Environment', 'Community & safety']
  const shown = projects.filter(project => filter === 'All projects' || project.category === filter || (filter === 'Community & safety' && ['Community safety', 'Emergency response'].includes(project.category)))
  return <section id="projects" className="section container"><div className="heading-row"><SectionHeading number="02" eyebrow="IDEAS INTO IMPLEMENTATION" title={<>Things I’ve been <span className="accent">building.</span></>}>A collection of projects, experiments, and lessons along the way.</SectionHeading><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <Icon name="arrow" size={18} /><span className="sr-only"> (opens in a new tab)</span></a></div>
    <div className="project-filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} type="button" className={filter === item ? 'filter active' : 'filter'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'All projects' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div>
    <p className="sr-only" role="status">Showing {shown.length} projects</p><div className="project-grid">{shown.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div>
  </section>
}
