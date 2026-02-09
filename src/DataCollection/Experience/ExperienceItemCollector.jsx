import Input from '../Controls/Controls';

function Responsibilities({
  responsibilities,
  step,
  parentId,
  onChange,
  onChildAdd,
  onChildDelete,
}) {
  const isUnique = responsibilities.length === 1;
  return (
    <>
      <div className="repeater-actions">
        <p className="it-label role-orientation">Responsibilities</p>{' '}
        <button
          className="btn btn--tertiary role-action"
          onClick={() => onChildAdd('responsibilities', parentId)}
        >
          Add Responsibility
        </button>
      </div>
      {/*don't forget to
      define the information type */}
      <div className="it-repeater">
        {responsibilities.map((elt, index) => {
          return (
            <div className="it-repeater-item" key={elt.id}>
              <div className="input-field responsibility-item">
                <Input
                  type="textarea"
                  label={'Responsibility' + ' ' + (index + 1)}
                  name={'responsibility' + index}
                  value={elt.text}
                  onChange={e => onChange(e, step, parentId, elt.id)}
                  placeholder="Describe your key responsibilities..."
                />
                {!isUnique && (
                  <button
                    className="btn btn--tertiary btn--danger role-action"
                    onClick={() =>
                      onChildDelete('responsibilities', parentId, elt.id)
                    }
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function ExperienceItemCollector({
  data,
  isUnique,
  onChange,
  onAdd,
  onChildAdd,
  onDelete,
  onChildDelete,
  step,
}) {
  const { id, company, position, responsibilities, from, to } = data;

  return (
    <div className="stack">
      <div className="cluster">
        <div className="input-field">
          <Input
            label="Company"
            name="company"
            value={company}
            onChange={e => onChange(e, step, id)}
            placeholder="Company Name"
          />
        </div>
        <div className="input-field">
          <Input
            label="Position"
            name="position"
            value={position}
            onChange={e => onChange(e, step, id)}
            placeholder="Job Title"
          />
        </div>
      </div>
      <Responsibilities
        responsibilities={responsibilities}
        step={step}
        parentId={id}
        onChange={onChange}
        onChildAdd={onChildAdd}
        onChildDelete={onChildDelete}
      />
      <div className="cluster">
        <div className="input-field">
          <Input
            type="date"
            label="Start Date"
            name="from"
            value={from}
            onChange={e => onChange(e, step, id)}
            placeholder="YYYY-MM"
          />
        </div>
        <div className="input-field">
          <Input
            type="date"
            label="End Date"
            name="to"
            value={to}
            onChange={e => onChange(e, step, id)}
            placeholder="YYYY-MM or Present"
          />
        </div>
      </div>
      {!isUnique && (
        <button
          className="btn btn--tertiary btn--danger role-action"
          onClick={() => onDelete(step, id)}
        >
          Delete Experience
        </button>
      )}
    </div>
  );
}
