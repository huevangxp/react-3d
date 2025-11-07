import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const App = () => {
  const [dataMoney, setDataMoney] = useState([
    [Date.now(), 100],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 1000);

      setDataMoney((prevData) => {
        const newData = [...prevData, [Date.now(), randomValue]];

        // Keep only the last 100 data points
        if (newData.length > 100) {
          newData.shift();
        }

        return newData;
      });
    }, 60000); // update every 1 minute (60,000 ms)

    return () => clearInterval(interval);
  }, []);

  const series = [
    {
      name: "Price",
      data: dataMoney,
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: { speed: 1000 },
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val.toFixed(2)}`,
      },
    },
    colors: ["#14b8a6"], // Tailwind teal-500
    tooltip: {
      theme: "dark",
      x: { format: "HH:mm:ss" },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Financial Line Chart (Live)
      </h2>
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default App;
