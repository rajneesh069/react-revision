import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // input function of useEffect
    console.log("useEffect ran!");
  }, []);

  useMemo(() => {
    // input function of useMemo
    // to memoize a value
  }, []);

  //   const handleIncrease = () => {
  //     console.log("gets re-created on every render"); // independent of set count, it gets recreated anyway
  //     setCount((prevCount) => prevCount + 1);
  //   };

  const handleIncrease = useCallback(() => {
    // memoized the function
    console.log("Ran!");
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <div>{count}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handleIncrease}>Increase</button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </>
  );
}

export default CallbackDemo;
