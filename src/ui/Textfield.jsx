 // TextField.jsx
import React from "react";

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: "8px", width: "100%" }}
    />
  );
};

export default TextField;
