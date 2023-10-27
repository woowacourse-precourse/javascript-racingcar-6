import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

const CAR_LIST_INPUT_MESSAGE =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';

class ConvertInputTo {
  static async carList() {
    const inputString = await Console.readLineAsync();
    ErrorCheck.carListString(inputString);
    return inputString.split(',');
  }

  static async gameCount() {
    const inputString = await Console.readLineAsync();
  }
}

export default ConvertInputTo;
