import Input from '../Controls/Controls';

export default function EducationCollector({ data, onChange, step }) {
  const {
    id,
    program,
    provider,
    educationLocation,
    educationFrom,
    educationTo,
  } = data;
  return (
    <>
      <h2>Education</h2>
      <Input
        label="Program"
        value={program}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Institution"
        value={provider}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Location"
        value={educationLocation}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="Start Date"
        value={educationFrom}
        onChange={e => onChange(e, step, id)}
      />
      <Input
        label="End Date"
        value={educationTo}
        onChange={e => onChange(e, step, id)}
      />
    </>
  );
}
