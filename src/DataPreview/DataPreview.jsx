import HeaderPreview from './HeaderPreview';
import SummaryPreview from './SummaryPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
import EducationPreview from './EducationPreview';
import LanguagesPreview from './LanguagesPreview';

export default function DataPreview({ data, onEdit, onSubmit }) {
  const { header, summary, experience, skills, education, languages } = data;
  return (
    <>
      <HeaderPreview data={header} onEdit={onEdit} />
      <SummaryPreview data={summary} onEdit={onEdit} />
      <ExperiencePreview data={experience} onEdit={onEdit} />
      <SkillsPreview data={skills} onEdit={onEdit} />
      <EducationPreview data={education} onEdit={onEdit} />
      <LanguagesPreview data={languages} onEdit={onEdit} />
      <div>
        <button>Download pdf</button>
      </div>
    </>
  );
}
