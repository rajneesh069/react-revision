import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export function CounterPropDrilling() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div>{count}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button setCount={setCount} text="Increase" />
        <Button setCount={setCount} text="Decrease" />
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </>
  );
}
