import { CheckList } from "./../../components/index";

const ProfileChecks = () => {
  return (
    <div>
      <h1>ProfileChecks</h1>
      Список контрольных пользователя
      <div className="check-list">
        <CheckList />
      </div>
    </div>
  );
};

export default ProfileChecks;
