import Input from '../Controls/Controls';

export default function LanguagesItemCollector({
  data,
  isUnique,
  onChange,
  onDelete,
  step,
}) {
  const { id, language, level } = data;
  return (
    <div className="stack">
      <Input
        name="language"
        label="Languages"
        value={language}
        onChange={e => onChange(e, step, id)}
        placeholder="e.g., English, Spanish"
      />
      <p>
        <span className="it-label">Proficiency Level: </span>
        <select
          className="select"
          name="level"
          value={level}
          onChange={e => onChange(e, step, id)}
        >
          <option value="">Select proficiency level</option>
          <option value="Basic">Basic</option>
          <option value="Conversational">Conversational</option>
          <option value="Professional">Professional</option>
          <option value="Native">Native</option>
        </select>
      </p>
      {!isUnique && (
        <button
          className="btn btn--tertiary btn--danger role-action"
          onClick={() => onDelete(step, id)}
        >
          Delete Language
        </button>
      )}
    </div>
  );
}
