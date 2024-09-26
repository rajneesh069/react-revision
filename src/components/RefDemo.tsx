import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RefDemo: React.FC = () => {
  const [state, setState] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const clickCountRef = useRef<number>(0);
  const navigate = useNavigate();
  let count = 100; // value is not preserved if the state changes as re-rendering happens!

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  const handleButtonClick = () => {
    clickCountRef.current += 1;
    count++;
    console.log(`Button clicked ${clickCountRef.current} times`);
    setState("");
    console.log(count);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <input
        ref={inputRef}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={handleButtonClick}>Click Me and Reset Input</button>
      <button onClick={() => navigate("/")}>Home</button>
      <p>
        Button clicked {clickCountRef.current} times (check console for updates)
      </p>
    </div>
  );
};

export default RefDemo;
