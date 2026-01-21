export default function Input({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label>{label + ': '}</label>
      {type === 'text' ? (
        <input type="text" value={value} onChange={onChange} />
      ) : (
        <textarea value={value} onChange={onChange} />
      )}
    </div>
  );
}
