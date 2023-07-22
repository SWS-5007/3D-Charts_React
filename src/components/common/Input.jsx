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
    <>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="input-primary"
      />
    </>
  );
};

export default Input;
