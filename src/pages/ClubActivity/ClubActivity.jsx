import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ClubActivity.scss";

const ClubActivity = () => {
  return (
    <div className="club-activity">
      <h1>ProfileSettings</h1>
      <span>
        Список участников всего клуба и их данные последних выстрелов,
        контролльных, дуэли(стадии: началась и закончилась(с победителем )),
        сколько прошло времени с последней активности
      </span>
    </div>
  );
};

export default ClubActivity;
