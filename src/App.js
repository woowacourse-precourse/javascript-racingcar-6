import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.startMessage =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    this.countMessage = '시도할 횟수는 몇 회인가요?\n';
    this.resultMessage = '실행 결과';
    this.carData = {};
    this.finishMessage = '최종 우승자 : ';
    this.distanceArray = [];
  }

  async play() {
    const userCar = await MissionUtils.Console.readLineAsync(this.startMessage);
    const userCount = await MissionUtils.Console.readLineAsync(
      this.countMessage,
    );
    const carNames = userCar.split(',');
    if (!App.isValidCar(carNames)) {
      throw new Error('[ERROR] 자동차 이름을 잘못 입력했습니다.');
    }
    if (!App.isValidNumber(userCount)) {
      throw new Error('[ERROR] 시도 횟수를 잘못 입력했습니다.');
    }
    carNames.forEach(name => {
      this.carData[name] = '';
    });
    MissionUtils.Console.print('');
    MissionUtils.Console.print(this.resultMessage);
    for (let i = 0; i < userCount; i += 1) {
      this.moveCar();
      this.printResult();
      MissionUtils.Console.print('');
    }
    this.printFinish();
  }

  static isValidCar(carNames) {
    if (carNames.every(name => name.length > 5)) return false;
    if (carNames.some(name => name.trim().length === 0)) return false;
    return true;
  }

  static isValidNumber(userCount) {
    if (Number.isNaN(Number(userCount))) return false;
    if (userCount <= 0) return false;
    return true;
  }

  moveCar() {
    Object.keys(this.carData).forEach(name => {
      const randNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randNumber >= 4) {
        this.carData[name] += '-';
      }
    });
  }

  printResult() {
    Object.keys(this.carData).forEach(name => {
      MissionUtils.Console.print(`${name} : ${this.carData[name]}`);
    });
  }

  printFinish() {
    Object.values(this.carData).forEach(value => {
      this.distanceArray.push(value.length);
    });
    const maxDistance = Math.max(...this.distanceArray);
    const winners = Object.keys(this.carData).filter(
      name => this.carData[name].length === maxDistance,
    );
    const winnerString = winners.join(', ');
    MissionUtils.Console.print(this.finishMessage + winnerString);
  }
}

export default App;
