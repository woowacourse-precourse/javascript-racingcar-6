import { Console } from '@woowacourse/mission-utils';
import Util from './Util.js';
import Input from './Input.js';

class RacingGame {
  constructor() {
    this.joinList = [];
    this.repeatNumber = '';
  }

  async start() {
    this.joinList = await Input.getJoinList();
    this.repeatNumber = await Input.getRepeatNumber();
    this.gameStart(this.joinList, this.repeatNumber);
  }

  /**
   * 모든 입력값을 받은 후 게임이 실행되는 함수
   * @param {{name: string, progress: string}[]} joinList 객체
   * @param {string} repeatNumber - 반복 횟수
   */
  gameStart(joinList, repeatNumber) {
    for (let i = 0; i < repeatNumber; i += 1) {
      this.printEachProgress(joinList);
    }

    this.printWinner(this.joinList);
  }

  /**
   *
   * @param {{name:string,progress:string}[]} joinList
   */
  printWinner(joinList) {
    const winnerList = this.getWinner(joinList);
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  /**
   *
   * @param {{name:string,progress : string}[]} joinList
   * @returns {string[]} 우승자 배열
   */
  getWinner(joinList) {
    const maxLength = Util.getMaxLength(joinList);
    const winnerList = Util.getWinnerList(joinList, maxLength);

    return winnerList.map((winner) => winner.name);
  }

  /**
   *
   * @param {{name:string,progress:string}[]} joinList
   */
  printEachProgress(joinList) {
    joinList.forEach((car) => {
      car.moveOrNot();

      Console.print(`${car.name} : ${car.progress}`);
    });

    Console.print(''); // 빈 줄 추가
  }
}

export default RacingGame;
