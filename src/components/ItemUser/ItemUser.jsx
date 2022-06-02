import "./ItemUser.scss";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const ItemUser = () => {
  useEffect(() => {
    // звгрузка страниццы по id
  }, []);
  const { userPage } = useSelector(({ user }) => user);
  return (
    // компонент для отображения страницы пользователя
    // личная статистика и некоторая информация
    <>
      <div className="member">
        <div className="member__user-avatar"></div>
        <div className="member__info-block">
          <div className="member__info-block__user-name">{userPage.name}</div>
          <div className="member__info-block__user-rang">
            RANK:{userPage.rank}
          </div>
        </div>
        <button className="member__invitation-duel">+</button>
      </div>
      <div>{userPage.id}</div>
    </>
  );
};

export default ItemUser;
