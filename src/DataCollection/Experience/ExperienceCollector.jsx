import ExperienceItemCollector from './ExperienceItemCollector';

export default function ExperienceCollector({
  data,
  step,
  onChange,
  onAdd,
  onChildAdd,
  onDelete,
  onChildDelete,
}) {
  const isUnique = data.length === 1;
  return (
    <div className="stack">
      <h2 className="it-section-title role-instruction">Work Experience</h2>
      <div className="repeater">
        {data.map((elt, index) => {
          return (
            <div key={elt.id}>
              <h3 className="it-section-subtitle role-instruction">
                Experience {index + 1}
              </h3>
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
      </div>
    </div>
  );
}
