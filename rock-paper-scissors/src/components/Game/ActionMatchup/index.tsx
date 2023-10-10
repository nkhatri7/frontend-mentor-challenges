import { FC, useEffect, useState } from "react";
import { Result } from "../../../types";
import { useGameData } from "../../../context/GameContext";
import { getRandomAction, getResult } from "../../../utils";
import ActionItem from "../ActionItem";
import GameOutcome from "../GameOutcome";
import "./ActionMatchup.scss";

const ActionMatchup: FC = () => {
  const {
    userAction,
    botAction,
    setBotAction,
    updateScore,
  } = useGameData();
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (userAction && !botAction) {
      setBotAction(getRandomAction());
    }
  }, [userAction, botAction, setBotAction]);

  useEffect(() => {
    if (userAction && botAction) {
      const result = getResult(userAction, botAction);
      setResult(result);
    }
  }, [userAction, botAction]);

  useEffect(() => {
    if (result) {
      updateScore(result);
    }
  }, [result, updateScore]);

  // useEffect(() => {
  //   console.log("score in matchup component: " + score);
  // }, [score]);

  return (
    <div className="action-matchup-container">
      <section className="action-matchup">
        <section className="action-selection-container">
          {userAction
            ? <ActionItem action={userAction} />
            : <div className="placeholder-action" />
          }
          <p className="action-owner">YOU PICKED</p>
        </section>
        {result && (
          <div className="game-outcome-container--large">
            <GameOutcome result={result} />
          </div>
        )}
        <section className="action-selection-container">
          {botAction
            ? <ActionItem action={botAction} />
            : <div className="placeholder-action" />
          }
          <p className="action-owner">THE HOUSE PICKED</p>
        </section>
      </section>
      {result && (
        <div className="game-outcome-container--small">
          <GameOutcome result={result} />
        </div>
      )}
    </div>
  );
};

export default ActionMatchup;
