import HeaderReview from './HeaderReview';
import SummaryReview from './SummaryReview';
import ExperienceReview from './ExperienceReview';
import SkillsReview from './SkillsReview';
import EducationReview from './EducationReview';
import LanguagesReview from './LanguagesReview';
import { useOutletContext } from 'react-router-dom';

export default function DataReview() {
  const { cvData, handleEdit, handleReviewSubmit } = useOutletContext();
  const { header, summary, experience, skills, education, languages } = cvData;
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
      <HeaderReview data={header} onEdit={handleEdit} />
      <SummaryReview data={summary} onEdit={handleEdit} />
      <ExperienceReview data={experience} onEdit={handleEdit} />
      <SkillsReview data={skills} onEdit={handleEdit} />
      <EducationReview data={education} onEdit={handleEdit} />
      <LanguagesReview data={languages} onEdit={handleEdit} />
      <div className="review-footer">
        <button className="btn btn--primary" onClick={handleReviewSubmit}>
          Preview pdf
        </button>
      </div>
    </div>
  );
}
