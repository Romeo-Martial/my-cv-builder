import HeaderReview from './HeaderReview';
import SummaryReview from './SummaryReview';
import ExperienceReview from './ExperienceReview';
import SkillsReview from './SkillsReview';
import EducationReview from './EducationReview';
import LanguagesReview from './LanguagesReview';

export default function DataReview({ data, onEdit, onSubmit }) {
  const { header, summary, experience, skills, education, languages } = data;
  return (
    <div className="review">
      <header className="review-page-header">
        <h1 className="it-page-title role-orientation">
          Review your information
        </h1>

        <p className="review-page-subtitle role-instruction">
          Check that everything is correct before downloading your CV.
        </p>
      </header>
      <HeaderReview data={header} onEdit={onEdit} />
      <SummaryReview data={summary} onEdit={onEdit} />
      <ExperienceReview data={experience} onEdit={onEdit} />
      <SkillsReview data={skills} onEdit={onEdit} />
      <EducationReview data={education} onEdit={onEdit} />
      <LanguagesReview data={languages} onEdit={onEdit} />
      <div className="review-footer">
        <button className="btn btn--primary" onClick={onSubmit}>
          Preview pdf
        </button>
      </div>
    </div>
  );
}
