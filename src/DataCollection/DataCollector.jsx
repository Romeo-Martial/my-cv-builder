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
          <div className="form-column">
            <div className="form-card">
              <HeaderCollector data={header} step={step} onChange={onChange} />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-column">
            <SummaryCollector data={summary} step={step} onChange={onChange} />
          </div>
        );
      case 2:
        return (
          <div className="form-column">
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
          <div className="form-column">
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
          <div className="form-column">
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
          <div className="form-column">
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
    <div className="container stack">
      <div className="it-stepper">
        <h2 className="it-stepper-title role-orientation">
          Step {step + 1} of 6
        </h2>
        <div className="step-bar">
          <div
            className="progress-bar"
            style={{
              width: `${((step + 1) / 6) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      {currentCollector(step)}
      <div className="step-footer">
        <button
          className="btn btn--secondary  role-action"
          disabled={step === 0}
          onClick={onPrevious}
        >
          Previous
        </button>
        <button className="btn btn--primary role-action" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
