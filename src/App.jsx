import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InteractiveFinancialChart = () => {
// Generate initial candlestick data
const generateInitialData = () => {
const data = [];
let basePrice = 100;
for (let i = 0; i < 30; i++) {
const open = basePrice + (Math.random() - 0.5) * 10;
const close = open + (Math.random() - 0.5) * 10;
const high = Math.max(open, close) + Math.random() * 5;
const low = Math.min(open, close) - Math.random() * 5;
basePrice = close;
data.push({ x: new Date(2025, 9, i + 1), y: [open, high, low, close] });
}
return data;
};

// Generate initial volume data
const generateInitialVolume = () => {
const data = [];
for (let i = 0; i < 30; i++) {
data.push({ x: new Date(2025, 9, i + 1), y: Math.floor(Math.random() * 8000) + 2000 });
}
return data;
};

const [series, setSeries] = useState([{ name: "Candlestick", type: "candlestick", data: generateInitialData() }]);
const [volume, setVolume] = useState(generateInitialVolume());

// Function to generate next candle based on previous close
const generateNextCandle = (prevClose) => {
const open = prevClose + (Math.random() - 0.5) * 5;
const close = open + (Math.random() - 0.5) * 5;
const high = Math.max(open, close) + Math.random() * 3;
const low = Math.min(open, close) - Math.random() * 3;
return { x: new Date(), y: [open, high, low, close] };
};

// Function to generate next volume
const generateNextVolume = () => {
return { x: new Date(), y: Math.floor(Math.random() * 8000) + 2000 };
};

// Live updates
useEffect(() => {
const interval = setInterval(() => {
setSeries((prev) => {
const prevCandle = prev[0].data[prev[0].data.length - 1];
const newCandle = generateNextCandle(prevCandle.y[3]); // previous close
const updated = [...prev];
updated[0].data = [...updated[0].data.slice(-29), newCandle]; // keep last 29 + new
return updated;
});
 
  setVolume((prev) => {
    const newVol = generateNextVolume();
    const updated = [...prev.slice(-29), newVol]; // keep last 29 + new
    return updated;
  });
}, 60000); // every 1 minute

return () => clearInterval(interval);

}, []);

const options = {
chart: {
type: "candlestick",
height: 500,
toolbar: { show: true },
zoom: { enabled: true },
animations: { enabled: false },
},
plotOptions: {
candlestick: { colors: { upward: "#22c55e", downward: "#ef4444" }, wick: { useFillColor: true } },
},
xaxis: { type: "datetime" },
yaxis: [{ labels: { formatter: (val) => `$${val.toFixed(2)}` } }],
};

return <ReactApexChart options={options} series={series} type="candlestick" height={500} />;
};

export default InteractiveFinancialChart;
