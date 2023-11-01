import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.gameStatus = true;
  }

  async play() {
    while (this.gameStatus) {
      const cars = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      let carList = this.checkCarsValidation(cars);

      const num = await MissionUtils.Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?'
      );
      this.checkNumValidation(num);

      MissionUtils.Console.print('실행 결과');
      this.printScoreBoard(carList, num);

      MissionUtils.Console.print(await this.printWinner(carList));
      this.gameStatus = false;
    }
  }

  checkCarsValidation(carList) {
    const cars = carList.split(',');
    for (let i = 0; i < cars.length; i++) {
      const carName = cars[i].trim();
      if (carName.length > 5) {
        throw Error('[ERROR] 다섯자 이하의 이름만 가능합니다.');
      } else if (typeof carName !== 'string') {
        throw Error('[ERROR] 문자로 입력해주세요');
      } else if (carName === null) {
        throw Error('[ERROR] 자동차 이름을 입력해주세요');
      }
    }
    return cars;
  }

  checkNumValidation(num) {
    if (num === null) {
      throw Error('[ERROR] 시도 횟수를 올바르게 입력해주세요');
    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  countMoving() {
    const randomNum = this.getRandomNumber();
    return randomNum >= 4;
  }

  printDash(count) {
    return '-'.repeat(count);
  }

  async printScoreBoard(cars, num) {
    let results = [];
    for (let score = 0; score < num; score++) {
      for (let nowCar = 0; nowCar < cars.length; nowCar++) {
        const isMove = this.countMoving();
        const dashes = isMove ? this.printDash(1) : '';
        results.push(`${cars[nowCar]} : ${dashes}`);
      }
      await MissionUtils.Console.print(results.join('\n'));
    }
  }

  async printWinner(cars) {
    const maxDashes = Math.max(...cars.map((car) => car.length));
    const winners = cars.filter((car) => car.length === maxDashes);

    if (winners.length === 1) {
      MissionUtils.Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }
}

export default App;
