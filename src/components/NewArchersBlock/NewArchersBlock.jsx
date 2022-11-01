import "./NewArchersBlock.scss";
import clubService from "../../services/clubService";
import { Card } from "./../index";

import moment from "moment";
import { useState, useEffect } from "react";
import { Button } from "antd";

const NewArchersBlock = (newArcher) => {
  const handleAddNewComersClick = (userId) => {
    clubService.postNewComerAdd(userId);
    // getNewComersList();
  };

  return (
    <div className="archer-block-wrapper">
      <Card className="archer-card">
        <div className="archer-card__name">{`Имя:  ${newArcher.name}  `}</div>
        <div className="archer-card__surename">{`Фамилия: ${newArcher.surname}  `}</div>
        <div className="archer-card__email">
          {` Email: ${newArcher.email} `}
        </div>
        {/* <div className="archer-card__messageData">
          {`Дата: ${newArcher.createDtm} `}
        </div> */}
        <div className="archer-card__messageData">
          {/* {Дата: ${newArcher.createDtm} } */}
          {`Дата: ${moment(newArcher.createDtm).format(
            "MMMM Do YYYY, h:mm:ss a"
          )} `}
        </div>
        <Button
          type="primary"
          onClick={() => handleAddNewComersClick(newArcher.id)}
          block
        >
          Добавить
        </Button>
      </Card>
    </div>
  );
};

export default NewArchersBlock;
