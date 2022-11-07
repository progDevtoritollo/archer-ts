import { useState, useEffect } from "react";
import { TypesLineCharts } from "./../../constants";

import { LineChart, PieChart, BarChart } from "../../components/index.js";
import userService from "../../services/userService";
import { PersonalSevenDaysAvgShots } from "./../../utils/lineChartParsingData";

const UserStatistic = () => {
  const [dataCharts, setDataCharts] = useState({});
  const [lineChartByMonthAvgShot, setLineChartByMonthAvgShot] = useState(null);

  useEffect(() => {
    userService
      .getUserStatistic()
      .then((res) => {
        if (res.status === 200) {
          setDataCharts(res.data);
          setLineChartByMonthAvgShot(
            PersonalSevenDaysAvgShots(res.data.avgTotalByMonth)
          );
          console.log(res.data);
        }
      })
      .catch((err) => console.error("somsing wrong", err));
  }, []);
  console.log(lineChartByMonthAvgShot);
  return (
    <div className=" club-statistic">
      <h1>UserStatistic </h1>
      {/* <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span> */}
      <hr />
      {lineChartByMonthAvgShot == null ? (
        <>
          <h1>lineChartSevenDaysAverageShot == null</h1>
        </>
      ) : (
        <>
          <LineChart
            chart={lineChartByMonthAvgShot}
            titleDisplay={true}
            titleText="Средние показатели выстрелов"
          />
        </>
      )}
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
