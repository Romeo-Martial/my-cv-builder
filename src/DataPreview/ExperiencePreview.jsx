import DisplayObjects from './Controls/controls';

export default function ExperiencePreview({ data, onEdit }) {
  return (
    <>
      <h2>Experience</h2>
      {data.map((elt, index) => {
        return (
          <div key={'experience' + index}>
            <p>Experience {index + 1}</p>
            <DisplayObjects data={elt} />
          </div>
        );
      })}
      <button onClick={() => onEdit(2)}>Edit</button>
    </>
  );
}
