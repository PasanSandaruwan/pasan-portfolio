import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/portfolio'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const button = useRef(null)
  const header = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-20% 0px -55% 0px' })
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const close = event => {
      if (event.type === 'keydown' && event.key === 'Escape') { setOpen(false); button.current?.focus() }
      if (event.type === 'pointerdown' && !header.current?.contains(event.target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 761px)')
    const resize = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    media.addEventListener('change', resize)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); media.removeEventListener('change', resize) }
  }, [open])
  return <header className="nav-shell" ref={header} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }}>
    <a className="monogram" href="#home" aria-label="Pasan Sandaruwan home" onClick={() => setOpen(false)}>PS<span>.</span></a>
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav id="primary-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a className="nav-contact" href="#contact" aria-current={active === 'contact' ? 'location' : undefined} onClick={() => setOpen(false)}>Let’s talk <Icon name="arrow" size={15} /></a>
    </nav>
  </header>
}
