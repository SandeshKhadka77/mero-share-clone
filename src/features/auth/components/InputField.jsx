function InputField({
  label,
  icon,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  return (
    <div className={`form-group ${className}`}>
      <label className="form-label">
        {icon ? <span className="label-icon">{icon}</span> : null}
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
