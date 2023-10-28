import { Console, Random } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class RacingGame {
  constructor() {
    this.joinList = [];
    this.repeatNumber = '';
  }

  async start() {
    this.joinList = await this.getJoinList();
    this.repeatNumber = await this.getRepeatNumber();

    if (!Validate.isPositiveInteger(this.repeatNumber)) {
      throw new Error('[ERROR]');
    }

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
    const maxLength = joinList.reduce((maxValue, { progress }) => (
      maxValue > progress.length ? maxValue : progress.length
    ), 0);
    const winnerList = joinList.filter(({ progress }) => progress.length === maxLength);

    return winnerList.map((winner) => winner.name);
  }

  /**
   *
   * @param {{name:string,progress:string}[]} joinList
   */
  printEachProgress(joinList) {
    joinList.forEach((car) => {
      if (this.getRandomBoolean()) {
        car.progress += '-';
      }

      Console.print(`${car.name} : ${car.progress}`);
    });

    Console.print(''); // 빈 줄 추가
  }

  /**
   * 랜덤의 boolean 값을 반환하는 함수
   * @returns {boolean}
   */
  getRandomBoolean() {
    const randomInteger = Random.pickNumberInRange(0, 9);

    return randomInteger >= 4;
  }

  async getJoinList() {
    const joinString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const joinList = joinString.split(',');

    return joinList.map((name) => ({ name, progress: '' }));
  }

  async getRepeatNumber() {
    const repeatNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return repeatNumber;
  }
}

export default RacingGame;
