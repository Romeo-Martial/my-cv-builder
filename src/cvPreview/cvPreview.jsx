import { useOutletContext } from 'react-router-dom';

export default function CvPreview({ data }) {
  const { cvData, handleBackToEdit, handleCvExport } = useOutletContext();
  const { header, summary, experience, skills, education, languages } = cvData;
  const { portfolio, github, linkedin } = header.links;
  return (
    <article className="cv">
      <header className="cv-header">
        <h1 className="cv-name">{header.name}</h1>
        <p className="cv-titleline">
          {header.role} |{' '}
          <a href={portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>{' '}
          |{' '}
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p className="cv-contact">
          {header.location + ' | ' + header.phone + ' | ' + header.email}
        </p>
      </header>

      <section className="cv-section">
        <h2 className="cv-section-title">SUMMARY</h2>
        <p className="cv-paragraph">{summary}</p>
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">PROFESSIONAL EXPERIENCES</h2>

        {experience.map(elt => {
          return (
            <div className="cv-item" key={elt.id}>
              <div className="cv-item-title">
                {elt.position +
                  ', ' +
                  elt.company +
                  ', ' +
                  elt.from +
                  ' - ' +
                  elt.to}
              </div>
              <ul className="cv-bullets">
                {elt.responsibilities.map(responsibility => (
                  <li key={responsibility.id}>{responsibility.text}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <section className="cv-section">
        <h2 className="cv-section-title">TECHNICAL SKILLS</h2>
        <p>
          <span className="cv-item-title">Technical: </span>
          {skills.technical.map(skill => skill.text).join(', ')}
        </p>
        <p>
          <span className="cv-item-title">Soft: </span>
          {skills.soft.map(skill => skill.text).join(', ')}
        </p>
      </section>
      <section className="cv-section">
        <h2 className="cv-section-title">EDUCATION</h2>
        {education.map(elt => {
          return (
            <ul key={elt.id}>
              <li>
                {elt.program +
                  ' - ' +
                  elt.provider +
                  ' | ' +
                  elt.educationFrom +
                  ' - ' +
                  elt.educationTo}
              </li>
            </ul>
          );
        })}
      </section>
      <section className="cv-section">
        <h2 className="cv-section-title">LANGUAGES</h2>
        {languages.map(elt => {
          return (
            <ul key={elt.id}>
              <li>{elt.language + ': ' + elt.level}</li>
            </ul>
          );
        })}
      </section>
    </article>
  );
}
