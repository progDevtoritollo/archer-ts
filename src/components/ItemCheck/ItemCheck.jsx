import "./ItemCheck.scss";
import { parsing } from "./../../utils/parsing";

import React, { useState, useEffect } from "react";
import { Skeleton, Card, Switch, Avatar, Table } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

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

const check = {
  series: [
    {
      seriesNumber: 1,
      shots: [
        {
          shotNumber: 1,
          x: 222,
          y: 231,
          score: 10,
        },
        {
          shotNumber: 2,
          x: 272,
          y: 256,
          score: 8,
        },
        {
          shotNumber: 3,
          x: 263,
          y: 299,
          score: 7,
        },
      ],
    },
    {
      seriesNumber: 2,
      shots: [
        {
          shotNumber: 1,
          x: 184,
          y: 316,
          score: 6,
        },
        {
          shotNumber: 2,
          x: 181,
          y: 201,
          score: 7,
        },
        {
          shotNumber: 3,
          x: 235,
          y: 187,
          score: 7,
        },
      ],
    },
    {
      seriesNumber: 3,
      shots: [
        {
          shotNumber: 1,
          x: 306,
          y: 215,
          score: 6,
        },
        {
          shotNumber: 2,
          x: 330,
          y: 260,
          score: 5,
        },
        {
          shotNumber: 3,
          x: 321,
          y: 324,
          score: 3,
        },
      ],
    },
    {
      seriesNumber: 4,
      shots: [
        {
          shotNumber: 1,
          x: 251,
          y: 356,
          score: 4,
        },
        {
          shotNumber: 2,
          x: 143,
          y: 334,
          score: 3,
        },
        {
          shotNumber: 3,
          x: 114,
          y: 275,
          score: 3,
        },
      ],
    },
    {
      seriesNumber: 5,
      shots: [
        {
          shotNumber: 1,
          x: 118,
          y: 221,
          score: 4,
        },
        {
          shotNumber: 2,
          x: 148,
          y: 185,
          score: 5,
        },
        {
          shotNumber: 3,
          x: 183,
          y: 156,
          score: 5,
        },
      ],
    },
    {
      seriesNumber: 6,
      shots: [
        {
          shotNumber: 1,
          x: 243,
          y: 136,
          score: 4,
        },
        {
          shotNumber: 2,
          x: 327,
          y: 177,
          score: 4,
        },
        {
          shotNumber: 3,
          x: 354,
          y: 207,
          score: 3,
        },
      ],
    },
    {
      seriesNumber: 7,
      shots: [
        {
          shotNumber: 1,
          x: 354,
          y: 244,
          score: 3,
        },
        {
          shotNumber: 2,
          x: 363,
          y: 282,
          score: 3,
        },
        {
          shotNumber: 3,
          x: 354,
          y: 319,
          score: 2,
        },
      ],
    },
    {
      seriesNumber: 8,
      shots: [
        {
          shotNumber: 1,
          x: 303,
          y: 379,
          score: 2,
        },
        {
          shotNumber: 2,
          x: 261,
          y: 387,
          score: 2,
        },
        {
          shotNumber: 3,
          x: 202,
          y: 395,
          score: 2,
        },
      ],
    },
    {
      seriesNumber: 9,
      shots: [
        {
          shotNumber: 1,
          x: 168,
          y: 396,
          score: 1,
        },
        {
          shotNumber: 2,
          x: 106,
          y: 375,
          score: 1,
        },
        {
          shotNumber: 3,
          x: 86,
          y: 339,
          score: 1,
        },
      ],
    },
    {
      seriesNumber: 10,
      shots: [
        {
          shotNumber: 1,
          x: 60,
          y: 291,
          score: 1,
        },
        {
          shotNumber: 2,
          x: 60,
          y: 228,
          score: 1,
        },
        {
          shotNumber: 3,
          x: 78,
          y: 179,
          score: 50,
        },
      ],
    },
  ],
  total: 114,
  distance: 18,
};

const ItemCheck = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);
  const [distance, setDistance] = useState(null);
  const [series, setSeries] = useState();

  useEffect(() => {
    setTotal(check.total);
    setDistance(check.distance);
    console.log(distance);
    let array = parsing(check);
    console.log(array);
    setSeries(array);
    console.log("State series: ", series);

    // const array =
    // console.log("array in Effect", array);
    // return array;
  }, []);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  var getTable = () => series;

  return (
    <>
      <h1>ItemCheck</h1>
      <Switch checked={!loading} onChange={onChange} />

      <div className="check">
        <div className="check__total"></div>
        <div className="check__user-name"></div>
        <div className="chack__date"></div>
        <div className="check__distance"></div>
      </div>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
      <br />
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
