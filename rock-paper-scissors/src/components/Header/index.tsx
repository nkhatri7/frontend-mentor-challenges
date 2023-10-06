import { FC } from "react";
import "./header.scss";
import Score from "../Score";

const Header: FC = () => {
  return (
    <header>
      <h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>
      <Score />
    </header>
  );
};

export default Header;
