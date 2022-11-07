import { Form, Select, Switch, Button, Radio, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ClubSettings.scss";
import { SetIsCoach } from "./../../redux/user/slice";
import clubService from "../../services/clubService";

const ClubSettings = () => {
  const [clubName, setСlubName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");

  // const [cityArray, setCityArray] = useState(["Odessa", "Lviv", "Kiev"]);
  const [clubArray, setClubArray] = useState([]);
  const [clubId, setClubId] = useState(Number);

  // const [clubArray, setClubArray] = useState(["ДЮШ40", "Olimpic"]);

  const { club } = useSelector(({ club }) => club);
  // const { clubName } = useSelector(({ club }) => club);
  const dispatch = useDispatch();

  const [pageSwitch, setPageSwitch] = useState(true);

  const handleClubSet = (clubId) => {
    setClubId(clubId);
  };
  const handleAddSubmit = () => {
    let data = { clubId };
    console.log("send data Club Settings", data);
    clubService.postClubJoin(data);
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
    clubService
      .createClubs(data)
      .then((res) => {
        if (res.status === 200) {
          console.log("crate club response ", res);
          dispatch(SetIsCoach(true));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    clubService
      .getAllClubs()
      .then((res) => {
        console.log(res.data);
        setClubArray(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
            {/* <Form.Item label="Город ">
              <Select>
                {cityArray.map((item, id) => (
                  <Select.Option key={id} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item> */}
            <Form.Item label="Клуб ">
              <Select onChange={handleClubSet}>
                {clubArray.map((club) => (
                  <Select.Option key={club.id} value={club.id}>
                    {club.name}
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
