import HeaderCollector from './Header/HeaderCollector';
import SummaryCollector from './Summary/SummaryCollector';
import ExperienceCollector from './Experience/ExperienceCollector';
import SkillsCollector from './Skills/SkillsCollector';
import EducationCollector from './Education/EducationCollector';
import LanguagesCollector from './Languages/LanguagesCollector';
import { useOutletContext } from 'react-router-dom';

export default function DataCollector() {
  const {
    cvData,
    currentStep,
    handleChange,
    handleAdd,
    handleChildAdd,
    handleDelete,
    handleChildDelete,
    handleNext,
    handlePrevious,
    handleReset,
  } = useOutletContext();
  const { header, summary, experience, skills, education, languages } = cvData;

  const currentCollector = function (step) {
    switch (step) {
      case 0:
        return (
          <div className="form-column">
            <div className="form-card">
              <HeaderCollector
                data={header}
                step={step}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-column">
            <SummaryCollector
              data={summary}
              step={step}
              onChange={handleChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="form-column">
            <ExperienceCollector
              data={experience}
              step={step}
              onChange={handleChange}
              onAdd={handleAdd}
              onChildAdd={handleChildAdd}
              onDelete={handleDelete}
              onChildDelete={handleChildDelete}
            />
          </div>
        );
      case 3:
        return (
          <div className="form-column">
            <SkillsCollector
              data={skills}
              step={step}
              onChildAdd={handleChildAdd}
              onChildDelete={handleChildDelete}
            />
          </div>
        );
      case 4:
        return (
          <div className="form-column">
            <EducationCollector
              data={education}
              step={step}
              onChange={handleChange}
              onAdd={handleAdd}
              onDelete={handleDelete}
            />
          </div>
        );
      case 5:
        return (
          <div className="form-column">
            <LanguagesCollector
              data={languages}
              step={step}
              onChange={handleChange}
              onAdd={handleAdd}
              onDelete={handleDelete}
            />
          </div>
        );
    }
  };

  return (
    <div className="container stack">
      <div className="it-stepper">
        <h2 className="it-stepper-title role-orientation">
          Step {currentStep + 1} of 6
        </h2>
        <div className="step-bar">
          <div
            className="progress-bar"
            style={{
              width: `${((currentStep + 1) / 6) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      {currentCollector(currentStep)}
      <div className="step-footer">
        <button
          className="btn btn--secondary  role-action"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button className="btn btn--tertiary role action" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn--primary role-action" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
