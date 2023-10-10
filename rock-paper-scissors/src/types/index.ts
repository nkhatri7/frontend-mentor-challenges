export enum Action {
  ROCK = "Rock",
  PAPER = "Paper",
  SCISSORS = "Scissors",
  LIZARD = "Lizard",
  SPOCK = "Spock",
}
export type GameState = "not-started" | "started" | "finished";
export type Result = "win" | "loss" | "draw";
