export default function SummaryPreview({ data, onEdit }) {
  return (
    <>
      <h2>Summary</h2>
      <strong>Summary:</strong>
      <p>{data}</p>
      <button onClick={() => onEdit(1)}>Edit</button>
    </>
  );
}
