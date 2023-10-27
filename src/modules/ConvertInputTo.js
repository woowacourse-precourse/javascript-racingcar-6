import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

const CAR_LIST_INPUT_MESSAGE =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const GAME_COUNT_INPUT_MESSAGE = '시도할 횟수는 몇 회인가요?';

class ConvertInputTo {
  static async carList() {
    const inputString = await Console.readLineAsync(CAR_LIST_INPUT_MESSAGE);
    ErrorCheck.carListString(inputString);
    return inputString.split(',');
  }

  static async gameCount() {
    const inputString = await Console.readLineAsync(GAME_COUNT_INPUT_MESSAGE);
    ErrorCheck.gameCountString(inputString);
  }
}

export default ConvertInputTo;
