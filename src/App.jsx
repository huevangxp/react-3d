import React, { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import getData from "../public/data";

function App() {
  const [options, setOptions] = useState({
    data: getData(),
  });

  return <AgFinancialCharts options={options} />;
}

export default App;
