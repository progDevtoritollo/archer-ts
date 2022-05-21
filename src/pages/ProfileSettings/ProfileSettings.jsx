import { Form, Input, Radio, Select, DatePicker } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import "./ProfileSettings.scss";
import { setName, setSurname, setBirthday } from "./../../redux/actions/user";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { name, surname, birthday } = useSelector(({ user }) => user);
  const dateFormat = "YYYY/MM/DD";
  const [componentSize, setComponentSize] = useState("default");

  const trainers = ["Валерия Владимировна", "Демо"];

  const onChangeDate = (date, dateString) => {
    // console.log("full date", date);
    dispatch(setBirthday(dateString));
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSetName = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleSetSurname = (e) => {
    dispatch(setSurname(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className="profile-settings">
      <h1>ProfileSettings</h1>
      <span>
        Фамилия дата рождения трернер размер мишени(в зависимости от возраста по
        автомату) аватарка на сколько заполнен профиль
      </span>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Размер мишени" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Имя">
          <Input value={name} onChange={handleSetName} />
        </Form.Item>
        <Form.Item label="Фамилия">
          <Input value={surname} onChange={handleSetSurname} />
        </Form.Item>
        <Form.Item label="Тренер">
          <Select>
            {trainers.map((item, id) => (
              <Select.Option key={id} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Дата рождения">
          <DatePicker
            format={dateFormat}
            onChange={onChangeDate}
            value={moment(birthday)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileSettings;
