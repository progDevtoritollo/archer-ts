import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  const data = {
    labels: ["Тренировки", "Выстрелы", "Соевнования", "Точность"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 7, 5, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {/* Статистика соотношения Кол-ва тренировок, кол-во выстрелов, кол-во Соревнования, точность попаданий  */}
      <PolarArea data={data} />
    </div>
  );
};

export default PolarChart;
