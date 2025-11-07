import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const FinancialChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Candlestick",
      type: "candlestick",
      data: [
        { x: new Date(2025, 10, 1), y: [120, 130, 115, 128] },
        { x: new Date(2025, 10, 2), y: [128, 135, 125, 132] },
        { x: new Date(2025, 10, 3), y: [132, 138, 128, 135] },
        { x: new Date(2025, 10, 4), y: [135, 142, 130, 140] },
        { x: new Date(2025, 10, 5), y: [140, 145, 138, 142] },
      ],
    },
    {
      name: "MA (20)",
      type: "line",
      data: [
        { x: new Date(2025, 10, 1), y: 124 },
        { x: new Date(2025, 10, 2), y: 129 },
        { x: new Date(2025, 10, 3), y: 132 },
        { x: new Date(2025, 10, 4), y: 136 },
        { x: new Date(2025, 10, 5), y: 140 },
      ],
    },
    {
      name: "Volume",
      type: "column",
      data: [
        { x: new Date(2025, 10, 1), y: 5000 },
        { x: new Date(2025, 10, 2), y: 7000 },
        { x: new Date(2025, 10, 3), y: 4000 },
        { x: new Date(2025, 10, 4), y: 6000 },
        { x: new Date(2025, 10, 5), y: 8000 },
      ],
    },
  ]);

  const options = {
    chart: {
      type: "candlestick",
      height: 500,
      toolbar: { show: true },
    },
    stroke: {
      width: [1, 2, 0],
      curve: "smooth",
    },
    colors: ["#8b5cf6", "#14b8a6", "#60a5fa"], // purple for MA, teal for candle, blue for volume
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#22c55e", // green
          downward: "#ef4444", // red
        },
        wick: { useFillColor: true },
      },
      bar: {
        columnWidth: "60%",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        tooltip: { enabled: true },
        labels: { formatter: (val) => `$${val}` },
      },
      {
        opposite: true,
        max: 10000,
        show: false,
      },
    ],
    tooltip: {
      shared: true,
      theme: "dark",
      x: { format: "dd MMM" },
    },
    grid: {
      borderColor: "#e5e7eb", // Tailwind gray-200
      strokeDashArray: 3,
    },
    legend: {
      show: true,
      position: "top",
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-5xl mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Financial Chart (Candlestick + MA + Volume)
      </h2>
      <ReactApexChart options={options} series={series} type="candlestick" height={500} />
    </div>
  );
};

export default FinancialChart;
