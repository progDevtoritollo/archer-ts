import "./ClubStatistic.scss";

import userService from "../../services/userService";
import { setUserPage } from "./../../redux/actions/user";

import { useState } from "react";
import { Skeleton, Card, Switch, Avatar, Radio } from "antd";
import { EllipsisOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Meta } = Card;

const ClubStatistic = () => {
  const dispath = useDispatch();

  const [pageSwitch, setPageSwitch] = useState(true);
  const users = [
    {
      name: "Игорь Марусич",
      rank: "КМС",
      id: 54,
      src: "link_avatar",
    },
    { name: "Игорь Марусич", rank: "КМС", id: 45, src: "link_avatar" },
    { name: "Игорь Марусич", rank: "КМС", id: 1561, src: "link_avatar" },
  ];
  const oneUser = {
    name: "Игорь Марусич",
    rank: "КМС",
    id: 45,
    src: "link_avatar",
  };

  const [loading, setLoading] = useState(true);

  const handleUserClick = (id) => {
    userService.getUserProfile(id);
    dispath(setUserPage(oneUser));
  };

  const onChange = (checked) => {
    setLoading(!checked);
  };

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
          <div className="members-list">
            <h1 className="members-list__title">ClubMembers</h1>
            Список пользователей клуба
            <Switch checked={!loading} onChange={onChange} />
            <div className="members-list__container">
              {users.map((user) => (
                <Link to={`/user/${user.id}`} key={user.id + "link"}>
                  <Card
                    onClick={() => handleUserClick(user.id)}
                    key={user.id}
                    className="members-list__item"
                    style={{
                      width: "100%",
                      marginTop: 12,
                    }}
                    actions={[
                      <ThunderboltOutlined key="+" />, // вызвать на дуэль
                      <EllipsisOutlined key="ellipsis" />, // открыть параментры пользователя
                    ]}
                  >
                    <Skeleton loading={loading} avatar active>
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={user.name}
                        description={"Rank: " + user.rank}
                      />
                    </Skeleton>
                    <div>Total this mounth: 235</div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubStatistic;
