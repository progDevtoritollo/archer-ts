import { NewArchersBlock } from "../../components/index";
import clubService from "../../services/clubService";
import "./CoachNewarchers.scss";

import { useState, useEffect } from "react";

const CoachNewarchers = () => {
  const [newComersArray, setNewComersArray] = useState([]);

  const getNewComersList = () => {
    clubService.getNewComers().then((res) => {
      setNewComersArray(res.data);
    });
    console.log(newComersArray);
  };

  useEffect(() => {
    getNewComersList();
  }, []);

  const items = newComersArray.map((obj) => (
    <NewArchersBlock key={obj.id} {...obj} />
  ));

  return (
    <div className="container">
      <h1 className="content__top">CoachNewarchers</h1>
      <div className="content__items">
        {newComersArray === [] ? <div>Нет новых участников</div> : items}
      </div>
    </div>
  );
};

export default CoachNewarchers;
