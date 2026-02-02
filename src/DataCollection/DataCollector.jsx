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
          <div className="container">
            <HeaderCollector data={header} step={step} onChange={onChange} />
          </div>
        );
      case 1:
        return (
          <div className="container">
            <SummaryCollector data={summary} step={step} onChange={onChange} />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <ExperienceCollector
              data={experience}
              step={step}
              onChange={onChange}
              onAdd={onAdd}
              onChildAdd={onChildAdd}
              onDelete={onDelete}
              onChildDelete={onChildDelete}
            />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <SkillsCollector
              data={skills}
              step={step}
              onChildAdd={onChildAdd}
              onChildDelete={onChildDelete}
            />
          </div>
        );
      case 4:
        return (
          <div className="container">
            <EducationCollector
              data={education}
              step={step}
              onChange={onChange}
              onAdd={onAdd}
              onDelete={onDelete}
            />
          </div>
        );
      case 5:
        return (
          <div className="container">
            <LanguagesCollector
              data={languages}
              step={step}
              onChange={onChange}
              onAdd={onAdd}
              onDelete={onDelete}
            />
          </div>
        );
    }
  };

  return (
    <div className="stack">
      <h2 className="it-stepper role-orientation">Step {step + 1} of 6</h2>
      <div className="step-bar"></div>
      {currentCollector(step)}
      <div>
        <button
          className="btn btn--primary"
          disabled={step === 0}
          onClick={onPrevious}
        >
          Previous
        </button>
        <button className="btn btn--primary" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
