import DisplayObjects from './Controls/controls';

export default function ExperiencePreview({ data, onEdit }) {
  return (
    <section className="review-card">
      <header className="review-card__header">
        <h2 className="review-card__title">Experience</h2>
        <button className="btn btn--tertiary" onClick={() => onEdit(2)}>
          Edit
        </button>
      </header>
      <div className="review-card__body">
        {data.map((elt, index) => {
          return (
            <div key={'experience' + index}>
              <p>Experience {index + 1}</p>
              <DisplayObjects data={elt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
