import { FC } from "react";
import Score from "../Score";
import Logo from "../../assets/images/logo-bonus.svg";
import "./Header.scss";

const Header: FC = () => {
  return (
    <header>
      <img
        src={Logo}
        alt="Rock Paper Scissors Lizard Spock"
        className="logo"
      />
      <Score />
    </header>
  );
};

export default Header;
