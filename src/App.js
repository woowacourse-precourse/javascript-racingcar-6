import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import InputValidation from './InputValidation.js';

function getWinner(carArr) {
  let winners = [];
  let winnerPosition = 0;
  carArr.forEach((car) => {
    if (winnerPosition < car.position) {
      winnerPosition = car.position;
      winners = [car.name];
    } else if (winnerPosition === car.position) {
      winners.push(car.name);
    }
  });
  return winners;
}

class App {
  async play() {
    const inputValidation = new InputValidation();

    let carNameArr = await this.getCarName();
    inputValidation.isCarNameValid(carNameArr);

    let roundCount = await this.getRoundCount();
    inputValidation.isRoundCountValid(roundCount);

    let carArr = this.createCarArray(carNameArr);

    Console.print('\n실행 결과');
    this.runRace(carArr, roundCount);
    let winners = getWinner(carArr);
    Console.print(`최종 우승자 : ${winners}`);
  }

  createCarArray(carNameArr) {
    let carArr = [];
    carNameArr.forEach((element) => {
      carArr.push(new Car(element));
    });
    return carArr;
  }

  oneRound(carArr) {
    carArr.forEach((car) => {
      car.goForward();
      car.showPosition();
    });
  }

  runRace(carArr, roundCount) {
    for (let i = 0; i < roundCount; i++) {
      this.oneRound(carArr);
      Console.print('\n');
    }
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNameArr = carNames.split(',');
    return carNameArr;
  }

  async getRoundCount() {
    const roundCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return roundCount;
  }
}

export default App;
