import "./CheckList.scss";
import clubService from "../../services/clubService";
import { setOneCheck } from "../../redux/actions/club";

import { Card } from "./../index";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CheckList = ({ checks }) => {
  console.log(checks);
  const dispath = useDispatch();
  const handleCheckClick = (id) => {
    clubService
      .getClubCheck(id)
      .then((res) => {
        console.log("check by id", res);
        dispath(setOneCheck(res.data));
      })
      .catch((err) => {
        console.error("something wrong ", err);
      });
  };

  return (
    <div className="check-block-wrapper">
      {checks.map((check, id) => (
        <Card
          onClick={() => handleCheckClick(check.id)}
          key={id}
          className="card-check"
        >
          <Link to={`/check/${check.id}`} key={check.id + "link"}>
            <div className="card-check__name">
              {`KR -  ${check.user.name} ${check.user.surname}`}
            </div>
            <div className="card-check__total">{`Счет: ${check.total}`}</div>
            <div className="card-check__distance">{`Дистанция: ${check.distance}  `}</div>
            <div className="card-check__createData">{`Дата: ${moment(
              check.createdDate
            ).fromNow()}`}</div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default CheckList;
