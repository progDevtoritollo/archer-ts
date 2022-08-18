import "./ClubActivity.scss";
import { CheckList } from "./../../components/index";

import { useEffect, useState } from "react";
import clubService from "../../services/clubService";

const ClubActivity = () => {
  const [checks, setChecks] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchUserChecks());
    clubService
      .getClubChecks()
      .then((res) => {
        setChecks(res.data);
      })
      .catch((err) => {
        console.error("something wrong ", err);
      });
  }, []);
  return (
    <div className="club-activity">
      <h1>ClubActivity</h1>
      <span>
        Список участников всего клуба и их данные последних выстрелов,
        контролльных, дуэли(стадии: началась и закончилась(с победителем )),
        сколько прошло времени с последней активности
      </span>
      <CheckList checks={checks} />
    </div>
  );
};

export default ClubActivity;
