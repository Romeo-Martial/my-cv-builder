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
    <div>
      <h3>Langauages</h3>
      <p>
        List the languages you speak along with your proficiency levels to
        showcase your communication skills.
      </p>
      {data.map((elt, index) => {
        return (
          <div key={elt.id}>
            <h4>Language {index + 1}</h4>
            <LanguagesItemCollector
              data={elt}
              step={step}
              onChange={onChange}
            />
            {!isUnique && (
              <button onClick={() => onDelete(step, elt.id)}>
                Delete Language
              </button>
            )}
            <button onClick={() => onAdd(step)}>Add Language</button>
          </div>
        );
      })}
      {/* Tips Section */}
      <div>
        <h4>💡 Language Tips</h4>
        <ul>
          <li>
            <strong>Native/Bilingual:</strong> Perfect fluency, often your first
            language
          </li>
          <li>
            <strong>Professional:</strong> Can conduct business and work
            effectively
          </li>
          <li>
            <strong>Conversational:</strong> Can hold everyday conversations
            comfortably
          </li>
          <li>
            <strong>Basic:</strong> Limited vocabulary, can handle simple
            interactions
          </li>
          <li>List languages in order of proficiency (strongest first)</li>
          <li>Include any relevant certifications or test scores</li>
        </ul>
      </div>
    </div>
  );
}
