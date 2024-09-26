import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <button onClick={() => navigate("/counter")}>Counter</button>
      <button onClick={() => navigate("/debounce")}>Debounce Demo</button>
      <button onClick={() => navigate("/memo")}>Memo Demo</button>
      <button onClick={() => navigate("/ref")}>Ref Demo</button>
      <button onClick={() => navigate("/callback")}>Callback Demo</button>
      <button onClick={() => navigate("/children")}>Children Demo</button>
      <button onClick={() => navigate("/drillProp")}>Prop Drilling Demo</button>
    </div>
  );
}

export default Home;
