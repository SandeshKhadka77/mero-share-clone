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
    <div className={`mb-3 ${className}`}>
      <label className="mb-1.5 flex items-center gap-1.75 text-[13px] font-medium text-[#f3f6ff]">
        {icon ? <span className="inline-flex items-center text-[15px]">{icon}</span> : null}
        {label}
      </label>
      <input
        className="box-border min-h-10 w-full rounded-[5px] border border-[#d7d9df] bg-[#ececec] px-2.5 py-2 text-[13px] text-[#30384f] outline-none placeholder:text-[#8e96aa]"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
