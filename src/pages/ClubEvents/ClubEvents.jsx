import { Redirect, Link } from "react-router-dom";

import "./ClubEvents.scss";
import club from "../../redux/reducers/club";

const ClubEvents = () => {
  return (
    <>
      {club.info === null ? (
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
