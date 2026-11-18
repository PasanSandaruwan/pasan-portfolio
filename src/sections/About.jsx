import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
export default function About() {
  return <section id="about" className="section container about-section"><div><SectionHeading number="01" eyebrow="THE PERSON BEHIND THE CODE" title={<>A curious mind.<br /><span className="accent">A builder at heart.</span></>} /><div className="about-signature">Pasan<span> ✧</span></div></div><div className="about-copy"><p className="lead">{profile.about}</p><p>{profile.aboutMore}</p><div className="about-values"><div><Icon name="code" /><span>Learning through building</span></div><div><Icon name="sparkle" /><span>Thoughtful about the details</span></div></div></div></section>
}
