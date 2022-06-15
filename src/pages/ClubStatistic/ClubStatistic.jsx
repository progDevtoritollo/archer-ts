import "./ClubStatistic.scss";

import userService from "../../services/userService";
import { setUserPage } from "./../../redux/actions/user";

import { useEffect, useState } from "react";
import { Skeleton, Card, Switch, Avatar, Radio } from "antd";
import { EllipsisOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import clubService from "../../services/clubService";
const { Meta } = Card;

const userArray = [
  {
    name: "Игорь Марусич",
    rank: "КМС",
    id: 54,
    src: "link_avatar",
  },
  { name: "Игорь Марусич", rank: "КМС", id: 45, src: "link_avatar" },
  { name: "Игорь Марусич", rank: "КМС", id: 1561, src: "link_avatar" },
];
const ClubStatistic = () => {
  const dispath = useDispatch();
  const [userArray, setUserArray] = useState([]);

  const [pageSwitch, setPageSwitch] = useState(true);

  const [loading, setLoading] = useState(true);

  const handleUserClick = (id) => {
    userService.getUserProfile(id).then((res) => {
      console.log(res.data);
      dispath(setUserPage(res.data));
    });
  };

  const getData = () => {
    clubService
      .getClubMembers()
      .then((res) => {
        setUserArray(res.data);
        setLoading(!loading);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
    console.log(userArray);
  }, []);

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
        <>
          <h1>Statistic</h1>

          <span>Графики и все таке</span>

          <div>
            рейтинг 10 стрелка в каждой категории (по дэфолту выбрана категория
            которая у пользователя - кадет например), в виде графиков топ 3
            лучника,
          </div>
        </>
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
          {userArray ? (
            <div className="members-list">
              <h1 className="members-list__title">ClubMembers</h1>
              Список пользователей клуба
              <div className="members-list__container">
                {userArray.map((item) => (
                  <Link
                    to={`/user/${item.member.user.id}`}
                    key={item.member.user.id + "link"}
                  >
                    <Card
                      onClick={() => handleUserClick(item.member.user.id)}
                      key={item.member.user.id}
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
                          title={` Name:   ${item.member.user.name}  ${item.member.user.surname}`}
                          description={`Rank:  ${item.member.user.rank}      
                              Total this mounth: ${item.lastCheckTotal}`}
                        />
                      </Skeleton>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <h1>Нет участников</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default ClubStatistic;
