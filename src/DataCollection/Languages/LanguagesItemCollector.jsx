import Input from '../Controls/Controls';

export default function LanguagesItemCollector({ data, onChange, step }) {
  const { id, language, level } = data;
  return (
    <>
      <Input
        name="language"
        label="Languages"
        value={language}
        onChange={e => onChange(e, step, id)}
        placeholder="e.g., English, Spanish"
      />
      <p>
        Proficiency Level:{' '}
        <select
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
    </>
  );
}
