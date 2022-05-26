import React from "react";
import { Route } from "react-router-dom";

import { FooterBar } from "../../components";
// import ProfileNotification from "./../ProfileNotification/ProfileNotification";
// import ProfileSettings from "./../ProfileSettings/ProfileSettings";
// import TrainingEvent from "./../TrainingEvent/TrainingEvent";
import {
  ProfileNotification,
  ProfileSettings,
  TrainingEvent,
  ProfileStatistic,
  ClubStatistic,
  ClubActivity,
  ClubEvents,
} from "./../index";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Route exact path="/profile/settings" component={ProfileSettings} />
        <Route
          exact
          path="/profile/notification"
          component={ProfileNotification}
        />
        <Route exact path="/profile/statistic" component={ProfileStatistic} />
        <Route exact path="/club/statistic" component={ClubStatistic} />
        <Route exact path="/club/activity" component={ClubActivity} />
        <Route exact path="/club/events" component={ClubEvents} />
        <Route path="/target" component={TrainingEvent} />
      </div>
      <div className="fix-footer"></div>
      <FooterBar />
      {/* <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheet
      </div> */}
    </>
  );
};
export default Home;
