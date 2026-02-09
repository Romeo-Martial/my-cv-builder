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
      <h2 className="it-section-title role-orientation">Work Experience</h2>
      <div className="repeater">
        {data.map((elt, index) => {
          return (
            <div className="repeater-item" key={elt.id}>
              <h3 className="it-section-subtitle role-orientation">
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
        <div className="repeater-footer">
          <button
            className="btn btn--secondary it-btn-text role-action"
            onClick={() => onAdd(step)}
          >
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
}
