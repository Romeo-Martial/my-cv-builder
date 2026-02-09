import EducationItemCollector from './EducationItemCollector';

export default function EducationCollector({
  data,
  step,
  onChange,
  onAdd,
  onDelete,
}) {
  const isUnique = data.length === 1;
  return (
    <div className="stack">
      <h2 className="it-section-title role-orientation">Education</h2>
      <p className="it-section-goal role-instruction">
        Provide details about your educational background, including degrees,
        certifications, and relevant coursework.
      </p>
      <div className="repeater stack">
        {data.map((elt, index) => {
          return (
            <div className="repeater-item" key={elt.id}>
              <h3 className="it-section-subtitle role-orientation">
                Education {index + 1}
              </h3>

              <EducationItemCollector
                data={elt}
                isUnique={isUnique}
                onChange={onChange}
                onDelete={onDelete}
                step={step}
              />
              <div></div>
            </div>
          );
        })}
        <button
          className="btn btn--secondary role-action"
          onClick={() => onAdd(step)}
        >
          Add Education
        </button>
      </div>
      {/* Tips Section */}
      <div className="it-writing-tips-section role-instruction">
        <h4 className="it-writing-tips-title">💡 Education Tips</h4>
        <ul className="it-writing-tips-list">
          <li className="it-writing-tip">
            <strong>Program:</strong> Include degree type and field of study
            (e.g., "Bachelor of Science in Computer Science")
          </li>
          <li className="it-writing-tip">
            <strong>Institution:</strong> Full name of the school, university,
            or institution
          </li>
          <li className="it-writing-tip">
            <strong>Dates:</strong> Use YYYY or YYYY-MM format for start and end
            dates
          </li>
          <li className="it-writing-tip">
            List education in reverse chronological order (most recent first)
          </li>
          <li className="it-writing-tip">
            Include relevant certifications and professional development
          </li>
        </ul>
      </div>
    </div>
  );
}
