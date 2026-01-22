export default function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
}) {
  return (
    <div>
      <label>{label + ': '}</label>
      {type === 'textarea' ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
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
