import React, { useState } from "react";

export default function PasswordInput({ value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-2 position-relative">
      <input
        type={show ? "text" : "password"}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <span
        onClick={() => setShow(!show)}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          color: "#888"
        }}
      >
        {show ? "🙈" : "👁️"}
      </span>
    </div>
  );
}
