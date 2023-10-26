import { Console, Random } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class App {
  constructor() {
    this.joinCars = [];
    this.repeatNumber = '';
  }

  async play() {
    await this.gameProgress();
  }

  async gameProgress() {
    this.getRandomBoolean();
    this.joinCars = await this.getJoinCarsArray();
    this.repeatNumber = await this.getRepeatNumber();

    if (!Validate.isPositiveInteger(this.repeatNumber)) {
      throw new Error('[ERROR]');
    }

    this.gameStart(this.joinCars, this.repeatNumber);
  }

  /**
   * 모든 입력값을 받은 후 게임이 실행되는 함수
   * @param {{name: string, result: string}[]} joinCars 객체
   * @param {string} repeatNumber - 반복 횟수
   */
  gameStart(joinCars, repeatNumber) {
    for (let i = 0; i < repeatNumber; i++) {
      this.printEachProgress(joinCars);
    }

    this.printResult(this.joinCars);
  }

  /**
   * 
   * @param {{name:string,result:string}[]} joinCars 
   */
  printResult(joinCars) {
    const winnerList = this.getWinner(joinCars);
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  /**
   *
   * @param {{name:string,result : string}[]} joinCars
   * @returns {string[]} 우승자 배열
   */
  getWinner(joinCars) {
    const maxLength = joinCars.reduce((maxValue, { result }) => {
      return maxValue > result.length ? maxValue : result.length;
    }, 0);
    const winnerList = joinCars.filter(({ result }) => {
      return result.length === maxLength;
    });

    return winnerList.map((winner) => winner.name);
  }

  /**
   *
   * @param {{name:string,result:string}[]} joinCars
   */
  printEachProgress(joinCars) {
    joinCars.forEach((car) => {
      if (this.getRandomBoolean()) {
        car.result += '-';
      }

      Console.print(`${car.name} : ${car.result}`);
    });

    Console.print(''); // 빈 줄 추가
  }

  /**
   * 랜덤의 boolean 값을 반환하는 함수
   * @returns {boolean}
   */
  getRandomBoolean() {
    const random = Random.pickNumberInRange(0, 9);
    return random >= 4;
  }

  async getJoinCarsArray() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = cars.split(',');

    return carNames.map((name) => ({ name, result: '' }));
  }

  async getRepeatNumber() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
