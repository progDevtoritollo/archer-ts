import "./ItemCheck.scss";

import React, { useState } from "react";
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
  const [dataTable, setDataTable] = useState({});
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };

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
      <div className="table">
        {/* <Table
          columns={columns}
          dataSource={dataTable}
          pagination={false}
          bordered
        /> */}
      </div>
    </>
  );
};

export default ItemCheck;
