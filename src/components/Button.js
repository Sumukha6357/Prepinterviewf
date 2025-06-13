import React from "react";

function Button({ text, onClick, variant = "primary", size = "md" }) {
  const base = "rounded font-medium transition duration-200";
  const sizes = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100"
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]}`;
  return (
    <button onClick={onClick} className={classes}>{text}</button>
  );
}

export default Button;