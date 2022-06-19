import "./NewarchersList.scss";
import clubService from "../../services/clubService";

import { useState, useEffect } from "react";
import { Card, Avatar, Button } from "antd";
const { Meta } = Card;

const NewarchersList = () => {
  const [newComersArray, setNewComersArray] = useState([]);

  const handleAddNewComersClick = (userId) => {
    clubService.postNewComerAdd(userId);
    getNewComersList();
  };

  const getNewComersList = () => {
    clubService.getNewComers().then((res) => {
      setNewComersArray(res.data);
    });
    console.log(newComersArray);
  };

  useEffect(() => {
    getNewComersList();
  }, []);

  return (
    <div className="">
      {/* <h1>NewarchersList</h1> */}
      {!newComersArray ? (
        <>
          {newComersArray.map((item, id) => (
            <Card
              key={id}
              style={{ width: "300", marginTop: 16 }}
              loading={newComersArray}
            >
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={`Имя:  ${item.name} ${item.surname} Email: ${item.email}`}
                description={` Дата: ${item.createDtm} `}
              />
              <br />
              <Button
                type="primary"
                onClick={() => handleAddNewComersClick(item.id)}
                block
              >
                Добавить
              </Button>
            </Card>
          ))}
        </>
      ) : (
        <h2>Нет новых учасников</h2>
      )}
    </div>
  );
};

export default NewarchersList;
