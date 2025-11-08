import React, { useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import getData from "../public/data";
import Header from "./components/Header";
function App() {

  
  const [options, setOptions] = useState({
    data: getData(),
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <AgFinancialCharts options={options} onOptionsChange={setOptions} />
    </div>
  );
}

export default App;
