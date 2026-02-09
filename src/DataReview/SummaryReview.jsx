export default function SummaryReview({ data, onEdit }) {
  return (
    <section className="review-card">
      <header className="review-card__header">
        <h2 className="review-card__title">Summary</h2>
        <button className="btn btn--tertiary" onClick={() => onEdit(1)}>
          Edit
        </button>
      </header>
      <div className="review-card__body">
        <strong>Summary:</strong>
        <p>{data}</p>
      </div>
    </section>
  );
}
