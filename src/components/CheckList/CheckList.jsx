import "./CheckList.scss";
import clubService from "../../services/clubService";
import { setOneCheck } from "../../redux/actions/club";

import { Card } from "./../index";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CheckList = ({ checks }) => {
  return (
    <div className="check-block-wrapper">
      {checks.map((check, id) => (
        <Card key={id} className="card-check">
          {/* <div onClick={() => handleCheckClick(check.id)}> */}
          <div>
            <Link to={`/check/${check.id}`} key={check.id + "link"}>
              <div className="card-check__name">
                {`KR -  ${check.user.name}  ${check.user.surname}`}
              </div>
              <div className="card-check__total">{`Счет: ${check.total}`}</div>
              <div className="card-check__distance">{`Дистанция: ${check.distance}  `}</div>
              <div className="card-check__createData">{`Дата: ${moment(
                check.createDtm
              ).fromNow()}`}</div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CheckList;
