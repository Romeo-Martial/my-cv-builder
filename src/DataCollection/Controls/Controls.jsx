export default function Input({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label>{label + ': '}</label>
      {type === 'text' ? (
        <input type="text" name={name} value={value} onChange={onChange} />
      ) : (
        <textarea value={value} onChange={onChange} />
      )}
    </div>
  );
}
