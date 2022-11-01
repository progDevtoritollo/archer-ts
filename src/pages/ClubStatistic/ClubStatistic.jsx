import "./ClubStatistic.scss";

import userService from "../../services/userService";
import { setUserPage } from "./../../redux/actions/user";

import { useEffect, useState } from "react";
import { Skeleton, Card, Switch, Avatar, Radio, Space, Table, Tag } from "antd";
import { EllipsisOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Redirect, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import clubService from "../../services/clubService";
import club from "../../redux/club/slice";
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
const columns_statistic = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.score - b.score,
  },
  {
    title: "Days",
    dataIndex: "training",
    key: "training",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.training - b.training,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite </a>
        {/*Значек скрещеннных мечей или слово challenge */}
      </Space>
    ),
  },
];
const data_statistic = [
  {
    key: "1",
    name: "John Brown",
    user_id: "435435",
    training: 16,
    score: 256,
    rangs: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    user_id: "435435",

    score: 226,
    training: 14,
    rangs: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    user_id: "435435",

    training: 15,
    score: 276,
    rangs: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    user_id: "435435",
    score: 276,
    training: 17,
    rangs: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    user_id: "435435",

    score: 276,
    training: 15,

    rangs: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    user_id: "435435",

    score: 276,
    training: 6,

    rangs: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    user_id: "435435",

    score: 276,
    training: 9,

    rangs: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "Joe Black",
    user_id: "435435",

    score: 276,
    training: 15,

    rangs: ["cool", "teacher"],
  },
];

const columns_members = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.score - b.score,
  },
  {
    title: "Rank",
    key: "rank",
    dataIndex: "rank",
    render: (_, { ranks }) => (
      <>
        {ranks.map((rank) => {
          let color = rank.length > 5 ? "geekblue" : "green";
          if (rank === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={rank}>
              {rank.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Days",
    dataIndex: "training",
    key: "training",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.training - b.training,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite </a>
        {/*Значек скрещеннных мечей или слово challenge */}
      </Space>
    ),
  },
];
const data_members = [
  {
    key: "1",
    name: "John Brown",
    score: 256,
    user_id: "435435",
    training: 16,
    ranks: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    score: 226,
    user_id: "435435",
    training: 16,
    ranks: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "Joe Black",
    score: 276,
    user_id: "435435",
    training: 16,
    ranks: ["cool", "teacher"],
  },
];

const ClubStatistic = () => {
  const onChangeSortTable = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

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
        console.log(res.data);
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
    <>
      {club.info === null ? (
        <Redirect to="/club/settings" />
      ) : (
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
                рейтинг 10 стрелка в каждой категории (по дэфолту выбрана
                категория которая у пользователя - кадет например), в виде
                графиков топ 3 лучника,
              </div>
              <Table
                columns={columns_statistic}
                dataSource={data_statistic}
                onChange={onChangeSortTable}
                pagination={false}
              />
            </>
          ) : (
            <div>
              <h1>Members</h1>
              <span>Список всех участников </span>
              <span>
                Спимсок участников клуба - с возможность: аватар - имя -
                фамилия, онлайн профиля (значит на тренировке ), просмотра их
                профиля при нажатии, возможностсь вызова на дуэль, статистика
                кратакая (роост или падение в соответствии с прошлой контрольной
                или тренировкой ) сортировка по: алфавиту, по счету за кр
                (последней), по счету среднему за контрольные за последний месяц
              </span>

              {userArray ? (
                <div className="members-list">
                  <h1 className="members-list__title">ClubMembers</h1>
                  Список пользователей клуба
                  {/* <div className="members-list__container">
                {userArray.map((item) => (
                  <Link
                    to={`/user/${item.member.user.id}`}
                    key={item.member.user.id + "_link"}
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
              </div> */}
                  <Table
                    columns={columns_members}
                    dataSource={data_members}
                    onChange={onChangeSortTable}
                  />
                </div>
              ) : (
                <>
                  <h1>Нет участников</h1>
                </>
              )}
            </div>
          )}
          )
        </div>
      )}
    </>
  );
};

export default ClubStatistic;
