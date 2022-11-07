import "./ClubStatistic.scss";

import userService from "../../services/userService";
import { setUserPage } from "./../../redux/app/slice";

import { useEffect, useState } from "react";
import { Skeleton, Card, Switch, Avatar, Radio, Space, Table, Tag } from "antd";
import { EllipsisOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ClubSevenDaysAvgShots } from "./../../utils/lineChartParsingData";
import clubService from "../../services/clubService";
import club from "../../redux/club/slice";
// import store from "../../redux/store";
import LineChart from "./../../components/LineChart/LineChart";
import { ARCHERS_RANKS } from "./../../constants";
const { Meta } = Card;

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
    render: (rank) => (
      <>
        <Tag color={ARCHERS_RANKS[rank].color} key={rank}>
          {ARCHERS_RANKS[rank].name}
        </Tag>
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

const ClubStatistic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  const [table, setTable] = useState([]);

  const [lineChartSevenDaysAverageShot, setLineChartSevenDaysAverageShot] =
    useState(null);

  const onChangeSortTable = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const [userArray, setUserArray] = useState([{}]);
  const [pageSwitch, setPageSwitch] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleUserClick = (id) => {
    userService.getUserProfile(id).then((res) => {
      console.log(res.data);
      dispatch(setUserPage(res.data));
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

    clubService
      .getClubMembersStatistic_1()
      .then((res) => {
        console.log(res.data);
        let arr = [];
        res.data.map((obj) => {
          console.log(obj);
          arr.push({
            key: obj.member.user.id,
            name: obj.member.user.name + " " + obj.member.user.surname,
            score: obj.checksAverage,
            user_id: obj.member.user.id,
            training: obj.trainingDays,
            rank: obj.member.user.rank,
          });

          setLoading(!loading);
        });
        setTable(arr);
      })
      .catch((err) => {
        console.error(err);
      });
    clubService
      .getClubMembersStatistic_2()
      .then((res) => {
        setLineChartSevenDaysAverageShot(
          ClubSevenDaysAvgShots(res.data, "Среднее за 7 дней", user.info.id)
        );
        res.data.map((obj) => {
          setLoading(!loading);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
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
            <Radio.Button value={false}>Members</Radio.Button>
            <Radio.Button value={true}>Statistic</Radio.Button>
          </Radio.Group>
          {pageSwitch ? (
            <>
              <h1>Statistic</h1>

              <span>Графики и все таке</span>

              <div>в виде графиков топ 3 лучника,</div>
              {lineChartSevenDaysAverageShot == null ? (
                <>
                  <h1>lineChartSevenDaysAverageShot == null</h1>
                </>
              ) : (
                <>
                  <LineChart
                    chart={lineChartSevenDaysAverageShot}
                    titleDisplay={true}
                    titleText="Средние показатели выстрелов"
                  />
                </>
              )}
            </>
          ) : (
            <div>
              <h1>About Club</h1>
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
                  Список пользователей клуба рейтинг в каждой ранк (по дэфолту
                  выбрана ранк которая у пользователя - кадет например)
                  <>
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
                  </>
                  <h1>Members</h1>
                  <Table
                    onRow={(record, rowIndex) => {
                      return {
                        onClick: (event) => {
                          history.push(`/user/${record.user_id}`);
                        },
                      };
                    }}
                    size={"small"}
                    columns={columns_members}
                    dataSource={table}
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
        </div>
      )}
    </>
  );
};

export default ClubStatistic;
