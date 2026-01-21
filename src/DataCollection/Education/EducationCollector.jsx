import Input from '../Controls/Controls';

export default function EducationCollector({ data, onChange }) {
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
      <Input label="Program" value={program} onChange={onChange} />
      <Input label="Institution" value={provider} onChange={onChange} />
      <Input label="Location" value={educationLocation} onChange={onChange} />
      <Input label="Start Date" value={educationFrom} onChange={onChange} />
      <Input label="End Date" value={educationTo} onChange={onChange} />
    </>
  );
}
