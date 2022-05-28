import { Form, Select, Switch, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./ClubSettings.scss";
import { setCoach } from "./../../redux/actions/user";

const ClubSettings = () => {
  const { isCoach } = useSelector(({ user }) => user);
  const { name } = useSelector(({ club }) => club);
  const dispatch = useDispatch();
  const clubs = ["Odessa", "Lviv"];
  const trainers = ["Валерия Владимировна", "Демо"];

  const handleSetCoach = (checked) => {
    dispatch(setCoach(checked));
    console.log(checked);
  };

  return (
    <div className="club-settings">
      <h1>ClubSettings {name}</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Тренер ">
          <Switch default={isCoach} onChange={handleSetCoach} />
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
            Изменить
          </Button>
        </Form.Item>
      </Form>
      <span>Инфомация о клубе</span>
    </div>
  );
};

export default ClubSettings;
