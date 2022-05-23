import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProfileStatistic.scss";

const ClubStatistic = () => {
  return (
    <div className="club-statistic">
      <h1>ClubStatistic</h1>
      <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span>
    </div>
  );
};

export default ClubStatistic;
