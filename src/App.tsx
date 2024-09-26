import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./components/Counter";
import Home from "./components/Home";
import DebounceDemo from "./components/DebounceDemo";
import MemoDemo from "./components/MemoDemo";
import RefDemo from "./components/RefDemo";
import CallbackDemo from "./components/CallbackDemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/debounce" element={<DebounceDemo />} />
          <Route path="/memo" element={<MemoDemo />} />
          <Route path="/ref" element={<RefDemo />} />
          <Route path="/callback" element={<CallbackDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
