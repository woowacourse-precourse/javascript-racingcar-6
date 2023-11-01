import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';
import Get from './Get.js';

const CAR_LIST_INPUT_MESSAGE =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const NUMBER_OF_GAME_INPUT_MESSAGE = '시도할 횟수는 몇 회인가요?\n';

class ConvertInputTo {
  /**
   * Receives input from the user and returns an object with racing information (car list, number of games, whether raced or not) as properties.
   * @typedef {Object} containing racing information
   * @throws Will throw an error if even one separated string has more than 5 characters based on UTF-16
   * @throws Will throw an error if the string is not a positive integer
   */
  static async racingInfo() {
    const info = {};
    info.carList = await ConvertInputTo.carList();
    info.numberOfGame = await ConvertInputTo.numberOfGame();
    info.carPositionMatrix = Get.carPositionMatrix(
      info.carList.length,
      info.numberOfGame
    );
    return Object.freeze(info);
  }

  /**
   * Input a string separated by `','`. Each delimited string must be less than 5 characters in length according to the UTF-16 standard. Return an array containing strings.
   * @return {Array.<string>} containing car names
   * @throws Will throw an error if even one separated string has more than 5 characters based on UTF-16
   */
  static async carList() {
    const inputString = await Console.readLineAsync(CAR_LIST_INPUT_MESSAGE);
    ErrorCheck.carListString(inputString);
    return inputString.split(',');
  }

  /**
   * @function a positive integer is input. Return the `Number` type corresponding to the string.
   * @return {Number}
   * @throws Will throw an error if the string is not a positive integer
   */
  static async numberOfGame() {
    const inputString = await Console.readLineAsync(
      NUMBER_OF_GAME_INPUT_MESSAGE
    );
    ErrorCheck.positiveIntegerString(inputString);
    return Number(inputString);
  }
}

export default ConvertInputTo;
