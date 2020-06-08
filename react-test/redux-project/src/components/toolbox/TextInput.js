import React from "react";

const TextInput = ({ name, label, placeHolder, value, onChange, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="filed">
        <input
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error&& <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;