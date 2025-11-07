import React, { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import getData from "../public/data";

function App() {
  const [options, setOptions] = useState({
    data: [
      {
        date: new Date(2022, 2, 1),
        open: 140.039993,
        high: 140.479996,
        low: 133.580002,
        close: 136.449997,
        volume: 36840400,
      },
    ],
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AgFinancialCharts options={options} />
    </div>
  );
}

export default App;
