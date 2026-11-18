import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { profile } from './data/portfolio'
import './styles/global.css'

export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main" tabIndex={-1}><Hero /><About /><Projects /><Skills /><Education /><Contact /></main>
    <footer className="container footer"><a href="#home" className="brand"><span className="monogram">PS<span>.</span></span><span>{profile.name}</span></a><p>Made with intention. Always learning.</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>
}
