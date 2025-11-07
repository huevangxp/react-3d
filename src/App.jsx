import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InteractiveFinancialChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Candlestick",
      type: "candlestick",
      data: generateInitialData(),
    },
    {
      name: "MA (20)",
      type: "line",
      data: generateInitialMA(),
    },
    {
      name: "Volume",
      type: "column",
      data: generateInitialVolume(),
    },
  ]);

  // Generate random financial data
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

  function generateInitialMA() {
    const data = [];
    let base = 100;
    for (let i = 0; i < 30; i++) {
      base += (Math.random() - 0.5) * 5;
      data.push({ x: new Date(2025, 9, i + 1), y: base });
    }
    return data;
  }

  function generateInitialVolume() {
    const data = [];
    for (let i = 0; i < 30; i++) {
      data.push({ x: new Date(2025, 9, i + 1), y: Math.floor(Math.random() * 8000) + 2000 });
    }
    return data;
  }

  // Live updates every 1 minute
  useEffect(() => {
    const interval = setInterval(() => {
      setSeries((prev) => {
        const newCandle = {
          x: new Date(),
          y: [
            120 + Math.random() * 10,
            125 + Math.random() * 10,
            115 + Math.random() * 10,
            122 + Math.random() * 10,
          ],
        };

        const newVolume = { x: new Date(), y: Math.floor(Math.random() * 10000) };
        const newMA = { x: new Date(), y: 120 + Math.random() * 5 };

        const updated = [...prev];
        updated[0].data = [...updated[0].data.slice(-29), newCandle]; // candles
        updated[1].data = [...updated[1].data.slice(-29), newMA]; // MA line
        updated[2].data = [...updated[2].data.slice(-29), newVolume]; // volume
        return updated;
      });
    }, 60000); // every 1 minute

    return () => clearInterval(interval);
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
          pan: false,
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
    stroke: {
      width: [1, 2, 0],
      curve: "smooth",
    },
    colors: ["#8b5cf6", "#14b8a6", "#60a5fa"],
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#22c55e",
          downward: "#ef4444",
        },
        wick: { useFillColor: true },
      },
      bar: { columnWidth: "60%" },
    },
    xaxis: {
      type: "datetime",
      tooltip: { enabled: false },
    },
    yaxis: [
      {
        labels: { formatter: (val) => `$${val.toFixed(2)}` },
      },
      {
        opposite: false,
        show: false,
      },
    ],
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 3,
    },
    tooltip: {
      shared: false,
      theme: "dark",
      x: { format: "dd MMM HH:mm" },
    },
    legend: {
      show: false,
      position: "top",
      labels: { colors: "#374151" },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-6xl mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        📈 Interactive Financial Chart (Candlestick + MA + Volume)
      </h2>
      <ReactApexChart options={options} series={series} type="candlestick" height={500} />
    </div>
  );
};

export default InteractiveFinancialChart;
