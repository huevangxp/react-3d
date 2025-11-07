import React, { useEffect, useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";

function App() {
  

  const randomData = [
    {
      date: new Date(2025, 2, 1),
      open: 140.039993,
      high: 140.479996,
      low: 133.580002,
      close: 136.449997,
      volume: 36840400,
    },
  ];

 

  const [options, setOptions] = useState({
    data: randomData,
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgFinancialCharts options={options} />
    </div>
  );
}

export default App;
