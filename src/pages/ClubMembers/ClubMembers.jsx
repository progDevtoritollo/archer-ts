import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ClubMembers.scss";

const ClubMembers = () => {
  return (
    <div className="club-members">
      <h1>ProfileSettings</h1>
      <span>
        Спимсок участников клуба - с возможность: аватар - имя - фамилия, онлайн
        профиля (значит на тренировке ), просмотра их профиля при нажатии,
        возможностсь вызова на дуэль, статистика кратакая (роост или падение в
        соответствии с прошлой контрольной или тренировкой )
      </span>
    </div>
  );
};

export default ClubMembers;
