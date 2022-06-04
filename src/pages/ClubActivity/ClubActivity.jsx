import "./ClubActivity.scss";
import { CheckList } from "./../../components/index";

const ClubActivity = () => {
  return (
    <div className="club-activity">
      <h1>ClubActivity</h1>
      <span>
        Список участников всего клуба и их данные последних выстрелов,
        контролльных, дуэли(стадии: началась и закончилась(с победителем )),
        сколько прошло времени с последней активности
      </span>
      <CheckList />
    </div>
  );
};

export default ClubActivity;
