import DisplayObject from './Controls/controls';

export default function HeaderPreview({ data, onEdit }) {
  return (
    <>
      <h2>Header</h2>
      <DisplayObject data={data} />
      <button onClick={() => onEdit(0)}>Edit</button>
    </>
  );
}
