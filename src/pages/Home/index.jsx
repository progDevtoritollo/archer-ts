import React from "react";
import { Route } from "react-router-dom";

import { FooterBar } from "../../components";

import {
  ProfileNotification,
  ProfileSettings,
  TrainingEvent,
  ProfileStatistic,
  ClubStatistic,
  ClubActivity,
  ClubEvents,
  ClubSettings,
  ProfileChecks,
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
        <Route exact path="/profile/checks" component={ProfileChecks} />
        <Route exact path="/club/statistic" component={ClubStatistic} />
        <Route exact path="/club/activity" component={ClubActivity} />
        <Route exact path="/club/events" component={ClubEvents} />
        <Route exact path="/club/settings" component={ClubSettings} />

        <Route path="/target" component={TrainingEvent} />
      </div>
      <div className="fix-footer"></div>
      <FooterBar />
    </>
  );
};
export default Home;
