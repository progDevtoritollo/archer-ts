import "./UIstart.scss";

import { Slider } from "antd";

import { Badge, TabBar } from "antd-mobile";
import React, { useState } from "react";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "我的待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "我的消息",
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "personalCenter",
    title: "个人中心",
    icon: <UserOutline />,
  },
];

const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
};

const UIStart = () => {
  const [activeKey, setActiveKey] = useState("todo");
  return (
    <div className="UIStart">
      <h4>included=true</h4>
      <Slider marks={marks} defaultValue={37} />
      <Slider range marks={marks} defaultValue={[26, 37]} />
      <h4>included=false</h4>
      <Slider marks={marks} included={false} defaultValue={37} />
      <h4>marks & step</h4>
      <Slider marks={marks} step={10} defaultValue={37} />
      <h4>step=null</h4>
      <Slider marks={marks} step={null} defaultValue={37} />

      <div className="mobile-part">
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>

        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} />
          ))}
        </TabBar>

        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} title={item.title} />
          ))}
        </TabBar>

        <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default UIStart;
