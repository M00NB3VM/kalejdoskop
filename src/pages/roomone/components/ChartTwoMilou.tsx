"use client";

import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

function ChartTwoMilou() {
  useEffect(() => {
    const data: number[] = [20, 25, 30];
    const labels: string[] = [
      "Träffa en kompis",
      "Spela ett spel",
      "Chatta anonymt online",
    ];

    const context: HTMLCanvasElement = document.getElementById(
      "milou-book-chart-one"
    ) as HTMLCanvasElement;

    const BookChartOne = new Chart(context, {
      type: "doughnut",
      options: {
        maintainAspectRatio: false,
      },
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["#451499", "#d9dbda", "#f7528b"],
            label: "Antal",
            data: data,
          },
        ],
      },
    });

    return () => {
      BookChartOne.destroy();
    };
  }, []);

  return (
    <div className="chart-div">
      <canvas id="milou-book-chart-one"></canvas>
    </div>
  );
}

export default ChartTwoMilou;
