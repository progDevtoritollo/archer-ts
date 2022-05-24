import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./ProfileStatistic.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ClubStatistic = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const chart = {
    labels: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Ав",
      "Сен",
      "Окт",
      "Нояб",
      "Декаб",
    ],
    datasets: [
      {
        label: "level of thiccness",
        data: [230, 170, 130, 160, 168, 285, 220, 228, 240, 180, 140, 126],
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="club-statistic">
      {/* <h1>ClubStatistic</h1>
      <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span>
      <div>Chart</div> */}
      <Line options={options} data={chart} />
    </div>
  );
};

export default ClubStatistic;
