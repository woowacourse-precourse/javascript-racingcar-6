import { getUserInputAndValidate, printResult } from '../view/InputOutput.js';
import GAME_SCENARIO from '../constant/GameScenario.js';
import validate from '../validate/Validate.js';
import race from './Race.js';

const settingGameFromUserInput = async () => {
  const carNames = await getUserInputAndValidate(
    GAME_SCENARIO.ENTER_CAR_NAME,
    validate.carName,
  );
  const playCount = await getUserInputAndValidate(
    GAME_SCENARIO.ENTER_PLAY_COUNT,
    validate.playCount,
  );

  const cars = race.createRaceCars(carNames);
  return { cars, playCount };
};

const playRaceGame = (cars, playCount) => {
  race.playRace(cars, playCount);
  return race.winner(cars);
};

const printGameWinner = winner => {
  printResult(GAME_SCENARIO.WINNER, winner);
};

const GameController = {
  settingGameFromUserInput,
  playRaceGame,
  printGameWinner,
};

export default GameController;
