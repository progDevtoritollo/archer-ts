import { useState, useEffect } from "react";

import { LineChart, PieChart, BarChart } from "../../components/index.js";
import userService from "../../services/userService";

const UserStatistic = () => {
  const [dataCharts, setDataCharts] = useState({});

  useEffect(() => {
    userService
      .getUserStatistic()
      .then((res) => {
        if (res.status === 200) {
          setDataCharts(res.data);
        }
      })
      .catch((err) => console.error("somsing wrong", err));
  }, []);

  return (
    <div className=" club-statistic">
      <h1>UserStatistic </h1>
      {/* <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span> */}
      <hr />
      <LineChart data={dataCharts.avgTotalByMonth} />
      <hr />
      <BarChart data={dataCharts.last10ChecksShotsRange} />
      <hr />
      <PieChart data={dataCharts.last10ChecksShotsRange} />
      <hr />

      {/* <PolarChart /> */}
    </div>
  );
};

export default UserStatistic;
