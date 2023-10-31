import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStaticMessage(message) {
    return Console.print(message);
  },

  /**
   * 각 라운드의 실행결과를 주어진 문자형식으로 변환해 출력한다.
   * @param {[{name, progress}]} currentResult 객체배열
   * @returns {string} name : - (progress의 수에 맞춰 - 가 출력된다.)
   */
  printCurrentResult(currentResult) {
    let message = '';

    currentResult.forEach(({ name, progress }) => {
      const progressString = MESSAGE.progress.repeat(progress);
      message += `${name} : ${progressString}\n`;
    });

    return this.printStaticMessage(message);
  },

  /**
   * 최종 우승자를 주어진 문자형식으로 변환해 출력한다.
   * @param {[string]} winners 문자배열
   * @returns {string} 최종 우승자 : winner (2명 이상일때 뒤에 ,space가 붙는다.)
   */
  printFinalWinner(winners) {
    let message = '';
    message += `${MESSAGE.finalWinner}${winners.join(MESSAGE.commaSpace)}`;
    return this.printStaticMessage(message);
  },
};

export default OutputView;
