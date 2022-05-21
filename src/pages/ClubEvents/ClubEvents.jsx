import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ClubEvents.scss";

const ClubEvents = () => {
  return (
    <div className="club-events">
      <h1>ProfileSettings</h1>
      <span>События на тренировке - ( призеры, дуэли, )</span>
    </div>
  );
};

export default ClubEvents;
