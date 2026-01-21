import Input from '../Controls/Controls';

export default function LanguagesCollector({ data, onChange }) {
  const { id, language, level } = data;
  return (
    <>
      <h2>Languages</h2>
      <Input label="Languages" value={language} onChange={onChange} />
      <Input label="Level" value={level} onChange={onChange} />
    </>
  );
}
