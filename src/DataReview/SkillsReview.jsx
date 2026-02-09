import DisplayObjects from './Controls/controls';

export default function SkillsReview({ data, onEdit }) {
  return (
    <section className="review-card">
      <header className="review-card__header">
        <h2 className="review-card__title">Skills</h2>
        <button className="btn btn--tertiary" onClick={() => onEdit(3)}>
          Edit
        </button>
      </header>
      <div className="review-card__body">
        <DisplayObjects data={data} />
      </div>
    </section>
  );
}
