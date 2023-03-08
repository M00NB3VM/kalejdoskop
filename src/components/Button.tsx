import React from "react";

function Button(text: string) {
  return (
    <button className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover">
      {text}
    </button>
  );
}

export default Button;
