import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Action, Result } from "../types";

interface GameContextType {
  userAction: Action | null;
  setUserAction: Dispatch<SetStateAction<Action | null>>;
  botAction: Action | null;
  setBotAction: Dispatch<SetStateAction<Action | null>>;
  score: number;
  updateScore: (result: Result) => void;
}

export const GameContext = createContext<GameContextType>({
  userAction: null,
  setUserAction: () => {},
  botAction: null,
  setBotAction: () => {},
  score: 0,
  updateScore: () => {},
});

export const useGameData = () => useContext(GameContext);
