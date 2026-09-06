import React, { useEffect, useState } from 'react';
import { personalData, stats, skills, experience, projects, uiText } from './assets/data/personal-data.js';
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
  IconExternalLink,
} from './assets/imgs/icons/icons.jsx';

const t = (field, lang) => (field && typeof field === 'object' ? field[lang] ?? field.en : field);

const iconMap = {
  github: <IconGithub />,
  database: <IconDatabase />,
  cloud: <IconCloud />,
  code: '_>',
  checked: <IconCheckCircle />,
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [year] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const [activeNav, setActiveNav] = useState();
  const [projectData, setProjectData] = useState(projects.filter((p) => p.isSensitive === false));
  const selectedExp = experience[activeExp];

  const goNext = (isNext) => {
    setActiveExp((i) =>
      isNext ? (i === experience.length - 1 ? 0 : i + 1) : i === 0 ? experience.length - 1 : i - 1
    );
  };

  const clearQueryOnNav = (event, key) => {
    const { hash } = event.currentTarget;
    event.preventDefault();
    window.history.replaceState(null, '', window.location.pathname);
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(key)
  };

  //component menu
  const menuItem = [uiText.navAbout, uiText.navSkills, uiText.navProjects, uiText.navExperience];

  useEffect(() => {
    const sections = menuItem
      .map((item) => document.getElementById(item.en))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const queryParam = new URLSearchParams(window.location.search);
    if (queryParam.get('showAll') === 'true') {
      setShowAll(true);
      setProjectData(projects);
    }
  }, []);

  return (
    <div className="page-shell">
      <header className="header-container">
        <div className="left-content">
          <span className="tiny-box"></span>
          <span className="nav-brand">{t(personalData.name, lang)}</span>
        </div>
        {/* <div className="right-content">
         
        </div> */}
        <span className="nav">
          <div className='nav-item'>
            {menuItem.map((i, key) => {
              return <a className={activeNav == key || activeNav == i.en ? "active" : ""} href={`#${i.en}`} onClick={(e) => clearQueryOnNav(e, key)} key={key}>{t(i, lang)}</a>
            })}
          </div>

        </span>
        <div className="right-content">
          <LangToggle lang={lang} setLang={setLang} />
          <button className="button button-primary"><a href="#contact">{t(uiText.getInTouch, lang)}</a></button>
        </div>


      </header>

      <section>
        <div className="section-container">
          <div>
            <h1>{t(personalData.name, lang)}</h1>
            <p>{t(personalData.curTitle, lang)}</p>
          </div>
          <p className="title-position">{t(uiText.bio, lang)}</p>
          <p className="description">{t(personalData.bio, lang)}</p>
          <div className="contact-content">
            <div className="button button-primary email">
              <a href={`mailto:${personalData.email}`}>
                <IconEmail alt="email-icon" /> {personalData.email}
              </a>
            </div>
            <div className="phone">
              <a
                href={`${import.meta.env.BASE_URL}${lang === 'zh' ? 'resume-zh.pdf' : 'resume-en.pdf'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(uiText.resume, lang)}
              </a>
            </div>
          </div>
        </div>

        <div className="code-box">
          <p className="header-code">~/whoami</p>
          <pre className="code-content">
            <span className="prompt-char">$</span> sabrina --stack <br />
            <span className="prompt-arrow">→</span> react · next.js · vue2 · .net<br />
            <span className="prompt-char">$</span> sabrina --uptime<br />
            <span className="prompt-arrow">→</span> 4 yrs · 3 companies · 10+ shipped<br />
            <span className="prompt-char">$</span> sabrina --languages<br />
            <span className="prompt-arrow">→</span> en · chinese · cantonese · melay<br />
            <span className="prompt-char">$</span> sabrina --status<br />
            <span className="prompt-arrow">→</span> learning the backend half<br />
          </pre>
        </div>
      </section>

      <hr className="divider" />

      <section id="about">
        <div className="section-container">
          <div>
            <span className="breadcrumbs">
              <IconUser className="icon-blue" alt="user-icon" />
              {t(uiText.aboutBreadcrumb, lang)}
            </span>
            <h2>{t(uiText.aboutHeading, lang)}</h2>
          </div>
        </div>
        <div className="description">
          <p>{t(personalData.bio, lang)}</p>
        </div>
      </section>

      <hr className="divider" />

      <section id="skills">
        <div className="section-container">
          <div className="d-flex">
            <span className="breadcrumbs">
              <IconCodeBrackets className="icon-blue" alt="code-icon" />
              {t(uiText.skillsBreadcrumb, lang)}
            </span>
            <div className="skills-listing">
              {skills.map((skillCategory, index) => (
                <div className="box" key={index}>
                  <h3 className="box-title">
                    {iconMap[skillCategory.skillsIcon]} {t(skillCategory.category, lang)}
                  </h3>
                  <div className="box-content">
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
              <IconGitBranch className="icon-blue" alt="code-icon" />
              {t(uiText.projectsBreadcrumb, lang)}
            </span>
            <div className="proj-listing">
              {projectData.map((project, index) => (
                <div className="proj-item" key={index}>
                  <div className="label">
                    <span className="tiny-box"></span>
                    <span className="no">{String(index + 1).padStart(2, '0')}</span>
                    <span className="client">
                      <IconGithub alt="github-icon" /> {t(project.type, lang)}
                    </span>
                  </div>
                  <div className="proj-item-body">
                    <h3>{t(project.title, lang)}</h3>
                    <p className="description">{t(project.description, lang)}</p>
                    <div className="tag-list">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="tag tag-outline" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.isAvaliable && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="redirect-link">
                        {t(project.title, lang)} <IconExternalLink alt="external-link-icon" />
                      </a>
                    )}
                  </div>
                  {project.company && (
                    <span style={{ textAlign: 'end', fontSize: '12px' }}>{project.company}</span>
                  )}
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
              <IconBriefcase className="icon-blue" alt="briefcase-icon" />
              {t(uiText.experienceBreadcrumb, lang)}
            </span>

            <div className="milestone-container">
              <div className="label">
                <span className="milestone-label">
                  {t(uiText.milestone, lang)} {String(activeExp + 1).padStart(2, '0')} /{' '}
                  {String(experience.length).padStart(2, '0')}
                </span>
                <span className="milestone-divider"></span>
                <div className="btn-prev-next">
                  <button className="btn-prev" onClick={() => goNext(false)}>{'<'}</button>
                  <button className="btn-next" onClick={() => goNext(true)}>{'>'}</button>
                </div>
              </div>
            </div>

            <div className="experience-listing">
              {experience.map((exp, index) => (
                <button
                  key={index}
                  className={`experience-item ${index === activeExp ? ' active' : ''}`}
                  onClick={() => setActiveExp(index)}
                  aria-pressed={index === activeExp}
                >
                  <span className="experience-period">
                    <span className="tiny-box" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="company">{exp.company}</span>
                </button>
              ))}
            </div>

            <div className="selected-experience">
              <p>{selectedExp.period}</p>
              <h3>{t(selectedExp.role, lang)}</h3>
              <span className="description">{selectedExp.company}</span>
              <ul>
                {selectedExp.summary.map((item, idx) => (
                  <li key={idx}>
                    <span className="tiny-box"></span>
                    {t(item, lang)}
                  </li>
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
              <IconEmailAlt alt="email-alt-icon" />
              {t(uiText.contactBreadcrumb, lang)}
            </span>
            <h2>{t(uiText.contactHeading, lang)}</h2>
            <p>{t(uiText.contactBody, lang)}</p>
            <div className="tag-list">
              <span className="tag tag-outline">
                <IconEmail alt="email-icon" />
                <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
              </span>
              <span className="tag tag-outline">
                <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <IconLinkedin alt="linkedin-icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>
          © {year.getFullYear()} {t(personalData.name, lang)}
        </span>
        <span>{t(personalData.location, lang)}</span>
      </footer>
    </div>
  );
};

// Slider-style language toggle, styled to match the site's terminal/mono
// theme (see lang-toggle.less for the CSS — paste it into your stylesheet).
const LangToggle = ({ lang, setLang }) => (
  <div className="lang-toggle" role="group" aria-label="Language switch">
    <button
      className={lang === 'en' ? 'active' : ''}
      onClick={() => setLang('en')}
      aria-pressed={lang === 'en'}
    >
      EN
    </button>
    <button
      className={lang === 'zh' ? 'active' : ''}
      onClick={() => setLang('zh')}
      aria-pressed={lang === 'zh'}
    >
      中
    </button>
    <span className={`lang-toggle-thumb ${lang}`}></span>
  </div>
);

export default App;