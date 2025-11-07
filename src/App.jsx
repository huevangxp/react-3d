import React, { useEffect, useState } from "react";
import { AgFinancialCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import axios from "axios";

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://lsx.com.la/lo/market/daily-closing-price");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

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
