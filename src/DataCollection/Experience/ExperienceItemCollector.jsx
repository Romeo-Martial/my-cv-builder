import Input from '../Controls/Controls';

function Responsibilities({ responsibilities, step, parentId, onChange }) {
  const isUnique = responsibilities.length === 1;
  return (
    <>
      <h4>Responsibilities</h4>
      {responsibilities.map((elt, index) => {
        return (
          <div key={elt.id}>
            <Input
              type="textarea"
              label={'Responsibility' + ' ' + (index + 1)}
              name={'responsibility' + index}
              value={elt.text}
              onChange={e => onChange(e, step, elt.id, parentId)}
              placeholder="Describe your key responsibilities..."
            />
            {!isUnique && <button>-</button>}
            <button>+</button>
          </div>
        );
      })}
    </>
  );
}

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
        placeholder="Company Name"
      />
      <Input
        label="Position"
        name="position"
        value={position}
        onChange={e => onChange(e, step, id)}
        placeholder="Job Title"
      />
      <Responsibilities
        responsibilities={responsibilities}
        step={step}
        parentId={id}
        onChange={onChange}
      />
      <Input
        type="date"
        label="Start Date"
        name="from"
        value={from}
        onChange={e => onChange(e, step, id)}
        placeholder="YYYY-MM"
      />
      <Input
        type="date"
        label="End Date"
        name="to"
        value={to}
        onChange={e => onChange(e, step, id)}
        placeholder="YYYY-MM or Present"
      />
      <button onClick={() => onAdd(step)}>Add Experience</button>
      {!isUnique && (
        <button onClick={() => onDelete(step, id)}>Delete Experience</button>
      )}
    </>
  );
}
