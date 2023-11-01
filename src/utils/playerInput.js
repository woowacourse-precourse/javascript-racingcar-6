import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants.js";
import { nameValidation, repeatCountValidation } from "./validation.js";

const enterCarName = async () => {
  const carNameInput = await Console.readLineAsync(MESSAGE.nameQuery);
  const carNames = await carNameInput.split(",").map((name) => name.trim());
  nameValidation(carNames);
  return carNames;
};

const enterMoveCount = async () => {
  const moveCountInput = await Console.readLineAsync(MESSAGE.numberQuery);
  repeatCountValidation(await moveCountInput);
  return moveCountInput;
};

export { enterCarName, enterMoveCount };
