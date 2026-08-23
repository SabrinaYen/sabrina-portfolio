const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '8+', label: 'Projects delivered' },
  { value: '4', label: 'Languages spoken' },
]

const skills = [
  'React',
  'Next.js',
  'Vue 2',
  'React Native',
  'JavaScript',
  'jQuery',
  '.NET Core',
  'Python',
  'MySQL / MSSQL',
  'Firebase',
  'PostgreSQL',
  'Figma',
]

const projects = [
  {
    title: 'Setia Didik',
    type: 'E-commerce Experience',
    description:
      'Delivered client-side features for an online bookstore, building responsive layouts and debugging across devices to keep the shopping experience reliable.',
    tags: ['JavaScript', 'jQuery', 'Responsive'],
    link: 'https://setiadidik.com/',
  },
  {
    title: 'Toyota Dream Car Art Contest',
    type: 'Campaign Landing Page',
    description:
      'Built a static one-page contest site for Toyota Malaysia using HTML, CSS, and Bootstrap, with interactive sections for contest details and requirements.',
    tags: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://toyota.com.my/dreamcarartcontest',
  },
  {
    title: 'Aequo360',
    type: 'Healthcare Platform',
    description:
      'Maintained a medical booking platform, keeping multilingual content up to date and shipping client-side features that kept records and reservations running smoothly.',
    tags: ['JavaScript', 'jQuery', 'Localization'],
    link: 'https://www.aequo360.com/en',
  },
  {
    title: 'MetalHead NFT',
    type: 'Web3 Experience',
    description:
      'Built responsive UI components for an NFT collection site, helping users explore lore and mint pieces from the collection.',
    tags: ['Next.js', 'UI Components'],
    link: 'https://metalheadsnft.com/',
  },
  {
    title: 'Interact',
    type: 'CMS Platform',
    description:
      'Built UI across web and mobile for a CMS system tracking company revenue and sales, using Next.js and React Native.',
    tags: ['Next.js', 'React Native', 'CMS'],
    link: 'https://interact.com.my/',
  },
  {
    title: 'Study Timer',
    type: 'Personal Project',
    description:
      'Designed and built a desktop-friendly study timer with a motivational message API, helping students stay focused through work and break sessions.',
    tags: ['React', 'API Integration'],
    link: 'https://study-timer-eight.vercel.app/',
  },
]

const experience = [
  {
    role: 'Assistant Manager (Senior Software Engineer)',
    company: 'Aeon Credit Sdn Bhd',
    period: 'Oct 2024 — Present',
    summary:
      'Restructuring frontend applications with React.js while designing and optimizing .NET Core APIs, MSSQL/MySQL databases, and GitLab CI/CD pipelines with AWS Lambda for smoother, faster deployments.',
  },
  {
    role: 'Frontend Developer',
    company: 'Snsoft Sdn Bhd',
    period: 'Jun 2022 — Oct 2024',
    summary:
      'Built responsive landing pages and platform features with JavaScript and jQuery, led periodic code reviews, and specialized in mini-program development for enterprise clients.',
  },
  {
    role: 'Frontend Developer (Part-Timer)',
    company: 'Revnology PLT',
    period: 'Aug 2022 — Oct 2022',
    summary:
      'Delivered quick fixes and built standalone landing pages while maintaining and monitoring existing sites for issues.',
  },
  {
    role: 'Intern / Part-Timer',
    company: 'Revnology PLT',
    period: 'Jun 2021 — Jan 2022',
    summary:
      'Built responsive interfaces, managed multilingual project data, and debugged issues while learning new programming languages on the job.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Sabrina home">
          Sabrina<span>.</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-primary" href="#contact">
          Let’s talk
        </a>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>
              I build responsive, reliable interfaces across React, Next.js, and
              .NET.
            </h1>
            <p className="lead">
              I’m Sabrina, a frontend developer who enjoys turning ideas into
              polished, tested web experiences — from e-commerce and healthcare
              platforms to NFT and CMS projects. Currently exploring full-stack
              development to round out the picture.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects
              </a>
              <a
                className="button button-secondary"
                href="mailto:sabrinayen1301@gmail.com"
              >
                Email me
              </a>
            </div>

            <div className="stats" aria-label="Key statistics">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card" aria-label="Profile summary">
            <div className="avatar-ring">
              <div className="avatar">SY</div>
            </div>
            <div className="mini-card">
              <span className="mini-label">Currently</span>
              <strong>
                Assistant Manager (Senior Software Engineer) at Aeon Credit
              </strong>
            </div>
            <ul className="check-list">
              <li>Frontend architecture with React &amp; Next.js</li>
              <li>REST API integration with .NET Core</li>
              <li>Responsive, cross-platform interfaces</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Practical, detail-driven frontend development.</h2>
          </div>

          <div className="about-grid">
            <p>
              I’m an enthusiastic learner and programmer passionate about
              growing practical skills — actively involved in projects
              spanning NFT platforms, medical booking systems, e-commerce, and
              fitness web development.
            </p>
            <p>
              Specialized in front-end development and thorough testing, I’m
              eager to collaborate, strengthen my problem-solving skills, and
              contribute to future development. I’m currently exploring
              full-stack development to build a more complete understanding
              of the industry.
            </p>
          </div>

          <div className="tag-list skill-list" aria-label="Skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Recent projects.</h2>
            </div>
            <a href="#contact" className="text-link">
              Start a project
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <span className="project-type">{project.type}</span>
                  <span className="project-dot" aria-hidden="true"></span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    className="text-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Building with intention.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div key={item.role} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Let’s build something reliable</p>
              <h2>Looking for a frontend developer who sweats the details?</h2>
            </div>
            <a
              className="button button-primary"
              href="mailto:sabrinayen1301@gmail.com"
            >
              sabrinayen1301@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Sabrina Yen</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/sabrina-yen-sook-ping-8843a9206"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sabrinayen1301@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
