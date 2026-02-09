import LanguagesItemCollector from './LanguagesItemCollector';

export default function LanguagesCollector({
  data,
  step,
  onChange,
  onAdd,
  onDelete,
}) {
  const isUnique = data.length === 1;
  return (
    <div className="stack">
      <h3 className="it-section-title role-orientation">Languages</h3>
      <p className="it-section-goal role-instruction">
        List the languages you speak along with your proficiency levels to
        showcase your communication skills.
      </p>
      <div className="repeater">
        {data.map((elt, index) => {
          return (
            <div className="repeater-item" key={elt.id}>
              <h4 className="it-section-subtitle role-orientation">
                Language {index + 1}
              </h4>
              <LanguagesItemCollector
                data={elt}
                isUnique={isUnique}
                step={step}
                onChange={onChange}
                onDelete={onDelete}
              />
            </div>
          );
        })}
        <button
          className="btn btn--secondary role-action"
          onClick={() => onAdd(step)}
        >
          Add Language
        </button>
      </div>
      {/* Tips Section */}
      <div className="it-writing-tips-section role-instruction">
        <h4 className="it-writing-tips-title">💡 Language Tips</h4>
        <ul className="it-writing-tips-list">
          <li className="it-writing-tip">
            <strong>Native/Bilingual:</strong> Perfect fluency, often your first
            language
          </li>
          <li className="it-writing-tip">
            <strong>Professional:</strong> Can conduct business and work
            effectively
          </li>
          <li className="it-writing-tip">
            <strong>Conversational:</strong> Can hold everyday conversations
            comfortably
          </li>
          <li className="it-writing-tip">
            <strong>Basic:</strong> Limited vocabulary, can handle simple
            interactions
          </li>
          <li className="it-writing-tip">
            List languages in order of proficiency (strongest first)
          </li>
          <li className="it-writing-tip">
            Include any relevant certifications or test scores
          </li>
        </ul>
      </div>
    </div>
  );
}
