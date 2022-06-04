import "./CheckList.scss";
import clubService from "./../../services/clubService";
import { setOneCheck } from "./../../redux/actions/club";

import { Card, Avatar } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CheckList = () => {
  const dispath = useDispatch();
  const handleCheckClick = (checkid) => {
    let res = clubService.getClubCheck(checkid);
    dispath(setOneCheck(res.data));
  };
  const checks = [
    {
      name: "Игорь",
      surname: "Марусич",
      total: 278,
      date: "2001/05/24",
      distance: 18,
      id: 54656,
    },
    {
      name: "Игорь",
      surname: "Марусич",
      total: 278,
      date: "2001/05/24",
      distance: 18,
      id: 767,
    },
    {
      name: "Игорь",
      surname: "Марусич",
      total: 278,
      date: "2001/05/24",
      distance: 18,
      id: 8989,
    },
    {
      name: "Игорь",
      surname: "Марусич",
      total: 278,
      date: "2001/05/24",
      distance: 18,
      id: 678,
    },
    {
      name: "Игорь",
      surname: "Марусич",
      total: 278,
      date: "2001/05/24",
      distance: 18,
      id: 345,
    },
  ];

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
              title={`Конторльная:  ${check.name} ${check.surname}`}
              description={`total:   ${check.total}  Дистанция: ${check.distance}   Дата: ${check.date}`}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CheckList;
