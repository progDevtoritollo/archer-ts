import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ClubEvents.scss";

const ClubEvents = () => {
  const { club } = useSelector(({ club }) => club);
  console.log(club);
  return (
    <>
      {club === null ? (
        <Redirect to="/club/settings" />
      ) : (
        <div className="club-events">
          <h1>ClubEvents</h1>
          <span>События на тренировке - ( призеры, дуэли, )</span>
        </div>
      )}
    </>
  );
};

export default ClubEvents;
