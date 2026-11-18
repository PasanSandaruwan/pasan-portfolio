import { useState } from 'react'
import { profile } from '../data/portfolio'
import Icon from '../components/Icon'
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied to clipboard.') }
    catch { setCopyStatus('Could not copy. You can select the email address or use the email link.') }
  }
  return <section id="contact" className="section container"><div className="contact-panel"><div className="eyebrow"><span>05 /</span> THE NEXT CONVERSATION</div><Icon name="sparkle" size={42} className="contact-sparkle" /><h2>Good things start<br />with <span className="accent">a hello.</span></h2><p>Have an idea, a question, or something worth building?<br />I’d love to hear from you.</p><a href={`mailto:${profile.email}`} className="button button-primary">Say Hello <Icon name="arrow" size={19} /></a><div><a className="contact-cv text-link" href={profile.cv} target="_blank" rel="noopener noreferrer">View CV <Icon name="arrow" size={18} /><span className="sr-only"> (PDF, opens in a new tab)</span></a></div><div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" className="copy-button" onClick={copyEmail} aria-label="Copy email address"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></svg></button></div><p role="status" className="copy-status">{copyStatus}</p><a className="contact-github text-link" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> Find me on GitHub <Icon name="arrow" size={16} /><span className="sr-only"> (opens in a new tab)</span></a><a className="contact-github text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /> Connect on LinkedIn <Icon name="arrow" size={16} /><span className="sr-only"> (opens in a new tab)</span></a></div></section>
}
