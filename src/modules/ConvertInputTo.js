import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';
import Get from './Get.js';

const CAR_LIST_INPUT_MESSAGE =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const NUMBER_OF_GAME_INPUT_MESSAGE = '시도할 횟수는 몇 회인가요?\n';

class ConvertInputTo {
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

  static async carList() {
    const inputString = await Console.readLineAsync(CAR_LIST_INPUT_MESSAGE);
    ErrorCheck.carListString(inputString);
    return inputString.split(',');
  }

  static async numberOfGame() {
    const inputString = await Console.readLineAsync(
      NUMBER_OF_GAME_INPUT_MESSAGE
    );
    ErrorCheck.positiveIntegerString(inputString);
    return Number(inputString);
  }
}

export default ConvertInputTo;
