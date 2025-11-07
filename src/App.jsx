import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import getData from "../public/data"; // Make sure this is in src/data.js

function App() {
  const [options] = useState({
    autoSize: true,
    title: {
      text: "Financial Chart Example",
      fontSize: 18,
    },
    data: getData(),
    series: [
      {
        type: "candlestick",
        xKey: "date",
        openKey: "open",
        highKey: "high",
        lowKey: "low",
        closeKey: "close",
      },
    ],
    axes: [
      {
        type: "time",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
      },
    ],
  });

  return <AgChartsReact options={options} />;
}

export default App;
