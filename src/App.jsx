import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const App = () => {

  const [money, setMoney] = useState(100);
  const [time, setTime] = useState(1730918400000);

  const [dataMoney, setDataMoney] = useState([
    [time, money],
  ]);


  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = Math.floor(Math.random() * 1000);
      setDataMoney((prevData) => [...prevData, [Date.now(), randomData]]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const series = [
    {
      name: "Price",
      data: [

      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val}`,
      },
    },
    colors: ["#14b8a6"], // Tailwind teal-500
    tooltip: {
      theme: "dark",
      x: { format: "dd MMM" },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Financial Line Chart
      </h2>
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default App;
