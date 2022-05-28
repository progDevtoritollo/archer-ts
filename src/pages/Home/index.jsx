import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

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
} from "./../index";

import "./Home.scss";

const Home = () => {
  useSelector(({ user }) => user);
  useSelector(({ club }) => club);

  return (
    <>
      <div className="home">
        {/* <ProfileStatistic /> */}
        <Route
          exact
          path="/profile/settings"
          render={(user) => <ProfileSettings user={user} />}
        />
        <Route
          exact
          path="/profile/notification"
          component={ProfileNotification}
        />
        <Route exact path="/profile/statistic" component={ProfileStatistic} />
        <Route
          exact
          path="/club/statistic"
          render={(club, user) => <ClubStatistic club={club} />}
        />
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
