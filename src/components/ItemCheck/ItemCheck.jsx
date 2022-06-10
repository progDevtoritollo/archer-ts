import "./ItemCheck.scss";
import { parsing } from "./../../utils/parsing";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const ItemCheck = () => {
  const { check } = useSelector(({ club }) => club);
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
