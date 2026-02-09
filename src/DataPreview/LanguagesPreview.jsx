import DisplayObjects from './Controls/controls';

export default function LanguagesPreview({ data, onEdit }) {
  return (
    <section className="review-card">
      <header className="review-card__header">
        <h2 className="review-card__title">Languages</h2>
        <button className="btn btn--tertiary" onClick={() => onEdit(5)}>
          Edit
        </button>
      </header>
      <div className="review-card__body">
        {data.map((elt, index) => {
          return (
            <div key={'languages' + index}>
              <p>Language {index + 1}</p>
              <DisplayObjects data={elt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
