import HeaderCollector from './Header/HeaderCollector';
import SummaryCollector from './Summary/SummaryCollector';
import ExperienceCollector from './Experience/ExperienceCollector';
import SkillsCollector from './Skills/SkillsCollector';
import EducationCollector from './Education/EducationCollector';
import LanguagesCollector from './Languages/LanguagesCollector';
import { useState } from 'react';
import {
  validateHeader,
  validateSummary,
  validateExperience,
  validateSkills,
  validateEducation,
  validateLanguages,
} from '../Utils/validateData';

export default function DataCollector({
  data,
  onChange,
  onAdd,
  onChildAdd,
  onDelete,
  onChildDelete,
  onSubmit,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const { header, summary, experience, skills, education, languages } = data;

  function handlePrevious() {
    setCurrentStep(cs => cs - 1);
  }

  function handleNext() {
    switch (currentStep) {
      case 0:
        validateHeader(header) && setCurrentStep(cs => cs + 1);
        break;
      case 1:
        validateSummary(summary) && setCurrentStep(cs => cs + 1);
        break;
      case 2:
        validateExperience(experience) && setCurrentStep(cs => cs + 1);
        break;
      case 3:
        validateSkills(skills) && setCurrentStep(cs => cs + 1);
        break;
      case 4:
        validateEducation(education) && setCurrentStep(cs => cs + 1);
        break;
      case 5:
        validateLanguages(languages) && onSubmit(data);
        break;
    }
  }

  const currentCollector = function (step) {
    switch (step) {
      case 0:
        return (
          <HeaderCollector
            data={header}
            step={currentStep}
            onChange={onChange}
          />
        );
      case 1:
        return (
          <SummaryCollector
            data={summary}
            step={currentStep}
            onChange={onChange}
          />
        );
      case 2:
        return (
          <ExperienceCollector
            data={experience}
            step={currentStep}
            onChange={onChange}
            onAdd={onAdd}
            onChildAdd={onChildAdd}
            onDelete={onDelete}
            onChildDelete={onChildDelete}
          />
        );
      case 3:
        return (
          <SkillsCollector
            data={skills}
            step={currentStep}
            onChange={onChange}
          />
        );
      case 4:
        return (
          <EducationCollector
            data={education}
            step={currentStep}
            onChange={onChange}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        );
      case 5:
        return (
          <LanguagesCollector
            data={languages}
            step={currentStep}
            onChange={onChange}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        );
    }
  };

  return (
    <>
      <h2>Step {currentStep + 1} of 6</h2>
      <div></div>
      {currentCollector(currentStep)}
      <div>
        <button disabled={currentStep === 0} onClick={handlePrevious}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
