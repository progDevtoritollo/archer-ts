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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
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
        label: "Max mounth score",
        data: [230, 170, 130, 160, 168, 285, 220, 228, 240, 180, 140, 126], // props data
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={chart} />
    </div>
  );
};

export default LineChart;
