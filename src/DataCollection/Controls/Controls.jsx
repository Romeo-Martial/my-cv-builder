export default function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
}) {
  return (
    <div className="control">
      <label className="it-label">{label + ': '}</label>
      {type === 'textarea' ? (
        <textarea
          className="textarea"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
