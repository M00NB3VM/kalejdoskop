import React from "react";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({text}: ButtonProps){
  return (
    <button className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover">
      {text}
    </button>
  );
}

export default Button;
