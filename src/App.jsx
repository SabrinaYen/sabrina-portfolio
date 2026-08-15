
const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '18', label: 'Projects launched' },
  { value: '96%', label: 'Client satisfaction' },
]

const skills = [
  'React',
  'TypeScript',
  'UI Design',
  'Figma',
  'Node.js',
  'Brand Strategy',
  'SEO',
  'Analytics',
]

const projects = [
  {
    title: 'Northstar Studio',
    type: 'Brand + Web Experience',
    description:
      'Redesigned a boutique creative studio’s digital presence to increase inquiries and showcase premium service offerings.',
    tags: ['Strategy', 'Design', 'Development'],
  },
  {
    title: 'Bloom & Co.',
    type: 'E-commerce Experience',
    description:
      'Built a conversion-focused storefront for a wellness brand with streamlined product storytelling and mobile-first UX.',
    tags: ['React', 'UX', 'Optimization'],
  },
  {
    title: 'Aster dashboard',
    type: 'Product Interface',
    description:
      'Designed a reporting dashboard that simplified complex data for teams and improved day-to-day operational clarity.',
    tags: ['Product Design', 'Research', 'UI'],
  },
]

const experience = [
  {
    role: 'Senior Product Designer',
    company: 'Luma Labs',
    period: '2022 — Present',
    summary:
      'Leading end-to-end product design for SaaS workflows, building stronger product narratives and improving user retention.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: '2019 — 2022',
    summary:
      'Partnered with startups and service brands to craft conversion-driven websites, landing pages, and digital experiences.',
  },
  {
    role: 'Visual Designer',
    company: 'Studio North',
    period: '2017 — 2019',
    summary:
      'Shaped brand systems, marketing assets, and web experiences for clients across creative and lifestyle sectors.',
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
            <p className="eyebrow">Product designer + creative developer</p>
            <h1>
              I design thoughtful digital experiences that feel as good as they
              perform.
            </h1>
            <p className="lead">
              I’m Sabrina, a multidisciplinary designer helping brands turn ideas
              into memorable products, polished websites, and clear storytelling.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects
              </a>
              <a className="button button-secondary" href="mailto:sabrina@example.com">
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
              <div className="avatar">SC</div>
            </div>
            <div className="mini-card">
              <span className="mini-label">Currently</span>
              <strong>Available for freelance work</strong>
            </div>
            <ul className="check-list">
              <li>Brand-led product design</li>
              <li>Conversion-focused UX</li>
              <li>Responsive interfaces</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Creative direction rooted in clarity.</h2>
          </div>

          <div className="about-grid">
            <p>
              I blend strategy, storytelling, and digital craft to design experiences
              that are intuitive, expressive, and built to convert. My process starts
              with listening, then turning complex ideas into simple, elegant design
              systems.
            </p>
            <p>
              From concept to execution, I help founders and teams shape how their
              work is seen, understood, and remembered across web, product, and brand
              touchpoints.
            </p>
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
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Designing with intention.</h2>
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
              <p className="eyebrow">Let’s build something meaningful</p>
              <h2>Need a polished digital presence that feels premium?</h2>
            </div>
            <a className="button button-primary" href="mailto:sabrina@example.com">
              sabrina@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Sabrina Carter</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
