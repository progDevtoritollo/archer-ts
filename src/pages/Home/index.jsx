import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { FooterBar, ItemCheck, ItemUser } from "../../components";
import { LoadingSpinner } from "../../modules";
import userService from "../../services/userService";
import CoachNewarchers from "../CoachNewarchers/CoachNewarchers";
import {
  setSurname,
  setName,
  setCoach,
  setRank,
  setBirthday,
} from "./../../redux/actions/user";

import {
  UserNotification,
  UserSettings,
  TrainingEvent,
  UserStatistic,
  ClubStatistic,
  ClubActivity,
  ClubEvents,
  ClubSettings,
  UserChecks,
} from "./../index";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    userService.getUserInfo().then((res) => {
      // console.log(res.data);

      dispatch(setRank(res.data.user.rank));
      dispatch(setSurname(res.data.user.surname));
      dispatch(setName(res.data.user.name));
      dispatch(setCoach(res.data.isTrainer));
      dispatch(setBirthday(res.data.user.birthday));
    });
    // занаесение данных о пользователе
  }, []);

  return (
    <>
      <div className="home">
        <Switch>
          <Route exact path="/user/settings" component={UserSettings} />
          <Route exact path="/user/notification" component={UserNotification} />
          <Route exact path="/user/statistic" component={UserStatistic} />
          <Route exact path="/user/checks" component={UserChecks} />
          <Route exact path="/coach/newcomers" component={CoachNewarchers} />
          <Route exact path="/club/statistic" component={ClubStatistic} />
          <Route exact path="/club/activity" component={ClubActivity} />
          <Route exact path="/club/events" component={ClubEvents} />
          <Route exact path="/club/settings" component={ClubSettings} />
          <Route path="/user/:id" component={ItemUser} />
          <Route path="/check/:id" component={ItemCheck} />
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
