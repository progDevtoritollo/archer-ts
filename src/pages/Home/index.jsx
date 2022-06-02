import React from "react";
import { Route, Switch } from "react-router-dom";

import { FooterBar, ItemUser } from "../../components";

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
        <Switch>
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
          <Route path="/user/:id" component={ItemUser} />
          <Route path="/target" component={TrainingEvent} />
          <Route path="/404">
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </div>
      <div className="fix-footer"></div>
      <FooterBar />
    </>
  );
};
export default Home;
