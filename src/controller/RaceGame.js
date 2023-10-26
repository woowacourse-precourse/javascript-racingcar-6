import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";
import GameCalculator from "../models/GameCalculator.js";

const startGame = async () => {
  ConsoleOutput.printStartMessage();
  const cars = await ConsoleInput.getCarNames();
  ConsoleOutput.printGetAttempts();
  const attempts = await ConsoleInput.getNumberOfAttempts();
  ConsoleOutput.printEmptyLine();
  return { cars, attempts };
};

const playGame = async ({ cars, attempts }) => {
  ConsoleOutput.printResultMessage();
  GameCalculator(cars, attempts);
};

const finishGame = async () => {};

const RaceGame = async () => {
  const gameData = await startGame();
  await playGame(gameData);
  finishGame();
};

export default RaceGame;
