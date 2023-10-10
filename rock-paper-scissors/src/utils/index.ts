import { Action, Result } from "../types";

/**
 * Generates a random action.
 * @returns A random action.
 */
export const getRandomAction = (): Action => {
  const actions = Object.values(Action);
  const randomIndex = Math.round(Math.random() * actions.length - 1);
  return actions[randomIndex];
};

/**
 * Gets the result from the user's perspective.
 * @param userAction The action the user selected.
 * @param botAction The action the bot selected.
 * @returns The result for the user.
 */
export const getResult = (userAction: Action, botAction: Action): Result => {
  // Check for draw
  if (userAction === botAction) {
    return "draw";
  }

  // Define the valid winning combinations as an array
  const winningCombinations: string[] = [
    Action.SCISSORS + Action.PAPER,
    Action.PAPER + Action.ROCK,
    Action.ROCK + Action.LIZARD,
    Action.LIZARD + Action.SPOCK,
    Action.SPOCK + Action.SCISSORS,
    Action.SCISSORS + Action.LIZARD,
    Action.PAPER + Action.SPOCK,
    Action.ROCK + Action.SCISSORS,
    Action.LIZARD + Action.PAPER,
    Action.SPOCK + Action.ROCK,
  ];

  const combination = userAction + botAction;
  // If the combination is in the valid winning combinations array
  // it's a win, otherwise, it's a loss
  return winningCombinations.includes(combination) ? "win" : "loss";
};
