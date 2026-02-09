import Input from '../Controls/Controls';

export default function EducationItemCollector({
  data,
  isUnique,
  onChange,
  onDelete,
  step,
}) {
  const {
    id,
    program,
    provider,
    educationLocation,
    educationFrom,
    educationTo,
  } = data;
  return (
    <div className="stack">
      <div className="cluster">
        <div className="input-field">
          <Input
            name="program"
            label="Program"
            value={program}
            onChange={e => onChange(e, step, id)}
            placeholder="Name of the program"
          />
        </div>
        <div className="input-field">
          <Input
            name="provider"
            label="Institution"
            value={provider}
            onChange={e => onChange(e, step, id)}
            placeholder="Name of the institution"
          />
        </div>
        <div className="input-field">
          <Input
            name="educationLocation"
            label="Location"
            value={educationLocation}
            onChange={e => onChange(e, step, id)}
            placeholder="City, Country"
          />
        </div>
      </div>
      <div className="cluster">
        <div className="input-field">
          <Input
            type="date"
            name="educationFrom"
            label="Start Date"
            value={educationFrom}
            onChange={e => onChange(e, step, id)}
            placeholder="YYYY or YYYY-MM"
          />
        </div>
        <div className="input-field">
          <Input
            type="date"
            name="educationTo"
            label="End Date"
            value={educationTo}
            onChange={e => onChange(e, step, id)}
            placeholder="YYYY or YYYY-MM"
          />
        </div>
      </div>
      {!isUnique && (
        <button
          className="btn btn--tertiary btn--danger role-action"
          onClick={() => onDelete(step, id)}
        >
          Delete Education
        </button>
      )}
    </div>
  );
}
