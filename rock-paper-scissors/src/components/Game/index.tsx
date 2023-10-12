import { FC } from "react";
import { useGameData } from "../../context/GameContext";
import ActionPicker from "./ActionPicker";
import ActionMatchup from "./ActionMatchup";

const Game: FC = () => {
  const { userAction } = useGameData();

  return userAction ? <ActionMatchup /> : <ActionPicker />;
};

export default Game;
