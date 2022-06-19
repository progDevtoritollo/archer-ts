import React, { useEffect, useState } from "react";
import { Table, Button, Select } from "antd";

import Bullet from "../../assets/img/bullet.png";
import BigTarget from "../../containers/BigTarget";
import "./TrainingEvent.scss";
import userService from "../../services/userService";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const width = 15;

const columns = [
  {
    title: "С",
    dataIndex: "number",
    width: 5,
  },
  {
    // title: "Выстрелы",
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

function TrainingEvent(){
  const history = useHistory();
  const [distance, setDistance] = useState(18);
  var check = {
    series: [],
    distance: distance,
  };
  async function postCheck(CheckData) {
    console.log("Received values of KR: ", CheckData);
    let res = await userService.postUserCheckCreate(CheckData)
    .then(res=> {
      if( res.status==200){
        history.push("/")
      }
    })
    console.log(res);
  }

  const handleChange = (value) => {
    check.distance = value;
    console.log(`selected ${value}`, check);
    setDistance(+value);
    console.log(distance);
  };
  // const [total, setTotal] = useState(0);
  const [bullet, setBullet] = useState([]);

  const [serie, setSeries] = useState([]);
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

    let shotNumber = (bullet.length + 1) % 3;
    if (shotNumber === 0) shotNumber = 3;

    const item = {
      shotNumber: shotNumber,
      x: e.clientX - 13,
      y: e.clientY - 13,
      score: +e.target.getAttribute("id"),
    };

    setBullet([...bullet, item]);
    if (currentSeries.firstShot === null) {
      setCurrentSeries({
        ...currentSeries,
        firstShot: item.score,
      });
    } else if (currentSeries.secondShot === null) {
      setCurrentSeries({
        ...currentSeries,
        secondShot: item.score,
      });
    } else if (currentSeries.thirdShot === null) {
      setCurrentSeries({
        ...currentSeries,
        thirdShot: item.score,
      });
    } else {
      setSeries([...serie, currentSeries]);
      setCurrentSeries({
        key: currentSeries.key + 1,
        number: currentSeries.number + 1,
        firstShot: item.score,
        secondShot: null,
        thirdShot: null,
      });
    }
  };

  // const getTable = () => [...series, currentSeries];
  const getTable = () => [currentSeries];

  function handleBTNClick () {
    let totalScore = 0;
    let seriesNumber = 0;

    // check.total = totalScore;

    bullet.forEach((element, index) => {
      totalScore += bullet[index].score;

      if ((index + 1) % 3 === 0) {
        seriesNumber += 1;
        check.series.push({
          seriesNumber: seriesNumber,
          shots: [bullet[index - 2], bullet[index - 1], bullet[index]],
        });
      }
    });
    check.total = totalScore;
    postCheck(check);
  };

  // useEffect(() => {
  //   console.log("series", series);
  //   console.log("bullet", bullet);
  //   console.log("currentSeries", currentSeries);
  //   console.warn("chek");

  //   if (bullet.length >= 30) {
  //     postCheck(bullet);
  //   }
  // }, [bullet, series, currentSeries]);
  useEffect(() => {
    // setTotal(total + bullet[index].score)
  });

  return (
    <div className="trainningEvent-wrapper">
      {/* <div className="trainningEvent-wrapper" style={{ position: "absolute" }}> */}
      <div className="trainningEvent__target-block">
        <div className="trainningEvent__header">
          <h1>Check </h1>
          <Select
            defaultValue="18"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="18">18</Option>
            <Option value="30">30</Option>
            {/* <Option value="disabled" disabled>
              Disabled
            </Option> */}
            <Option value="60">60</Option>
          </Select>
        </div>

        <BigTarget handleClick={handleClick} className="target" />
        {bullet.map((value) => {
          return (
            <img
              key={value.y + value.x}
              style={{ position: "absolute", left: value.x, top: value.y }}
              src={Bullet}
              width={15}
              alt="bullet"
            />
          );
        })}
      </div>

      <div className="trainningEvent__table">
        <Table
          columns={columns}
          dataSource={getTable()}
          pagination={false}
          bordered
        />
      </div>
      <Button
        className="trainningEvent__btn"
        onClick={handleBTNClick}
        type="primary"
        size="large"
      >
        Завершить стрельбу
        {/* *{total}/300* */}
      </Button>
      {/* <div className="check-bottom">
        <h1 className="total-score">total</h1>
      </div> */}
    </div>
  );
};

export default TrainingEvent;
