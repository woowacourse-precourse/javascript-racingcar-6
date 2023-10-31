import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.startMessage =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    this.countMessage = '시도할 횟수는 몇 회인가요?\n';
    this.resultMessage = '실행 결과';
    this.carData = {};
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
    for (let i = 0; i < userCount; i++) {
      this.moveCar();
      this.printResult();
    }
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
    MissionUtils.Console.print(this.resultMessage);
    Object.keys(this.carData).forEach(name => {
      MissionUtils.Console.print(`${name} : ${this.carData[name]}`);
    });
  }
}

export default App;
