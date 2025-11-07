import React, { useEffect, useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
 import getData from "./data";

function App() {
 
  const [options, setOptions] = useState({
    data: getData,
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgFinancialCharts options={options} />
    </div>
  );
}

export default App;
