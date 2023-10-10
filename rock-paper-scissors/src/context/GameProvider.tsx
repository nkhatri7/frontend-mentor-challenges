import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Action, Result } from "../types";
import { GameContext } from "./GameContext";

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userAction, setUserAction] = useState<Action | null>(null);
  const [botAction, setBotAction] = useState<Action | null>(null);
  const [score, setScore] = useState<number>(0);

  const updateScore = useCallback((result: Result) => {
    setScore((prevScore) => {
      let newScore = prevScore;
      if (result === "win") {
        newScore = prevScore + 1;
      } else if (result === "loss" && prevScore > 0) {
        newScore = prevScore - 1;
      }
      localStorage.setItem("score", newScore.toString());
      return newScore;
    });
  }, []);

  useEffect(() => {
    const score = localStorage.getItem("score");
    setScore(score ? parseInt(score) : 0);
  }, []);

  return (
    <GameContext.Provider value={{
      userAction,
      setUserAction,
      botAction,
      setBotAction,
      score,
      updateScore,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
