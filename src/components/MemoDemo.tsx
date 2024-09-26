import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function MemoDemo() {
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const someVal = useMemo(() => {
    console.log("use memo ran!");
    let count = 0;
    for (let i = parseInt(state); i < 1000000; i++) {
      if (i % 2 === 0) {
        count++;
      }
    }
    return count;
  }, [state]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {someVal}
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={() => setState(state + 1)}>Change State</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default MemoDemo;
