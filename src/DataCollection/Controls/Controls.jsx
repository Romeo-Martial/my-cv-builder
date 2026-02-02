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
        <textarea
          class="textarea"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          class="input"
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
