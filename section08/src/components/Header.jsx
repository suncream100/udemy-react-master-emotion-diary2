import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>오늘은 📆</h1>
      <h3>{new Date().toDateString()}</h3>
    </div>
  );
};

export default memo(Header);
