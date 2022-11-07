import { useState, useEffect } from "react";

import clubService from "../../services/clubService";

const CoachMembers = () => {
  const [members, setMembers] = useState([]);

  const getData = () => {
    clubService.getClubMembers
      .then((res) => {
        if (res.status === 200) {
          setMembers(res.data);
        }
      })
      .catch((err) => console.error("something wrong", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" club-statistic">
      <h1>CoachMembers </h1>
      <hr />
      {/* Таблица с информацией о всех участниках клуба  */}
    </div>
  );
};

export default CoachMembers;
