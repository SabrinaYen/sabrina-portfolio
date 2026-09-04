import React, { useEffect, useState } from 'react';
import { personalData, stats, skills, experience, projects } from './assets/data/personal-data.js';
import {
  IconEmail,
  IconEmailAlt,
  IconUser,
  IconGithub,
  IconLinkedin,
  IconCodeBrackets,
  IconDatabase,
  IconCloud,
  IconCheckCircle,
  IconGitBranch,
  IconBriefcase,
  IconExternalLink
} from './assets/imgs/icons/icons.jsx';
const App = () => {
  // experience tab navigation
  const [year ,setYear] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const [selectedExp, setSelectedExp] = useState(experience[0]);
  const [projectData, setProjectData] = useState(projects.filter(i => i.isSensitive === false));
  const iconMap = {
    github: <IconGithub />,
    database:< IconDatabase/>,
    cloud:< IconCloud />,
    code: `_>`,
    checked: <IconCheckCircle/>
  };
  const goNext = (isNext) => {
    
    if (isNext) {
      setActiveExp((i) => (i === experience.length - 1 ? 0 : i + 1))
      setSelectedExp(experience[activeExp])
    } else {
      setActiveExp((i) => (i === 0 ? experience.length - 1 : i - 1))
      setSelectedExp(experience[activeExp])
    }
  };
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search);
    if (queryParam.get("showAll") === true) {
      setShowAll(true);
      setProjectData(projects);
    }

  }, [])


  return (
    <div className="page-shell">
      <header className="header-container">
        <div className="left-content">
          <span className="tiny-box"></span>
          <span className="nav-brand">{personalData.name}</span>
        </div>
        <div className="right-content">
          <span className="nav">
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <button className="button button-primary">Get in Touch</button>
          </span>
        </div>
      </header>
      <section>
        <div className="section-container">
          <div><h1>{personalData.name}</h1><p>{personalData.curTitle}</p></div>
          <p className="title-position">Four Years of Experience</p>
          <p className="description">Nine years building the parts of a product nobody sees: payment pipelines that reconcile to the cent, build systems that finish before you switch tabs, and APIs other engineers actually enjoy calling.</p>
          <div className="contact-content">
            <div className="button button-primary email">
              <a href={`mailto:${personalData.email}`}><IconEmail alt="email-icon" />{" "}
                {personalData.email}</a>
            </div>
            <div className="phone">
              <a href="tel:+1234567890">Résumé (PDF)</a>
            </div>
          </div>
        </div>
        <div className="code-box">
          <p className="header-code">~/whoami</p>
          <pre className="code-content">
            <span className="prompt-char">$</span> sabrina --stack <br />
            <span className="prompt-arrow">→</span> react . vuejs2 . dotnet . python . javascript . jquery<br />
            <span className="prompt-char">$</span> sabrina --uptime<br />
            <span className="prompt-arrow">→</span> · 4years .<br />
            <span className="prompt-char">$</span> sabrina --location<br />
            <span className="prompt-arrow">→</span> Malaysia<br />
            <span className="prompt-char">$</span> sabrina --status<br />
            <span className="prompt-arrow">→</span> open to work<br />
          </pre>
        </div>
      </section>
      <hr className="divider" />
      <section id="about">
        <div className="section-container">
          <div><span className="breadcrumbs">
            <IconUser className="icon-blue" alt="user-icon" />01 / about</span>
            <h2>I make code fun and easy.</h2>
          </div>
        </div>
        <div className="description">
          <p>Hi, I'm Sabrina Yen, a software engineer with a passion for building elegant and efficient solutions. With four years of experience in the industry, I specialize in creating seamless user experiences and robust backend systems.</p>
        </div>
      </section>
      <hr className="divider" />
      <section id="skills">
        <div className="section-container">
          <div className="d-flex">
            <span className="breadcrumbs">
              <IconCodeBrackets className="icon-blue" alt="code-icon" />02 / techstack & skills
            </span>
            <div className="skills-listing">
              {skills.map((skillCategory, index) => (
                <div className="box" key={index}>
                  <h3 className='box-title'>{iconMap[skillCategory.skillsIcon]} {skillCategory.category}</h3>
                  <div className='box-content'>
                    <div className="skills-grid">
                      {skillCategory.items.map((skill, idx) => (
                        <div className="skill-item" key={idx}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="projects">
        <div className="section-container">
          <div className="d-flex">
            <span className="breadcrumbs">
              <IconGitBranch className="icon-blue" alt="code-icon" />03 / SELECTED PROJECTS
            </span>
            <div className="proj-listing">
              {projectData.map((project, index) => (
                <div className="proj-item" key={index}>
                  <div className="label">
                    <span className="tiny-box"></span> <span className="no">{String(index + 1).padStart(2, '0')}</span><span className="client"><IconGithub alt="github-icon" /> {project.type}</span>
                  </div>
                  <div className="proj-item">
                    <h3>{project.title}</h3>
                    <p className="description">{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="tag tag-outline" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.avaliable && <a href={project.link} target="_blank" rel="noopener noreferrer" className="redirect-link">
                      {project.title} <IconExternalLink alt="external-link-icon" />
                    </a>}
                  </div>
                  <span style={{ textAlign: "end", fontSize: "12px" }}>{project.company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="experience">
        <div className="section-container">
          <div className="d-flex">
            <span className="breadcrumbs">
              <IconBriefcase className="icon-blue" alt="briefcase-icon" />04 / EXPERIENCE
            </span>
            <div className="milestone-container">
              <div className="label">
                <span className="milestone-label">
                  milestone 04 / 04
                </span>
                <span className="milestone-divider"></span>
                <div className="btn-prev-next">
                  <button className="btn-next">{"<"}</button>
                  <button className="btn-prev">{">"}</button>
                </div>
              </div>
            </div>
            <div className="experience-listing">
              {experience.map((exp, index) => (
                <button className="experience-item" key={index} onClick={() => { setSelectedExp(exp); setShowSelectedExp(true); }} >
                  <span>
                    <span className="tiny-box" />{exp.period}</span>
                  <span className="company">{exp.company}</span>
                </button >
              ))}

            </div>
            <div className="selected-experience">
              <p>{selectedExp.period}</p>
              <h3>{selectedExp.role}</h3>
              <span className="description">{selectedExp.company}</span>
              <ul>
                {selectedExp.summary.map((item, idx) => (
                  <li key={idx}><span className="tiny-box"></span>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      <section id="contact">
        <div className="section-container contact-section">
          <div className="d-flex">
            <span className="breadcrumbs">
              <IconEmailAlt alt="email-alt-icon" />05 / CONTACT
            </span>
            <h2>Lets build Something</h2>
            <p>Open to frontend and full-stack roles, freelance builds, or a conversation about a project you are planning. I reply within a day. </p>
            <div className="tag-list">
              <span className="tag tag-outline"><IconEmail alt="email-icon" /><a href={`mailto:${personalData.email}`}/>{personalData.email}</span>
              <span className="tag tag-outline"><a href={personalData.linkedin} target="_blank" rel="noopener noreferrer"><IconLinkedin alt="linkedin-icon" /></a></span>
            </div>
          </div>
        </div>
      </section>
      <footer><span>© {year.getFullYear()} {personalData.name}</span><span>{personalData.location}</span></footer>
    </div>
  )
}

export default App
