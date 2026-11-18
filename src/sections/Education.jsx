import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { education, certificates } from '../data/portfolio'
export default function Education() {
  return <section id="education" className="section container education-section"><SectionHeading number="04" eyebrow="THE FOUNDATION" title={<>Learning with <span className="accent">purpose.</span></>}>An ongoing journey in software engineering.</SectionHeading><div className="education-list">{education.map(item => <article className="education-card" key={item.institution}><div className="education-symbol"><Icon name="graduation" size={32} /></div><div><span className="education-status"><span />{item.status}</span><h3>{item.title}</h3><p className="institution">{item.institution} <span>({item.short})</span></p><p>{item.description}</p></div></article>)}
    {certificates.length > 0 && <div className="certificates"><h3>Certificates</h3>{certificates.map(item => <article key={`${item.issuer}-${item.title}`}><h4>{item.title}</h4><p>{item.issuer} · {item.date}</p>{item.url && <a className="text-link" href={item.url} target="_blank" rel="noreferrer">View certificate <Icon name="arrow" /></a>}</article>)}</div>}</div></section>
}
