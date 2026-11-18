import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { skillGroups } from '../data/portfolio'
export default function Skills() {
  return <section id="skills" className="section container"><SectionHeading number="03" eyebrow="MY GROWING TOOLKIT" title={<>The tools behind <span className="accent">the ideas.</span></>}>Technologies I’m working with across my projects. Always room to learn more.</SectionHeading><div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-group" key={group.title}><div className="skill-top"><span className="skill-icon"><Icon name={group.icon} size={25} /></span><span className="small-number">0{i + 1}</span></div><h3>{group.title}</h3><p>{group.description}</p><ul className="skill-list">{group.items.map(item => <li key={item}><span />{item}</li>)}</ul></article>)}</div></section>
}
