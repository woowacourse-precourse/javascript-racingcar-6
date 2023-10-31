import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default class Game {
  constructor() {
    this.carNameList = [];
    this.round = 0;
    this.carInfoList = [];
  }

  async start() {
    this.carNameList = await this.enterCarNames();
    this.round = await this.enterGameRound();
  }

  async enterCarNames() {
    MissionUtils.Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameStr = await MissionUtils.Console.readLineAsync('');
    const carList = carNameStr.split(',');

    if (carList.filter((item) => item.length > 5 || item.length < 1).length) {
      throw new Error('[ERROR] 자동차 이름은 최소 1자, 최대 5자만 가능합니다.');
    }

    return carList;
  }

  async enterGameRound() {
    MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
    const round = await MissionUtils.Console.readLineAsync('');

    if (/\D/.test(round) || round === '') {
      throw new Error('[ERROR] 횟수는 숫자 형식만 입력 가능합니다.');
    } else if (round === '0') {
      throw new Error('[ERROR] 횟수는 1회 이상 입력 가능합니다.');
    }

    return round;
  }

  progressGame() {
    const car = new Car();

    this.carInfoList = this.carNameList.map((item) => car.setCarInfo(item));

    MissionUtils.Console.print('\n실행 결과');

    let currentRound = 0;
    while (currentRound < this.round) {
      this.carNameList.map((item) => car.moveCar(item, this.carInfoList));
      this.printResult();
      currentRound += 1;
    }
  }

  getForwardBar(forwardCount) {
    let i = 0;
    let forwardBar = '';
    while (i < forwardCount) {
      forwardBar += '-';
      i++;
    }
    return forwardBar;
  }

  printResult() {
    this.carInfoList.map((item) => {
      MissionUtils.Console.print(
        item.name + ' : ' + this.getForwardBar(item.forwardCount)
      );
    });
    MissionUtils.Console.print('');
  }

  getWinner() {
    const finalCount = this.carInfoList.map((item) => item.forwardCount);
    const max = Math.max(...finalCount);
    const winnerObjectList = this.carInfoList.filter(
      (car) => car.forwardCount === max
    );
    const winnerNameList = winnerObjectList.map((item) => item.name);
    return winnerNameList;
  }

  printWinner() {
    const winner = this.getWinner().join(', ');
    MissionUtils.Console.print('최종 우승자 : ' + winner);
  }
}
