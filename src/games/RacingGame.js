import { readLineAsync } from "../utils/missionUtils.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
import { carValidation } from "../validations/carValidation.js";
import { numberValidation } from "../validations/numberValidation.js";

const RacingGame = async () => {
  const cars = await StartGame();
  const inputCount = await GameInputCount();
  return { cars, inputCount };
};

const StartGame = async () => {
  const racingCarNames = (await readLineAsync(GAME_MESSAGE.GAME_START)).split(
    ","
  );
  carValidation(racingCarNames);
  return racingCarNames;
};

const GameInputCount = async () => {
  const inputCount = await readLineAsync(GAME_MESSAGE.GAME_INPUT_COUNT);
  numberValidation(inputCount);
  return inputCount;
};

export { RacingGame };
