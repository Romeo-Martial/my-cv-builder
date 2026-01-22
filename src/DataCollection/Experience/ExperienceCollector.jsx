import ExperienceItemCollector from './ExperienceItemCollector';

export default function ExperienceCollector({
  data,
  step,
  onChange,
  onAdd,
  onDelete,
}) {
  const isUnique = data.length === 1;
  return (
    <>
      <h2>Work Experience</h2>
      {data.map(elt => (
        <ExperienceItemCollector
          key={elt.id}
          data={elt}
          step={step}
          isUnique={isUnique}
          onChange={onChange}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
