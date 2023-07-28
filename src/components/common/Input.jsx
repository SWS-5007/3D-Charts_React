import React from "react";

const Input = ({
  name,
  value,
  error,
  onChange,
  type,
  placeholder,
  ...data
}) => {
  return (
    <div className="input-container">
      <input
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="input-primary"
        value={value}
        {...data}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
