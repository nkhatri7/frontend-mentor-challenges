import { FC } from "react";
import { Result } from "../../../types";
import { useGameData } from "../../../context/GameContext";
import "./GameOutcome.scss";

interface Props {
  result: Result;
}

const GameOutcome: FC<Props> = ({ result }) => {
  const { setUserAction, setBotAction } = useGameData();

  const handleReset = () => {
    setUserAction(null);
    setBotAction(null);
  };

  return (
    <div className="game-outcome">
      <span className="outcome-text">{getResultText(result)}</span>
      <button className="play-again-btn" onClick={handleReset}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default GameOutcome;

const getResultText = (result: Result): string => {
  switch (result) {
    case "win":
      return "YOU WIN";
    case "loss":
      return "YOU LOSE";
    case "draw":
      return "DRAW";
  }
};
