import { CheckList } from "../../components/index";

const UserChecks = () => {
  return (
    <div>
      <h1>UserChecks</h1>
      Список контрольных пользователя
      <div className="check-list">
        <CheckList />
      </div>
    </div>
  );
};

export default UserChecks;
