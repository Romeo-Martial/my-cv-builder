import HeaderCollector from './Header/HeaderCollector';
import SummaryCollector from './Summary/SummaryCollector';
import ExperienceCollector from './Experience/ExperienceCollector';
import SkillsCollector from './Skills/SkillsCollector';
import EducationCollector from './Education/EducationCollector';
import LanguagesCollector from './Languages/LanguagesCollector';
import { useState } from 'react';


export default function DataCollector({
  data,
  step,
  onChange,
  onAdd,
  onChildAdd,
  onDelete,
  onChildDelete,
  onNext,
  onPrevious,
}) {
  const { header, summary, experience, skills, education, languages } = data;

  const currentCollector = function (step) {
    switch (step) {
      case 0:
        return (
          <HeaderCollector data={header} step={step} onChange={onChange} />
        );
      case 1:
        return (
          <SummaryCollector data={summary} step={step} onChange={onChange} />
        );
      case 2:
        return (
          <ExperienceCollector
            data={experience}
            step={step}
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
            step={step}
            onChildAdd={onChildAdd}
            onChildDelete={onChildDelete}
          />
        );
      case 4:
        return (
          <EducationCollector
            data={education}
            step={step}
            onChange={onChange}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        );
      case 5:
        return (
          <LanguagesCollector
            data={languages}
            step={step}
            onChange={onChange}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        );
    }
  };

  return (
    <>
      <h2>Step {step + 1} of 6</h2>
      <div></div>
      {currentCollector(step)}
      <div>
        <button disabled={step === 0} onClick={onPrevious}>
          Previous
        </button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}
