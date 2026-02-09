import DisplayObject from './Controls/controls';

export default function HeaderPreview({ data, onEdit }) {
  return (
    <section className="review-card">
      <header className="review-card__header">
        <h2 className="review-card__title">Header</h2>
        <button className="btn btn--tertiary" onClick={() => onEdit(0)}>
          Edit
        </button>
      </header>
      <div className="review-card__body">
        <DisplayObject data={data} />
      </div>
    </section>
  );
}
