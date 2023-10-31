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
    this.carNames = [];
    this.userCount = 0;
  }

  async play() {
    await this.getUserInput();
    this.initializeCarData(this.carNames);
    this.printFinish();
  }

  async getUserInput() {
    const userCar = await MissionUtils.Console.readLineAsync(this.startMessage);
    this.userCount = await MissionUtils.Console.readLineAsync(
      this.countMessage,
    );
    this.carNames = await userCar.split(',');
    if (!App.isValidCar(this.carNames)) {
      throw new Error('[ERROR] 자동차 이름을 잘못 입력했습니다.');
    }
    if (!App.isValidNumber(this.userCount)) {
      throw new Error('[ERROR] 시도 횟수를 잘못 입력했습니다.');
    }
  }

  static isValidCar(carNames) {
    if (carNames.some(name => name.length > 5)) return false;
    if (carNames.some(name => name.replace(/\s/g, '').length === 0))
      return false;
    return true;
  }

  static isValidNumber(userCount) {
    if (Number.isNaN(Number(userCount))) return false;
    if (userCount <= 0) return false;
    return true;
  }

  initializeCarData(carNames) {
    carNames.forEach(name => {
      this.carData[name] = '';
    });
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
    Object.entries(this.carData).forEach(([name, distance]) => {
      MissionUtils.Console.print(`${name} : ${distance}`);
    });
  }

  printFinish() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(this.resultMessage);
    for (let i = 0; i < this.userCount; i += 1) {
      this.moveCar();
      this.printResult();
      MissionUtils.Console.print('');
    }
    const maxDistance = Math.max(
      ...Object.values(this.carData).map(distance => distance.length),
    );
    const winners = Object.keys(this.carData).filter(
      name => this.carData[name].length === maxDistance,
    );
    const winnerString = winners.join(', ');
    MissionUtils.Console.print(this.finishMessage + winnerString);
  }
}

export default App;
