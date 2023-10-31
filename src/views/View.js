import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import makeOneSentence from '../util/makeOneSentence.js';

class View {
  static async writeRaingGameCarNames() {
    const cars = await Console.readLineAsync(MESSAGE.START);
    return cars;
  }

  static async writeRacingGameCounts() {
    const counts = await Console.readLineAsync(MESSAGE.COUNT);
    return counts;
  }

  static printRacingGameStart() {
    Console.print(MESSAGE.RUN);
  }

  static printRacingGameRound(eachRound) {
    let roundStringForm = '';

    // 데이터 정제
    const names = Object.keys(eachRound);
    const values = Object.values(eachRound);

    // 출력문 만들기
    names.forEach((item, index) => {
      roundStringForm += `${item} : ${values[index]}\n`;
    });
    roundStringForm += `\n`;
    Console.print(roundStringForm);
  }

  static printRacingGameWinners(winners) {
    Console.print(makeOneSentence(MESSAGE.WINNERL, winners));
  }
}

export default View;
