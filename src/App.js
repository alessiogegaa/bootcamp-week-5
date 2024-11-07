import { useState } from "react";
import "./App.css";
import { useFetch } from "./Components/hooks/useFetch";
import Table from "./Components/Table/Table";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function App() {
  const [dataType, setDataType] = useState("JSONPLACEHOLDER");
  const { data, error, loading } = useFetch({
    url:
      dataType === "JSONPLACEHOLDER"
        ? "https://jsonplaceholder.typicode.com/todos"
        : "http://localhost:8080/todos",
  });
  const handleChange = (event, newDataType) => {
    setDataType(newDataType);
  };

  return (
    <div className="App">
      <h1>Data</h1>
      <ToggleButtonGroup
        color="primary"
        value={dataType}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="JSONPLACEHOLDER">JSONPLACEHOLDER</ToggleButton>
        <ToggleButton value="TODO">TODO</ToggleButton>
      </ToggleButtonGroup>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <Table data={data} />}
    </div>
  );
}

export default App;
