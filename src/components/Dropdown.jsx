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
    <div className={`relative mb-3 ${className}`} ref={rootRef}>
      <label className="mb-1.5 flex items-center gap-1.75 text-[13px] font-medium text-[#f3f6ff]">
        {icon ? <span className="inline-flex items-center text-[15px]">{icon}</span> : null}
        {label}
      </label>

      <div
        className="flex min-h-10 w-full cursor-pointer items-center justify-between rounded-[5px] border border-[#d7d9df] bg-[#ececec] px-2.5 text-[13px] text-[#30384f]"
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
          className="min-w-0 flex-1 border-none bg-transparent py-2 pr-1 outline-none placeholder:text-[#8e96aa]"
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
        <span className={`text-xs text-[#8b90a1] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {open && (
        <div className="absolute left-0 right-0 z-10 mt-1.5 max-h-40 overflow-y-auto rounded-[5px] border border-[#c7cedf] bg-white shadow-[0_8px_20px_rgba(17,24,39,0.12)]" role="listbox">
          {filteredOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="block w-full cursor-pointer border-none bg-transparent px-2.5 py-2 text-left text-xs text-[#20283f] hover:bg-[#edf2ff]"
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
