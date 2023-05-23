"use client";

import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

function ChartFourMilou() {
  useEffect(() => {
    const data: number[] = [30, 40, 10];
    const labels: string[] = [
      "Träffa en kompis",
      "Spela ett spel",
      "Chatta anonymt online",
    ];

    const context: HTMLCanvasElement = document.getElementById(
      "milou-book-chart-three"
    ) as HTMLCanvasElement;

    const BookChartThree = new Chart(context, {
      type: "bar",
      options: {
        maintainAspectRatio: false,
      },
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["#451499"],
            label: "Spelarna valde att:",
            data: data,
          },
        ],
      },
    });

    return () => {
      BookChartThree.destroy();
    };
  }, []);

  return (
    <div className="chart-div">
      <canvas id="milou-book-chart-three"></canvas>
    </div>
  );
}

export default ChartFourMilou;
