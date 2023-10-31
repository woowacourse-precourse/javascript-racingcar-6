import { Console } from '@woowacourse/mission-utils';
import RaceController from '../controller/RaceController';

export default class OutputView {
  constructor() {
    this.raceController = new RaceController();
  }

  printResult() {
    // 회차별 각 차량 전진 횟수 프린트 함수
    const { carList } = this.raceController;
    carList.forEach(car => {
      const score = `-`.repeat(car.score);
      Console.print(`${car.name} : ${car.score}`, score);
    });
    Console.print('\n');
  }
}
