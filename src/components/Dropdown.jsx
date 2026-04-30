import { useEffect, useMemo, useRef, useState } from "react";

function Dropdown({
  label,
  icon,
  options,
  placeholder,
  value,
  onChange,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const rootRef = useRef(null);

  const selectedLabel = useMemo(() => {
    const selected = options.find((option) => option.value === value);
    return selected ? selected.label : "";
  }, [options, value]);

  const filteredOptions = useMemo(() => {
    if (!search.trim()) return options;
    const keyword = search.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(keyword)
    );
  }, [options, search]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setSearch("");
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOpen = () => {
    setOpen((previous) => {
      if (previous) {
        setSearch("");
      }
      return !previous;
    });
  };

  const handleSelect = (nextValue) => {
    onChange(nextValue);
    setSearch("");
    setOpen(false);
  };

  const displayValue = open ? search : selectedLabel;

  return (
    <div className={`form-group ${className}`} ref={rootRef}>
      <label className="form-label">
        {icon ? <span className="label-icon">{icon}</span> : null}
        {label}
      </label>

      <div
        className={`dropdown-trigger ${open ? "is-open" : ""}`}
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleOpen();
          }
        }}
      >
        <input
          type="text"
          className="dropdown-input"
          placeholder={placeholder}
          value={displayValue}
          onChange={(event) => {
            if (!open) setOpen(true);
            setSearch(event.target.value);
          }}
          onClick={(event) => {
            event.stopPropagation();
            if (!open) setOpen(true);
          }}
        />
        <span className={`dropdown-arrow ${open ? "up" : ""}`}>
          ▼
        </span>
      </div>

      {open && (
        <div className="dropdown-menu" role="listbox">
          {filteredOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="dropdown-item"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
