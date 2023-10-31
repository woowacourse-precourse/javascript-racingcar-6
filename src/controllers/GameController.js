import { Random, Console } from '@woowacourse/mission-utils';
import PromptMessage from '../views/PromptMessage.js';

class GameController {
  constructor() {
    this.rand = 0;
    this.totalCountArr = []; // 모든 자동차들의 전진 횟수
    this.maxCountIndexArr = []; // totalCountArr요소들 중 최댓값의 인덱스들
  }

  getRandomValue() {
    this.rand = Random.pickNumberInRange(0, 9);
    return this.rand;
  }

  getForwardCount(carModels, car) {
    const randomValue = this.getRandomValue();
    if (randomValue >= 4) {
      carModels[car].forwardCountArr.push('-');
    } else {
      carModels[car].forwardCountArr.push();
    }
    return carModels[car].forwardCountArr.join('');
  }

  printCarForward(carModels) {
    Object.keys(carModels).forEach((car) => {
      const forwardCount = this.getForwardCount(carModels, car);
      Console.print(PromptMessage.PRINT_FORWARD(car, forwardCount));
    });
  }

  repeatRace(carModels, attempt) {
    Console.print(PromptMessage.PRINT_RACESTART);
    let remainAttempt = attempt;

    while (remainAttempt > 0) {
      this.printCarForward(carModels);
      remainAttempt -= 1;
      Console.print(' ');
    }
  }

  printWinner(carModels, carModelsArr) {
    Object.keys(carModels).forEach((car) => {
      const forwardCount = carModels[car].forwardCountArr;
      this.totalCountArr.push(forwardCount.length);
    });

    // 최댓값 들어있는 인덱스들의 값 반환
    let formIndex = this.totalCountArr.indexOf(Math.max(...this.totalCountArr));
    while (formIndex !== -1) {
      this.maxCountIndexArr.push(formIndex);
      formIndex = this.totalCountArr.indexOf(
        Math.max(...this.totalCountArr),
        formIndex + 1,
      );
    }

    const winner = this.maxCountIndexArr.map((idx) => carModelsArr[idx]);
    Console.print(PromptMessage.PRINT_WINNER(winner.join(', ')));
  }
}

export default GameController;
