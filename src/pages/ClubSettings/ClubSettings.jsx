import { Form, Select, Switch, Button, Radio, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ClubSettings.scss";
import { setCoach } from "./../../redux/actions/user";
import clubService from "../../services/clubService";

const ClubSettings = () => {
  const [clubName, setСlubName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const { isCoach } = useSelector(({ user }) => user);
  // const { clubName } = useSelector(({ club }) => club);
  const dispatch = useDispatch();
  const clubs = ["ДЮШ40", "Olimpic"];
  const cites = ["Odessa", "Lviv"];
  const trainers = ["Валерия Владимировна", "Демо"];

  const [pageSwitch, setPageSwitch] = useState(true);

  const handleSetCoach = (checked) => {
    dispatch(setCoach(checked));
    console.log(checked);
  };
  const handleAddSubmit = (data) => {
    console.log("send data Club Settings", data);
  };

  const handleCreateSubmit = () => {
    let data = {
      clubName,
      country,
      city,
      street,
      building,
    };
    console.log("send data Club Create", data);
    clubService.createClubs(data);
  };

  return (
    <div className="club-settings">
      <h1>ClubSettings {clubName}</h1>
      <Radio.Group
        value={pageSwitch}
        onChange={(e) => {
          setPageSwitch(e.target.value);
        }}
      >
        <Radio.Button value={true}>Добавиться</Radio.Button>
        <Radio.Button value={false}>Создать</Radio.Button>
      </Radio.Group>

      {pageSwitch ? (
        <>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            onFinish={handleAddSubmit}
          >
            <Form.Item label="Тренер ">
              <Switch default={isCoach} onChange={handleSetCoach} />
            </Form.Item>
            <Form.Item label="Город ">
              <Select>
                {cites.map((item, id) => (
                  <Select.Option key={id} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Клуб ">
              <Select>
                {clubs.map((item, id) => (
                  <Select.Option key={id} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Тренер ">
              <Select>
                {trainers.map((item, id) => (
                  <Select.Option key={id} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Войти в клуб
              </Button>
            </Form.Item>
          </Form>
          <span>Инфомация о клубе</span>
        </>
      ) : (
        <>
          <h3>Create Club </h3>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            onFinish={handleCreateSubmit}
          >
            <Form.Item label="Название Клуба ">
              <Input
                value={clubName}
                onChange={(e) => {
                  setСlubName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Страна ">
              <Input
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Город ">
              <Input
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Улица ">
              <Input
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="здание ">
              <Input
                value={building}
                onChange={(e) => {
                  setBuilding(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Создать
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default ClubSettings;
