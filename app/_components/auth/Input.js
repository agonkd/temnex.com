const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 p-2 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Input;
