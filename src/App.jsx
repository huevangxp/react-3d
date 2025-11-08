import React, { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import getData from "../public/data";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [options, setOptions] = useState({
    data: getData(),
    theme: darkMode ? "ag-theme-dark" : "ag-theme-default",
  });

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: darkMode ? "#000" : "#fff" }}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <AgFinancialCharts options={options} onOptionsChange={setOptions} />
    </div>
  );
}

export default App;
