import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const SalesChart = () => {
  const chartRef = useRef(null); // Ref for chart container
  const chartInstance = useRef(null); // Ref for the chart instance

  useEffect(() => {
    // Options for the ApexChart
    const options = {
      dataLabels: {
        enabled: true,
        style: {
          cssClass: "text-xs text-white font-medium",
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 30, // Increase left padding
          right: 30, // Increase right padding
          top: 10, // Increase top padding
          bottom: 10, // Increase bottom padding
        },
      },
      series: [
        {
          name: "Monthly Pizza Orders",
          data: [250, 270, 300, 280, 320, 400, 450, 470, 500, 550, 600, 630],
          color: "#FF5733", // Pizza-related color
        },
      ],
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: { show: false },
        padding: {
          left: 16, // Adjust outer padding if necessary
          right: 16, // Adjust outer padding if necessary
        },
      },
      tooltip: { enabled: true, x: { show: false } },
      legend: { show: true },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#FF8C42",
          gradientToColors: ["#FF8C42"],
        },
      },
      stroke: { width: 4 },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          show: true,
          style: {
            colors: "#A0AEC0", // Set x-axis label color (light gray)
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        show: true,
        labels: {
          formatter: (value) => value + " pizzas",
          style: {
            colors: "#A0AEC0",
          },
        },
      },
    };

    // If chart is already created, remove it before rendering a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Initialize chart and render it
    if (chartRef.current) {
      chartInstance.current = new ApexCharts(chartRef.current, options);
      chartInstance.current.render();
    }

    // Cleanup chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6 mb-12">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            630 Pizzas
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Orders this month</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500">
          18%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div ref={chartRef} id="pizza-orders-chart"></div>
      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 mt-5 pt-5">
        <a href="#" className="uppercase text-sm font-semibold text-red-600 hover:text-red-700">
          Pizza Sales Report
        </a>
      </div>
    </div>
  );
};

export default SalesChart;
