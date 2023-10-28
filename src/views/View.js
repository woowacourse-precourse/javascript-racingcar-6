import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../validators/Validator.js';
import { DITANCE_SYMBOL, MESSAGE } from '../constant.js';

class View {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static async askNameAnswer(message) {
    let answer = await MissionUtils.Console.readLineAsync(message);
    answer = this.removeSpace(answer);
    Validator.nameValidate(answer);
    answer = answer.split(',');
    return answer;
  }

  static async askExecutionNumber(message) {
    let answer = await MissionUtils.Console.readLineAsync(message);
    answer = this.removeSpace(answer);
    Validator.executionNumberValidate(answer);
    return answer;
  }

  static removeSpace(string) {
    return string.replaceAll(' ', '');
  }

  static roundPrint(name, distance) {
    MissionUtils.Console.print(`${name} : ${DITANCE_SYMBOL.repeat(distance)}`);
  }

  static winnerPrint(winnerList) {
    const splitWinners = winnerList.join(', ');
    MissionUtils.Console.print(`${MESSAGE.winner}${splitWinners}`);
  }
}
export default View;
