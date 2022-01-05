import React, { useState } from "react";
import { Table } from "antd";

import Bullet from "../../assets/img/bullet.png";
import { Button } from "antd";
// import BigTarget from "../../containers/BigTarget";
import TripleTarget from "../../containers/TripleTarget";
import "./TrainingEvent.scss";

const width = 15;

const columns = [
  {
    title: "С",
    dataIndex: "number",
    width: 10,
  },
  {
    title: "Выстрелы",
    children: [
      {
        title: "1",
        dataIndex: "firstShot",
        key: "firstShot",
        width: width,
      },
      {
        title: "2",
        dataIndex: "secondShot",
        key: "secondShot",
        width: width,
      },
      {
        title: "3",
        dataIndex: "thirdShot",
        key: "thirdShot",
        width: width,
      },
    ],
  },
];

const TrainingEvent = () => {
  const [bullet, setBullet] = useState([]);

  const [series, setSeries] = useState([]);
  const [currentSeries, setCurrentSeries] = useState({
    key: 1,
    number: 1,
    firstShot: null,
    secondShot: null,
    thirdShot: null,
  });

  const handleClick = (e) => {
    if (currentSeries.number >= 10 && currentSeries.thirdShot !== null) {
      return;
    }
    const item = {
      x: e.clientX - 55,
      y: e.clientY - 55,
      id: e.target.getAttribute("id"),
    };

    setBullet([...bullet, item]);
    console.log(bullet);
    if (currentSeries.firstShot === null) {
      setCurrentSeries({
        ...currentSeries,
        firstShot: item.id,
      });
    } else if (currentSeries.secondShot === null) {
      setCurrentSeries({
        ...currentSeries,
        secondShot: item.id,
      });
    } else if (currentSeries.thirdShot === null) {
      setCurrentSeries({
        ...currentSeries,
        thirdShot: item.id,
      });
    } else {
      setSeries([...series, currentSeries]);
      setCurrentSeries({
        key: currentSeries.key + 1,
        number: currentSeries.number + 1,
        firstShot: item.id,
        secondShot: null,
        thirdShot: null,
      });
    }
  };

  const getTable = () => [...series, currentSeries];

  return (
    <div className="trainningEvent-wrapper" style={{ position: "absolute" }}>
      <div className="trainningEvent__target">
        {/* <h1>Внесение попаданий </h1> */}
        <div className="trainningEvent__target-upper">
          <TripleTarget handleClick={handleClick} />
          {bullet.map((value) => {
            return (
              <img
                style={{ position: "absolute", left: value.x, top: value.y }}
                src={Bullet}
                width={15}
                alt="bullet"
              />
            );
          })}
          <TripleTarget handleClick={handleClick} />
          {bullet.map((value) => {
            return (
              <img
                style={{ position: "absolute", left: value.x, top: value.y }}
                src={Bullet}
                width={15}
                alt="bullet"
              />
            );
          })}
        </div>
        <TripleTarget handleClick={handleClick} className="low-target" />
        {bullet.map((value) => {
          return (
            <img
              style={{ position: "absolute", left: value.x, top: value.y }}
              src={Bullet}
              width={15}
              alt="bullet"
            />
          );
        })}
      </div>

      {/* <Button
        className="trainningEvent__btn"
        // disabled={isSubmitting}
        // onClick={handleSubmit}
        type="primary"
        size="large"
      >
        Завершить стрельбу
      </Button> */}
      <div className="trainningEvent__table">
        <Table
          columns={columns}
          dataSource={getTable()}
          pagination={false}
          bordered
        />
      </div>
    </div>
  );
};

export default TrainingEvent;
