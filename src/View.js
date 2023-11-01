import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/MESSAGE.js";
import {
  isNotEmpty,
  isNotEmptyList,
  isNumber,
  isValidateCarList,
  isValidateCount,
} from "../utils/inputValidator.js";

const Input = {
  async inputCarNames() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT.CAR_NAMES);
    const carNamesList = userInput.trim().split(MESSAGE.SIGNAL.SEPARATOR);

    if (!isNotEmpty(userInput)) throw new Error(MESSAGE.ERROR.EMPTY_INPUT);
    if (!isNotEmptyList(carNamesList))
      throw new Error(MESSAGE.ERROR.EMPTY_INPUT);
    if (!isValidateCarList(carNamesList))
      throw new Error(MESSAGE.ERROR.INVALID_CARS_INPUT);

    return carNamesList.map((carName) => carName.trim());
  },

  async inputCount() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.COUNT);

    if (!isNotEmpty(input)) throw new Error(MESSAGE.ERROR.EMPTY_INPUT);
    if (!isNumber(input)) throw new Error(MESSAGE.ERROR.NOT_NUMBER_INPUT);
    if (!isValidateCount(input))
      throw new Error(MESSAGE.ERROR.INVALID_COUNT_INPUT);

    return Number(input);
  },
};

const Output = {
  printResult(gameStatus) {
    gameStatus.forEach((car) => {
      Console.print(MESSAGE.OUTPUT.RESULT(car));
    });
    Console.print("");
  },
  printResultMessage() {
    Console.print("");
    Console.print(MESSAGE.OUTPUT.RESULT_MESSAGE);
  },
  printWinner(winnerList) {
    Console.print(MESSAGE.OUTPUT.WINNER(winnerList));
  },
};

export default { Input, Output };
