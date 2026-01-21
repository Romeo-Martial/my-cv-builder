import Input from '../Controls/Controls';

export default function ExperienceCollector({ data, onChange }) {
  const { id, company, position, responsibilities, from, to } = data;
  return (
    <>
      <h2>Work Experience</h2>
      <Input label="Company" value={company} onChange={onChange} />
      <Input label="Position" value={position} onChange={onChange} />
      <Input
        label="Responsibilities"
        value={responsibilities}
        onChange={onChange}
      />
      <Input label="Start Date" value={from} onChange={onChange} />
      <Input label="End Date" value={to} onChange={onChange} />
    </>
  );
}
