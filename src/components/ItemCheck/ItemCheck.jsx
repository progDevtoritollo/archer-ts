import "./ItemCheck.scss";
import { parsing } from "./../../utils/parsing";
import { Card } from "./../../components/index";
import clubService from "../../services/clubService";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import moment from "moment";
import { LoadingSpinner } from "../../modules";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const width = 15;

const columns = [
  {
    title: "С",
    dataIndex: "number",
    width: 5,
  },
  {
    // title: "Выстрелы",
    children: [
      {
        title: "1",
        dataIndex: "firstShot",
        key: "firstShot",
        width: width,
      },
      {
        title: "2",
        dataIndex: "secondShot",
        key: "secondShot",
        width: width,
      },
      {
        title: "3",
        dataIndex: "thirdShot",
        key: "thirdShot",
        width: width,
      },
    ],
  },
];

const ItemCheck = () => {
  const [currentCheck, setCurrentCheck] = useState({});
  const [series, setSeries] = useState();
  const [scores, setScores] = useState();

  const chart = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "По сериям",
        data: scores,
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "По сериям",
      },
    },
  };

  const getPathNum = () => {
    let pathString = window.location.pathname;
    return pathString.slice(7);
  };

  const getCheck = () => {
    clubService
      .getClubCheck(getPathNum())
      .then((res) => {
        setCurrentCheck(res.data);
        var data = parsing(res.data);

        setSeries(data.seriesArray);
        setScores(data.seriesScore);
      })
      .catch((err) => {
        console.error("something wrong ", err);
      });
  };

  useEffect(() => {
    getCheck();
  }, []);

  var getTable = () => series;

  return (
    <>
      <h1>ItemCheck</h1>
      {Object.keys(currentCheck).length <= 0 ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <Card className="card-block">
            <div className="card-block__name ">
              {`KR -  ${currentCheck.user.name}   ${currentCheck.user.surname}`}
            </div>
            <div className="card-block__total">{`Счет:  ${currentCheck.total}`}</div>
            <div className="card-block__distance">{`Дистанция:  ${currentCheck.distance}  `}</div>
            <div className="card-block__createData">{`Дата: ${moment(
              currentCheck.createdDate
            ).fromNow()} `}</div>
          </Card>
          <hr />
          <div className="check-line">
            <Line options={options} data={chart} />
          </div>
          <hr />
          <div className="table">
            <Table
              columns={columns}
              dataSource={getTable()}
              pagination={false}
              bordered
            />
          </div>
        </>
      )}
    </>
  );
};

export default ItemCheck;
