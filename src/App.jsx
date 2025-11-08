import React, { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import getData from "../public/data";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [options, setOptions] = useState({
    data: getData(),
  });

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: darkMode ? "#000" : "#fff" }}>
      <AgFinancialCharts options={options} />
    </div>
  );
}

export default App;
