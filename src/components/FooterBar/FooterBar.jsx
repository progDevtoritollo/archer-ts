import React from "react";
import { TabBar, Popup } from "antd-mobile";
import { Avatar, Badge } from "antd";
import { UserOutline } from "antd-mobile-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  TeamOutlined,
  FireOutlined,
  MenuOutlined,
  SettingOutlined,
  BellOutlined,
  BookOutlined,
  LineChartOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useHistory, useLocation, Link } from "react-router-dom";

import "./FooterBar.scss";

const FooterBar: React.FC = () => {
  const { isCoach } = useSelector(({ user }) => user);
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history.push(value);
  };
  const [visibleAvatar, setVisibleAvatar] = useState(false);
  const [visibleClub, setVisibleClub] = useState(false);
  const [visibleCoach, setVisibleCoach] = useState(false);
  const [visibleMore, setVisibleMore] = useState(false);

  return (
    <nav className="footer">
      <div
        className="footer-item"
        onClick={() => {
          setVisibleAvatar(true);
        }}
      >
        <Badge count={11}>
          <Avatar shape="square" icon={<UserOutline />} />
        </Badge>
        <h6>Iam</h6>
      </div>
      <div className="footer-item">
        <TeamOutlined
          onClick={() => {
            setVisibleClub(true);
          }}
        />
        <h6>Club</h6>
      </div>
      {isCoach && (
        <div className="footer-item">
          <TeamOutlined
            onClick={() => {
              setVisibleCoach(true);
            }}
          />
          <h6>Coach</h6>
        </div>
      )}
      <Link className="footer-item" to="/target">
        <FireOutlined />
        <h6>Target</h6>
      </Link>
      <div className="footer-item">
        <MenuOutlined
          onClick={() => {
            setVisibleMore(true);
          }}
        />
        <h6>More</h6>
      </div>

      <Popup
        visible={visibleAvatar}
        onMaskClick={() => {
          setVisibleAvatar(false);
        }}
        bodyStyle={{ minHeight: "5vh" }}
      >
        <TabBar
          activeKey={pathname}
          onChange={(value: string) => setRouteActive(value)}
        >
          <TabBar.Item
            className="footer-item"
            key={"/user/settings"}
            icon={<SettingOutlined />}
            title={"Settings"}
          />
          <TabBar.Item
            className="footer-item"
            key={"/user/notification"}
            icon={<BellOutlined />}
            title={"Notification"}
            badge={11}
          />
          <TabBar.Item
            className="footer-item"
            key={"/user/statistic"}
            icon={<LineChartOutlined />}
            title={"Statistic"}
            badge={0}
          />
          <TabBar.Item
            className="footer-item"
            key={"/user/checks"}
            icon={<BookOutlined />}
            title={"Checks"}
            badge={0}
          />
        </TabBar>
      </Popup>
      <Popup
        visible={visibleClub}
        onMaskClick={() => {
          setVisibleClub(false);
        }}
        bodyStyle={{ minHeight: "4.5vh" }}
      >
        <TabBar
          activeKey={pathname}
          onChange={(value: string) => setRouteActive(value)}
        >
          <TabBar.Item
            className="footer-item"
            key={"/club/statistic"}
            icon={<LineChartOutlined />}
            title={"Statistic"}
          />
          <TabBar.Item
            className="footer-item"
            key={"/club/activity"}
            icon={<DatabaseOutlined />}
            title={"activity"}
          />
          <TabBar.Item
            className="footer-item"
            key={"/club/events"}
            icon={<FireOutlined />}
            title={"Events"}
            badge={1}
          />

          <TabBar.Item
            className="footer-item"
            key={"/club/settings"}
            icon={<SettingOutlined />}
            title={"Settings"}
          />
        </TabBar>
      </Popup>
      <Popup
        visible={visibleCoach}
        onMaskClick={() => {
          setVisibleCoach(false);
        }}
        bodyStyle={{ minHeight: "4.5vh" }}
      >
        <TabBar
          activeKey={pathname}
          onChange={(value: string) => setRouteActive(value)}
        >
          <TabBar.Item
            className="footer-item"
            key={"/club/settings"}
            icon={<SettingOutlined />}
            title={"Settings"}
          />

          <TabBar.Item
            className="footer-item"
            key={"/club/events"}
            icon={<FireOutlined />}
            title={"Events"}
            badge={1}
          />
          <TabBar.Item
            className="footer-item"
            key={"/club/checks"}
            icon={<BookOutlined />}
            title={"Checks"}
            badge={0}
          />
          <TabBar.Item
            className="footer-item"
            key={"/club/members"}
            icon={<MenuOutlined />}
            title={"Member"}
          />
        </TabBar>
      </Popup>
      <Popup
        visible={visibleMore}
        onMaskClick={() => {
          setVisibleMore(false);
        }}
        bodyStyle={{ minHeight: "5vh" }}
      >
        <TabBar
          activeKey={pathname}
          onChange={(value: string) => setRouteActive(value)}
        >
          <TabBar.Item
            className="footer-item"
            key={"/iam"}
            icon={<UserOutline />}
            title={"Iam"}
            badge={1}
          />
          <TabBar.Item
            className="footer-item"
            key={"/todo"}
            icon={<TeamOutlined />}
            title={"Club"}
            badge={0}
          />
          <TabBar.Item
            className="footer-item"
            key={"/Target"}
            icon={<FireOutlined />}
            title={"Target"}
            badge={0}
          />
          <TabBar.Item
            className="footer-item"
            key={"/More"}
            icon={<MenuOutlined />}
            title={"More"}
            badge={0}
          />
        </TabBar>
      </Popup>
    </nav>
  );
};

export default FooterBar;
