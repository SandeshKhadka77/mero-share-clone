function Button({ type = "button", children, onClick, variant = "primary" }) {
  return (
    <button
      type={type}
      className={`app-button app-button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
