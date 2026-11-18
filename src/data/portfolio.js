// Editable content. Asset paths are relative to public/. Empty fields stay hidden.
export const profile = {
  name: 'Pasan Sandaruwan', givenName: 'Pasan', familyName: 'Sandaruwan', role: 'Software Engineering Undergraduate', institution: 'SLIIT',
  email: 'pasanudarasandaruwan11@gmail.com', github: 'https://github.com/PasanSandaruwan',
  linkedin: 'https://www.linkedin.com/in/pasan-sandaruwan-94a962377/',
  portrait: '/images/profile.png',
  cv: '/documents/pasan-sandaruwan-cv.pdf',
  introduction: 'Turning curiosity into thoughtful software. Exploring full-stack development through projects that connect technology with everyday challenges.',
  about: 'I’m Pasan, a Software Engineering undergraduate at SLIIT. I’m learning by building — connecting interfaces, APIs, and databases to understand how useful software comes together.',
  aboutMore: 'My project work explores healthcare, marine protection, community safety, and more. Each project is an opportunity to ask better questions, work through a new challenge, and keep improving.',
}
export const navigation = [{ id: 'about', label: 'About' }, { id: 'projects', label: 'Projects' }, { id: 'skills', label: 'Skills' }, { id: 'education', label: 'Education' }]
export const projects = [
  { id: 'hems', name: 'HEMS', category: 'Healthcare', icon: 'hospital', color: 'violet',
    description: 'A MERN-stack system for hospital employee administration, with scheduling, leave and finance management, and role-based access.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'], github: 'https://github.com/PasanSandaruwan/HEMS', image: '/images/projects/hems.png', imageAlt: 'HEMS design concept with hospital illustration and employee sign-in form', collaboration: 'Team project',
    sourceNote: 'GitHub description verifies scope and stack; contributor history shows collaborative development. Individual responsibilities need confirmation.' },
  { id: 'aquashield', name: 'AquaShield', category: 'Environment', icon: 'waves', color: 'teal',
    description: 'An academic team project for monitoring illegal fishing, managing protected marine species, and handling incident reports and cases.',
    technologies: ['React', 'Express', 'MongoDB', 'Tailwind CSS'], github: 'https://github.com/PasanSandaruwan/AquaShield', image: '/images/projects/aquashield.png', imageAlt: 'AquaShield design concept with blue branding and sign-in form', collaboration: 'Team project',
    sourceNote: 'README explicitly identifies a group academic project. No individual contribution is claimed.' },
  { id: 'carelink', name: 'CareLink', category: 'Healthcare', icon: 'heart', color: 'blue',
    description: 'A healthcare microservices platform bringing together patient and doctor management, appointment scheduling, telemedicine, and payment services.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'], github: 'https://github.com/PasanSandaruwan/CareLink', image: '/images/projects/carelink.png', imageAlt: 'CareLink design concept with patient and doctor sign-in options', collaboration: 'Team project',
    sourceNote: 'Features and stack verified from README; contributor history shows collaborative development. Confirm individual responsibilities.' },
  { id: 'jobportal', name: 'Online Job Portal', category: 'Web development', icon: 'briefcase', color: 'peach',
    description: 'A web-based job portal built with PHP and MySQL, supported by HTML, CSS, and JavaScript. Developed as a collaborative project.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'], github: 'https://github.com/PasanSandaruwan/Online_Job_Portal', image: '/images/projects/onlinejobs.png', imageAlt: 'Online Job Portal design concept with job seeker and recruiter sign-in options', collaboration: 'Team project',
    sourceNote: 'Stack supplied by owner; README lists multiple team members. No individual contribution is inferred.' },
  { id: 'herpath', name: 'HerPath', category: 'Community safety', icon: 'shield', color: 'pink',
    description: 'An Android-first women’s safety app for privacy-conscious incident reporting, community safety maps, route comparison, and journey tracking.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Express'], github: 'https://github.com/PasanSandaruwan/herpath-womens-safety-network', image: '/images/projects/herpath.png', imageAlt: 'HerPath design concept showing a phone with incident reporting, map, and journey options', collaboration: 'Team project',
    sourceNote: 'Scope and stack verified from README; contributor history shows collaborative development. Community safety context is not a guarantee of safety. Confirm individual responsibilities.' },
  { id: 'disaster', name: 'Smart Disaster Response System', category: 'Emergency response', icon: 'radar', color: 'amber',
    description: 'A team project establishing mobile, web, and API foundations for disaster early warning and emergency coordination. End-to-end workflows are still in development.',
    technologies: ['React', 'React Native', 'TypeScript', 'PostgreSQL'], github: 'https://github.com/PasanSandaruwan/smart-disaster-response-system', image: '/images/projects/disaster-response.png', imageAlt: 'Smart Disaster Response System design concept showing hazard reports, alerts, relief resources, and a Sri Lanka map with demo data', collaboration: 'Team project', status: 'In Progress',
    sourceNote: 'README identifies shared academic foundations and team ownership. No completed business workflows or personal results are claimed.' },
]
// Technologies used across the listed projects; these are not proficiency ratings.
export const skillGroups = [
  { title: 'Frontend & mobile', icon: 'code', description: 'The part people interact with.', items: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend & databases', icon: 'database', description: 'Connecting the pieces behind the scenes.', items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'MySQL', 'PostgreSQL'] },
  { title: 'Tools & workflow', icon: 'terminal', description: 'From local development to shared code.', items: ['Git', 'GitHub', 'Vite', 'Docker', 'Expo'] },
]
export const education = [{ institution: 'Sri Lanka Institute of Information Technology', short: 'SLIIT', title: 'Software Engineering Undergraduate', status: 'Currently studying', description: 'Building a foundation in software engineering through academic study and practical project work.' }]
// Add real certificates only: { title, issuer, date, url }.
export const certificates = []
