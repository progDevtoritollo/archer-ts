import { useState, useEffect } from "react";

import { LineChart, PieChart } from "../../components/index.js";
import userService from "../../services/userService";

const UserStatistic = () => {
  const [dataCharts, setDataCharts] = useState({});

  useEffect(() => {
    let data = userService.getUserStatistic();
    setDataCharts(data);
    console.log(dataCharts);
  }, []);

  return (
    <div className=" club-statistic">
      <h1>UserStatistic </h1>
      {/* <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span> */}
      <LineChart data={dataCharts.avgTotalByMonth} />
      <br />
      <PieChart data={dataCharts.last10ChecksShotsRange} />
      {/* <PolarChart /> */}
    </div>
  );
};

export default UserStatistic;
