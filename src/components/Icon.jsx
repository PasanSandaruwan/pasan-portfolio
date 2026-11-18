export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r=".5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
    github: <path d="M9 19c-4.3 1.3-4.3-2-6-2.5M15 22v-3.4c0-1 .1-1.5-.5-2 3.1-.3 6.5-1.5 6.5-7A5.5 5.5 0 0 0 19.5 6c.2-.6.7-2.2-.2-4 0 0-1.2-.4-4 1.5a14 14 0 0 0-7 0C5.5 1.6 4.3 2 4.3 2c-.9 1.8-.4 3.4-.2 4A5.5 5.5 0 0 0 2.6 9.6c0 5.5 3.4 6.7 6.5 7-.5.4-.6 1.1-.6 2V22" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20" />,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
    terminal: <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="m6 8 4 4-4 4m7 0h5" /></>,
    hospital: <><rect x="5" y="3" width="14" height="19" rx="2" /><path d="M9 8h6m-3-3v6M9 16h1m4 0h1M10 22v-3h4v3" /></>,
    waves: <path d="M2 6c4-5 6 5 10 0s6 5 10 0M2 12c4-5 6 5 10 0s6 5 10 0M2 18c4-5 6 5 10 0s6 5 10 0" />,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /><path d="M5 12h4l2-4 2 8 2-4h4" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="3" /><path d="M8 7V4h8v3M2 12c5 4 15 4 20 0m-10 1v4" /></>,
    shield: <><path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z" /><path d="m8 12 3 3 5-6" /></>,
    radar: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="m12 12 8-8" /><circle cx="12" cy="12" r="1" /></>,
    graduation: <path d="m2 8 10-5 10 5-10 5-10-5Zm4 3v6c4 3 8 3 12 0v-6m4-3v9" />,
    sparkle: <path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.code}</svg>
}
