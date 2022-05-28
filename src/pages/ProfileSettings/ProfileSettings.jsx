import { Form, Input, TreeSelect, DatePicker, Button } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import "./ProfileSettings.scss";
import { setName, setSurname, setBirthday } from "./../../redux/actions/user";

const { TreeNode } = TreeSelect;
const dateFormat = "YYYY/MM/DD";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { name, surname, birthday } = useSelector(({ user }) => user);

  const [archerLevel, setArcherLevel] = useState(undefined);

  const handleSelectProfileLevel = (level) => {
    setArcherLevel(level);
  };
  const onChangeDate = (date, dateString) => {
    dispatch(setBirthday(dateString));
  };

  const handleSetName = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleSetSurname = (e) => {
    dispatch(setSurname(e.target.value));
    console.log(e.target.value);
  };
  const hadleSubmit = () => {
    console.log("send data Profile Settings");
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
        onFinish={hadleSubmit}
      >
        <Form.Item label="Уровень Стрелка ">
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            value={archerLevel}
            dropdownStyle={{ maxHeight: 500, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={handleSelectProfileLevel}
          >
            <TreeNode value="U" title="Юношеские">
              <TreeNode value="U1" title="Юношеские 1 ранг" />
              <TreeNode value="U2" title="Юношеские 2 ранг" />
              <TreeNode value="U3" title="Юношеские 3 ранг" />
            </TreeNode>
            <TreeNode value="A" title="Взрослые">
              <TreeNode value="A1" title="Взрослые 1 ранг" />
              <TreeNode value="A2" title="Взрослые 2 ранг" />
              <TreeNode value="A3" title="Взрослые 3 ранг" />
            </TreeNode>
            <TreeNode value="KMC" title="KMC" />
            <TreeNode value="MC" title="MC" />
            <TreeNode value="MCMK" title="MCMK" />
            <TreeNode value="ZMS" title="ЗМС" />
          </TreeSelect>
        </Form.Item>
        <Form.Item label="Имя">
          <Input value={name} onChange={handleSetName} />
        </Form.Item>
        <Form.Item label="Фамилия">
          <Input value={surname} onChange={handleSetSurname} />
        </Form.Item>
        <Form.Item label="Дата рождения">
          <DatePicker
            format={dateFormat}
            onChange={onChangeDate}
            value={moment(birthday)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileSettings;
