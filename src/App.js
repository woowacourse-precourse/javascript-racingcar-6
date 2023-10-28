import { Console, Random } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
class App {
  async play() {
    const carList = [];

    const carNames = await this.inputCarNames();
    const carNameList = carNames.split(',');

    carNameList.forEach(carName => {
      if (!this.isValidCarName(carName))
        throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.\n');
      carList.push(new Car(carName));
    });

    const tryNum = await this.inputTryNum();
    if (!this.isValidTryNum(tryNum))
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.\n');

    Console.print('\n실행 결과');
    for (let i = 0; i < tryNum; i++) {
      this.tryCarGame(carList);
      this.printTryResult(carList);
    }

    const winners = this.getWinners(carList);
    this.printWinners(winners);
  }

  async inputCarNames() {
    try {
      const carNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      return carNames;
    } catch (error) {
      Console.print(error.message);
    }
  }

  async inputTryNum() {
    try {
      const tryNum =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      return tryNum;
    } catch (error) {
      Console.print(error.message);
    }
  }

  isValidTryNum(tryNum) {
    const regex = /[^0-9]/; //입력값이 숫자로만 이루어져있는지 체크
    //Q. 시도횟수에 대한 제한은? ex) n < 10000 조건을 넣어야 할지 말지고민
    if (regex.test(tryNum)) {
      return false;
    }
    return true;
  }

  isValidCarName(carName) {
    if (carName.length > 5) {
      return false;
    }
    return true;
  }

  tryCarGame(carList) {
    carList.forEach(car => {
      if (this.getRandomNumber() >= 4) car.move();
    });
  }

  printTryResult(carList) {
    carList.forEach(car => {
      Console.print(`${car.name} : ` + '-'.repeat(car.position + '\n'));
    });
    Console.print('');
  }

  getRandomNumber() {
    const number = Random.pickNumberInRange(0, 9);
    return number;
  }

  getWinners(carList) {
    const maxPos = carList.reduce((prev, curr) => {
      return prev.position >= curr.position ? prev : curr;
    });
    const maxPosCars = carList.filter(car => car.position === maxPos.position);
    const winners = maxPosCars.map(car => car.name);
    return winners;
  }
  printWinners(winnerList) {
    Console.print(`최종 우승자: ${winnerList.join(', ')}`);
  }
}
export default App;
