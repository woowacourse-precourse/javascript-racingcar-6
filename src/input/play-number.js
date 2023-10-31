import { MissionUtils } from "@woowacourse/mission-utils";
import { inputPrintConstants, errorConstants} from '../utils/index.js';

export default class PlayNumber {
  static async inputPlayNumber() {
    const playNumber = await MissionUtils.Console.readLineAsync(inputPrintConstants.INPUT_TRY_NUMBER);
    return playNumber;
  }
 
  // 플레이 횟수에 대한 유효성 검사.
  static validatePlayNumber(number) {
    if (isNaN(number)) throw new Error(errorConstants.NOT_A_NUMBER);
  }

  
}