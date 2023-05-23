"use client";

import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

function ChartThreeMilou() {
  useEffect(() => {
    const data: number[] = [20, 25, 30];
    const labels: string[] = [
      "Träffa en kompis",
      "Spela ett spel",
      "Chatta anonymt online",
    ];

    const context: HTMLCanvasElement = document.getElementById(
      "milou-book-chart-two"
    ) as HTMLCanvasElement;

    const BookChartTwo = new Chart(context, {
      type: "pie",
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
      BookChartTwo.destroy();
    };
  }, []);

  return (
    <div className="chart-div">
      <canvas id="milou-book-chart-two"></canvas>
    </div>
  );
}

export default ChartThreeMilou;
