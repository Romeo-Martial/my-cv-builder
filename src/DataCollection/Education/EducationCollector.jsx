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
    <>
      <h2>Education</h2>
      <p>
        Provide details about your educational background, including degrees,
        certifications, and relevant coursework.
      </p>
      {data.map((elt, index) => {
        return (
          <div key={elt.id}>
            <h3>Education {index + 1}</h3>
            <EducationItemCollector
              data={elt}
              onChange={onChange}
              step={step}
            />
            {!isUnique && (
              <button onClick={() => onDelete(step, elt.id)}>
                Delete Education
              </button>
            )}
            <button onClick={() => onAdd(step)}>Add Education</button>
          </div>
        );
      })}
      {/* Tips Section */}
      <div>
        <h4>💡 Education Tips</h4>
        <ul>
          <li>
            <strong>Program:</strong> Include degree type and field of study
            (e.g., "Bachelor of Science in Computer Science")
          </li>
          <li>
            <strong>Institution:</strong> Full name of the school, university,
            or institution
          </li>
          <li>
            <strong>Dates:</strong> Use YYYY or YYYY-MM format for start and end
            dates
          </li>
          <li>
            List education in reverse chronological order (most recent first)
          </li>
          <li>Include relevant certifications and professional development</li>
        </ul>
      </div>
    </>
  );
}
