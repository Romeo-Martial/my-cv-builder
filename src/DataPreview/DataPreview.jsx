import HeaderPreview from './HeaderPreview';
import SummaryPreview from './SummaryPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
import EducationPreview from './EducationPreview';
import LanguagesPreview from './LanguagesPreview';

export default function DataPreview({ data, onEdit, onSubmit }) {
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
      <HeaderPreview data={header} onEdit={onEdit} />
      <SummaryPreview data={summary} onEdit={onEdit} />
      <ExperiencePreview data={experience} onEdit={onEdit} />
      <SkillsPreview data={skills} onEdit={onEdit} />
      <EducationPreview data={education} onEdit={onEdit} />
      <LanguagesPreview data={languages} onEdit={onEdit} />
      <div className="review-footer">
        <button className="btn btn--primary">Download pdf</button>
      </div>
    </div>
  );
}
