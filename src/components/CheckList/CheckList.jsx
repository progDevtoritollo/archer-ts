import "./CheckList.scss";
import clubService from "./../../services/clubService";
import { setOneCheck } from "./../../redux/actions/club";

import { Card, Avatar } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const { Meta } = Card;

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
    <div className="checks-list">
      {checks.map((check, id) => (
        <Link to={`/check/${check.id}`} key={check.id + "link"}>
          <Card
            key={id}
            style={{ width: "300", marginTop: 16 }}
            loading={false}
            onClick={() => handleCheckClick(check.id)}
          >
            <Meta
              // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`Конторльная:  ${check.user.name} ${check.user.surname}`}
              description={`total:   ${check.total}  Дистанция: ${check.distance}   Дата: ${check.createDtm}`}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CheckList;
