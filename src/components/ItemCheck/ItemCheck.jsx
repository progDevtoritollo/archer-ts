import "./ItemCheck.scss";

import React, { useState } from "react";
import { Skeleton, Card, Switch, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const ItemCheck = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <>
      <Switch checked={!loading} onChange={onChange} />

      <div className="check">
        <div className="check__total"></div>
        <div className="check__user-name"></div>
        <div className="chack__date"></div>
        <div className="check__distance"></div>
      </div>
      <Card
        style={{
          width: 300,
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
      <Switch />
    </>
  );
};

export default ItemCheck;
