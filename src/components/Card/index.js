import classNames from "classnames";

import "./Card.scss";

const Card = ({ children, className }) => (
  <div className={classNames("card", className)}>{children}</div>
);

export default Card;
