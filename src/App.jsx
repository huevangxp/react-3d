import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InteractiveFinancialChart = () => {
const [series, setSeries] = useState([
{
name: "Candlestick",
data: generateInitialData(),
},
]);

function generateInitialData() {
const data = [];
let basePrice = 100;
for (let i = 0; i < 30; i++) {
const open = basePrice + (Math.random() - 0.5) * 10;
const close = open + (Math.random() - 0.5) * 10;
const high = Math.max(open, close) + Math.random() * 5;
const low = Math.min(open, close) - Math.random() * 5;
basePrice = close;
data.push({
x: new Date(2025, 9, i + 1),
y: [open, high, low, close],
});
}
return data;
}

// Live updates every 1 second
useEffect(() => {
const interval = setInterval(() => {
const newCandle = {
x: new Date(),
y: [
120 + Math.random() * 10,
125 + Math.random() * 10,
115 + Math.random() * 10,
122 + Math.random() * 10,
],
};

```
  setSeries((prev) => [
    {
      ...prev[0],
      data: [...prev[0].data.slice(-29), newCandle],
    },
  ]);
}, 1000);

return () => clearInterval(interval);
```

}, []);

const options = {
chart: {
type: "candlestick",
height: 500,
toolbar: {
show: true,
tools: {
download: true,
selection: true,
zoom: true,
zoomin: true,
zoomout: true,
pan: true,
reset: true,
},
},
zoom: { enabled: true },
animations: {
enabled: false,
easing: "linear",
dynamicAnimation: { speed: 1000 },
},
},
plotOptions: {
candlestick: {
colors: { upward: "#22c55e", downward: "#ef4444" },
wick: { useFillColor: true },
},
},
xaxis: { type: "datetime" },
yaxis: { labels: { formatter: (val) => `$${val.toFixed(2)}` } },
grid: { borderColor: "#e5e7eb", strokeDashArray: 3 },
tooltip: { shared: false, theme: "dark", x: { format: "dd MMM HH:mm" } },
};

return ( <div> <ReactApexChart options={options} series={series} type="candlestick" height={500} /> </div>
);
};

export default InteractiveFinancialChart;
