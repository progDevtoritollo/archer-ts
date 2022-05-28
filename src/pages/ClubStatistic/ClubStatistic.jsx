import { Radio } from "antd";
import { useState } from "react";

import "./ClubStatistic.scss";

const ClubStatistic = () => {
  const [pageSwitch, setPageSwitch] = useState(true);
  return (
    <div className="club-statistic">
      <h1>ClubStatistic</h1>

      <Radio.Group
        value={pageSwitch}
        onChange={(e) => {
          setPageSwitch(e.target.value);
        }}
      >
        <Radio.Button value={true}>Statistic</Radio.Button>
        <Radio.Button value={false}>Members</Radio.Button>
      </Radio.Group>

      {pageSwitch ? (
        <div>
          <h1>Statistic</h1>
          <span>Графики и все таке</span>
          <div>
            рейтинг 10 стрелка в каждой категории (по дэфолту выбрана категория
            которая у пользователя - кадет например), в виде графиков топ 3
            лучника,
          </div>
        </div>
      ) : (
        <div>
          <h1>Members</h1>
          <span>Список всех участников </span>
          <span>
            Спимсок участников клуба - с возможность: аватар - имя - фамилия,
            онлайн профиля (значит на тренировке ), просмотра их профиля при
            нажатии, возможностсь вызова на дуэль, статистика кратакая (роост
            или падение в соответствии с прошлой контрольной или тренировкой )
          </span>
        </div>
      )}
    </div>
  );
};

export default ClubStatistic;
