import DisplayObjects from './Controls/controls';

export default function LanguagesPreview({ data, onEdit }) {
  return (
    <>
      <h2>Languages</h2>
      {data.map((elt, index) => {
        return (
          <div key={'languages' + index}>
            <p>Language {index + 1}</p>
            <DisplayObjects data={elt} />
          </div>
        );
      })}
      <button onClick={() => onEdit(5)}>Edit</button>
    </>
  );
}
