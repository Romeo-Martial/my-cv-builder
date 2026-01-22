import Input from '../Controls/Controls';

export default function ExperienceCollector({ data, onChange, step }) {
  const { id, company, position, responsibilities, from, to } = data;
  return (
    <>
      <h2>Work Experience</h2>
      <Input
        label="Company"
        value={company}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Position"
        value={position}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Responsibilities"
        value={responsibilities}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Start Date"
        value={from}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="End Date"
        value={to}
        onChange={e => onChange(e, step, id)}
      />
    </>
  );
}
