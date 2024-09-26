import { FormEvent, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export default function DebounceDemo() {
  const [inputs, setInputs] = useState({
    firstName: "",
    email: "",
    password: "",
    searchValue: "",
  });
  const debouncedSearchValue = useDebounce(inputs.searchValue, 200);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", inputs);
    // axios request -> send
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <input
          placeholder="First Name"
          value={inputs.firstName}
          onChange={(e) => {
            setInputs((prevValue) => ({
              ...prevValue,
              firstName: e.target.value,
            }));
          }}
        />
        <input
          placeholder="Email"
          value={inputs.email}
          onChange={(e) => {
            setInputs((prevValue) => ({
              ...prevValue,
              email: e.target.value,
            }));
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={inputs.password}
          onChange={(e) => {
            setInputs((prevValue) => ({
              ...prevValue,
              password: e.target.value,
            }));
          }}
        />
        <input
          placeholder="Search"
          value={inputs.searchValue}
          onChange={(e) => {
            setInputs((prevValue) => ({
              ...prevValue,
              searchValue: e.target.value,
            }));
          }}
        />
        <button type="submit">Submit</button>
        {/* Display debounced search value */}
        <p>Debounced Search Value: {debouncedSearchValue}</p>
        <button onClick={() => navigate("/")}>Home</button>
      </form>
    </div>
  );
}
