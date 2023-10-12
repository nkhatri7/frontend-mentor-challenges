import { FC, useEffect, useRef, useState } from "react";
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

  const userActionItemRef = useRef<HTMLDivElement>(null);
  const botActionItemRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (result) {
      const winnerDiv = document.createElement("div");
      winnerDiv.classList.add("action-item-winner");
      if (result === "win") {
        // userActionItemRef.current?.classList.add("action-item-winner");
        userActionItemRef.current?.appendChild(winnerDiv);
      } else if (result === "loss") {
        // botActionItemRef.current?.classList.add("action-item-winner");
        botActionItemRef.current?.appendChild(winnerDiv);
      }
    }
  }, [result]);

  return (
    <div className="action-matchup-container">
      <section className="action-matchup">
        <section className="action-selection-container">
          {userAction ? (
            <div className="action-item-container" ref={userActionItemRef}>
              <ActionItem action={userAction} />
            </div>
          ) : (
            <div className="placeholder-action" />
          )}
          <p className="action-owner">YOU PICKED</p>
        </section>
        {result && (
          <div className="game-outcome-container--large">
            <GameOutcome result={result} />
          </div>
        )}
        <section className="action-selection-container">
          {botAction ? (
            <div className="action-item-container" ref={botActionItemRef}>
              <ActionItem action={botAction} />
            </div>
          ) : (
            <div className="placeholder-action" />
          )}
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
