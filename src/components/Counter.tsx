import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    setText(count % 2 === 0 ? "Kapil" : "Kritansh");
    const intervalId = setInterval(() => {
      console.log("Hello every second");
    }, 1000);

    return () => {
      // clean up function
      // destructor function
      // use debounce hook
      // new use effect runs
      console.log("Component Unmounted");
      clearInterval(intervalId);
    };
  }, [count]); // to run side effects

  return (
    <>
      <div>{count}</div>
      <div>{text}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => {
            // setCount((prevCount) => {
            //   console.log(prevCount);
            //   return prevCount + 1;
            // });
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Increase
        </button>
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
