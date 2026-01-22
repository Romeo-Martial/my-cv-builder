import Input from '../Controls/Controls';

export default function ExperienceItemCollector({
  data,
  isUnique,
  onChange,
  onAdd,
  onDelete,
  step,
}) {
  const { id, company, position, responsibilities, from, to } = data;

  return (
    <>
      <Input
        label="Company"
        name="company"
        value={company}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Position"
        name="position"
        value={position}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Responsibilities"
        name="responsibilities"
        value={responsibilities}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Start Date"
        name="from"
        value={from}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="End Date"
        name="to"
        value={to}
        onChange={e => onChange(e, step, id)}
      />
      <button onClick={() => onAdd(step)}>Add Experience</button>
      {!isUnique && <button onClick={onDelete}>Delete Experience</button>}
    </>
  );
}
