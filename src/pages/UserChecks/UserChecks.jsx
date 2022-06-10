import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

import { CheckList } from "../../components/index";
import userService from "../../services/userService";
// import { fetchUserChecks } from "./../../redux/actions/user";

const UserChecks = () => {
  const [checks, setChecks] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchUserChecks());
    userService
      .getUserChecks()
      .then((res) => {
        setChecks(res.data);
      })
      .catch((err) => {
        console.error("something wrong ", err);
      });
  }, []);

  return (
    <div>
      <h1>UserChecks</h1>
      Список контрольных пользователя
      <div className="check-list">
        <CheckList checks={checks} />
      </div>
    </div>
  );
};

export default UserChecks;
