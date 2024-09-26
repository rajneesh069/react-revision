import React from "react";

function Button({
  setCount,
  text,
}: {
  text: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      onClick={() => {
        setCount((prevVal) =>
          text === "Increase" ? prevVal + 1 : prevVal - 1
        );
      }}
    >
      {text}
    </button>
  );
}

export default Button;
