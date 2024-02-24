"use client"
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const LineChart = ({ data }) => {
  if (!data) return null; // Return early if data is null or undefined

  let chartConfig = {};
  const chartRef = useRef(null);
  const labels = Object.keys(data.data).sort().reverse();

  if (data.type === "sentiment") {
    const positiveData = labels.map(date => data.data[date].positive);
    const negativeData = labels.map(date => data.data[date].negative);
    const neutralData = labels.map(date => data.data[date].neutral);

    chartConfig = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Positive",
            data: positiveData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(59, 130, 246)",
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgb(59 130 246 / .05)",
            tension: 0.2,
          },
          {
            label: "Negative",
            data: negativeData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(244, 63, 94)",
            borderColor: "rgb(244, 63, 94)",
            backgroundColor: "rgb(244 63 94 / .05)",
            tension: 0.2,
          },
          {
            label: "Neutral",
            data: neutralData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(255, 205, 86)",
            borderColor: "rgb(255, 205, 86)",
            backgroundColor: "rgb(255 205 86 / .05)",
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  } else if (data.type === "priority") {
    const highData = labels.map(date => data.data[date].high);
    const moderateData = labels.map(date => data.data[date].moderate);
    const lowData = labels.map(date => data.data[date].low);
    const criticalData = labels.map(date => data.data[date].critical); // Include critical data

    chartConfig = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "High",
            data: highData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255 99 132 / .05)",
            tension: 0.2,
          },
          {
            label: "Moderate",
            data: moderateData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgb(54 162 235 / .05)",
            tension: 0.2,
          },
          {
            label: "Low",
            data: lowData,
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(255, 205, 86)",
            borderColor: "rgb(255, 205, 86)",
            backgroundColor: "rgb(255 205 86 / .05)",
            tension: 0.2,
          },
          {
            label: "Critical", // Add critical label
            data: criticalData, // Use criticalData
            borderWidth: 1,
            fill: true,
            pointBackgroundColor: "rgb(255, 0, 0)", // Adjust color as needed
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgb(255, 0, 0, .05)",
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }

  useEffect(() => {
    if (!data) return; // Return early if data is null or undefined

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, chartConfig);

    // Cleanup function to destroy the chart instance
    return () => chart.destroy();
  }, [data]);

  return <canvas id="sentiment-chart" ref={chartRef} />;
};

export default LineChart;