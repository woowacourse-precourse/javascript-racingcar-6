// 모든 코드는 airbnb의 style guide를 따른다.
import { readLineAsync } from "../utils/missionUtils.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
import { carValidation } from "../validations/carValidation.js";

const RacingGame = () => {
  StartGame();
};

const StartGame = async () => {
  const racingCarNames = (await readLineAsync(GAME_MESSAGE.GAME_START)).split(
    ","
  );
  carValidation(racingCarNames);
  return racingCarNames;
};

export { RacingGame };
