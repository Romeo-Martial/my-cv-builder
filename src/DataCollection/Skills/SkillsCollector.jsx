import Input from '../Controls/Controls';

export default function SkillsCollector({ data, onChange }) {
  const { technical, soft } = data;
  return (
    <>
      <h2>Skills</h2>
      <Input label="Technical Skills" value={technical} onChange={onChange} />
      <Input label="Soft Skills" value={soft} onChange={onChange} />
    </>
  );
}
