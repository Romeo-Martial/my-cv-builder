import Input from '../Controls/Controls';

export default function LanguagesCollector({ data, onChange, step }) {
  const { id, language, level } = data;
  return (
    <>
      <h2>Languages</h2>
      <Input
        label="Languages"
        value={language}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Level"
        value={level}
        onChange={e => onChange(e, step, id)}
      />
    </>
  );
}
