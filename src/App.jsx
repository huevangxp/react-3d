import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";

const ChartExample = () => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "S&P 500 Index",
    },
    subtitle: {
      text: "Daily High and Low Prices",
    },
    footnote: {
      text: "1 Aug 2023 - 1 Nov 2023",
    },
    series: [
      {
        type: "candlestick",
        xKey: "date",
        xName: "Date",
        lowKey: "low",
        highKey: "high",
        openKey: "open",
        closeKey: "close",
      },
    ],
  });

  return <AgCharts options={options} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);