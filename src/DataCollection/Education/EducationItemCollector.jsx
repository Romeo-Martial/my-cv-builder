import Input from '../Controls/Controls';

export default function EducationItemCollector({ data, onChange, step }) {
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
      <Input
        name="program"
        label="Program"
        value={program}
        onChange={e => onChange(e, step, id)}
        placeholder="Name of the program"
      />
      <Input
        name="provider"
        label="Institution"
        value={provider}
        onChange={e => onChange(e, step, id)}
        placeholder="Name of the institution"
      />
      <Input
        name="educationLocation"
        label="Location"
        value={educationLocation}
        onChange={e => onChange(e, step, id)}
        placeholder="City, Country"
      />
      <Input
        type="date"
        name="educationFrom"
        label="Start Date"
        value={educationFrom}
        onChange={e => onChange(e, step, id)}
        placeholder="YYYY or YYYY-MM"
      />
      <Input
        type="date"
        name="educationTo"
        label="End Date"
        value={educationTo}
        onChange={e => onChange(e, step, id)}
        placeholder="YYYY or YYYY-MM"
      />
    </>
  );
}
