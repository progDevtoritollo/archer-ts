import { LineChart, PieChart, PolarChart } from "./../../components/index.js";

const ProfileStatistic = () => {
  return (
    <div className="club-statistic">
      <h1>ProfileStatistic</h1>
      <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span>
      <div>Chart</div>
      <LineChart />
      <PieChart />
      <PolarChart />
    </div>
  );
};

export default ProfileStatistic;
