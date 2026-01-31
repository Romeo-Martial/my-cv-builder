import DisplayObjects from './Controls/controls';

export default function SkillsPreview({ data, onEdit }) {
  return (
    <>
      <h2>Skills</h2>
      <DisplayObjects data={data} />
      <button onClick={() => onEdit(3)}>Edit</button>
    </>
  );
}
