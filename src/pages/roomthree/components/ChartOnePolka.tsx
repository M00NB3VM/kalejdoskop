"use client";

import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { useStoreContext } from "~/context";

function ChartOnePolka() {
  const { statistics } = useStoreContext();
  
  useEffect(() => {
    const data: number[] = [10, 15, 5];
    const labels: string[] = [
      "En blomma 🌹",
      "Ett gosedjur 🧸",
      "Ett handskrivet brev ✉️",
    ];

    const context: HTMLCanvasElement = document.getElementById(
      "polka-gift-chart"
    ) as HTMLCanvasElement;

    const giftChart = new Chart(context, {
      type: "bar",
      options: {
        maintainAspectRatio: false,
        indexAxis: "y",
      },
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: "#451499",
            label: "Spelarna valde att ge Polka:",
            data: data,
          },
        ],
      },
    });

    return () => {
      giftChart.destroy();
    };
  }, []);

  return (
    <div className="chart-div">
      <canvas id="polka-gift-chart"></canvas>
    </div>
  );
}

export default ChartOnePolka;
