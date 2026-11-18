import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
export default function Hero() {
  return <section id="home" className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy"><div className="intro-label"><span /> A LITTLE CURIOSITY. A LOT OF POSSIBILITY.</div>
      <p className="hero-greeting">Hello, I’m</p><h1 id="hero-title">{profile.givenName}<br /><span>{profile.familyName}<span className="name-dot">.</span></span></h1>
      <p className="hero-role">{profile.role}<br /><span>at {profile.institution}</span></p><p className="hero-description">{profile.introduction}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <Icon name="arrow" size={18} /></a><a className="button button-secondary" href="#contact">Contact Me <Icon name="mail" size={18} /></a><a className="button button-secondary" href={profile.cv} download>Download CV <Icon name="download" size={18} /></a></div>
      <div className="hero-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="Pasan on GitHub (opens in a new tab)"><Icon name="github" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Pasan on LinkedIn (opens in a new tab)"><Icon name="linkedin" /></a><span className="social-divider" /><span>Learning. Building. Evolving.</span></div>
    </div>
    <div className="portrait-scene"><span className="portrait-star star-one" aria-hidden="true">✳</span><span className="portrait-star star-two" aria-hidden="true">+</span><div className="portrait-orbit" />
      <div className="portrait-frame"><img src={profile.portrait} alt="Pasan Sandaruwan" width="1254" height="1254" fetchPriority="high" /></div>
      <div className="floating-note note-top"><Icon name="code" size={20} /><span>Curiosity meets code</span></div><div className="floating-note note-bottom"><span className="note-icon"><Icon name="graduation" size={23} /></span><div>Software Engineering<span>Undergraduate @ SLIIT</span></div></div>
    </div><a href="#about" className="scroll-cue"><span className="scroll-mouse"><span /></span> A little more about me <span aria-hidden="true">↓</span></a>
  </section>
}
