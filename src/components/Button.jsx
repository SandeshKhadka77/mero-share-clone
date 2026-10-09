function Button({ type = "button", children, onClick, variant = "primary" }) {
  const variantClasses =
    variant === "secondary"
      ? "border-[#5c6675] bg-[#5c6675] text-white"
      : variant === "light"
        ? "border-[#8a8d98] bg-[#8a8d98] text-white hover:bg-[#7f828d]"
      : "border-transparent bg-[#54639a] text-white hover:bg-[#4e5d93]";

  return (
    <button
      type={type}
      className={`min-h-10.5 w-full cursor-pointer rounded-[7px] border text-[13px] font-semibold ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
