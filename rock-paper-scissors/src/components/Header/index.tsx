import { FC } from "react";
import Score from "../Score";
import "./header.scss";

const Header: FC = () => {
  return (
    <header>
      <h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>
      <Score />
    </header>
  );
};

export default Header;
