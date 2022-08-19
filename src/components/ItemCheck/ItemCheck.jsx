import "./ItemCheck.scss";
import { parsing } from "./../../utils/parsing";
import { Card } from "./../../components/index";

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
  const { check } = useSelector(({ club }) => club);
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
  let array = parsing(check);
  useEffect(() => {
    console.log("check", check);

    console.log(array);
    setSeries(array.seriesArray);
    setScores(array.seriesScore);
    console.log("State scores: ", scores);
    console.log("State series: ", series);
  }, []);

  var getTable = () => series;

  return (
    <>
      <h1>ItemCheck</h1>
      <Card className="card-block">
        <div className="card-block__name">
          {`KR -  ${check.user.name} ${check.user.surname}`}
        </div>
        <div className="card-block__total">{`Счет: ${check.total}`}</div>
        <div className="card-block__distance">{`Дистанция: ${check.distance}  `}</div>
        <div className="card-block__createData">{`Дата: ${moment(
          check.createdDate
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
  );
};

export default ItemCheck;
