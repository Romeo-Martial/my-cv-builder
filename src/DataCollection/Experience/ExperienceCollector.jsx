import ExperienceItemCollector from './ExperienceItemCollector';

export default function ExperienceCollector({
  data,
  step,
  onChange,
  onAdd,
  onChildAdd,
  onDelete,
  onChildDelete
}) {
  const isUnique = data.length === 1;
  return (
    <>
      <h2>Work Experience</h2>
      {data.map((elt, index) => {
        return (
          <div key={elt.id}>
            <h3>Experience {index + 1}</h3>
            <ExperienceItemCollector
              data={elt}
              step={step}
              isUnique={isUnique}
              onChange={onChange}
              onAdd={onAdd}
              onChildAdd={onChildAdd}
              onDelete={onDelete}
              onChildDelete={onChildDelete}
            />
          </div>
        );
      })}
    </>
  );
}
