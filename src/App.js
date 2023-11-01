import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carNameArr = [];
    this.numberOfAttempts = 0;
  }

  async getCarName() {
    const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    if (carName === undefined || carName.trim() === '') {
      throw new Error('[ERROR] 입력된 값이 없거나 공백입니다.');
    } else {
      this.carNameArr = carName.split(',');
    }

    const nameSet = new Set();

    this.carNameArr.forEach(name => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 작성 가능합니다.');
      } else if (nameSet.has(name)) {
        throw new Error('[ERROR] 중복된 이름이 있습니다.');
      } else {
        nameSet.add(name);
      }
    });

    return this.carNameArr;
  }

  async getNumberOfAttempts() {
    const onlyNumberCheck = /^[0-9]+$/;
    const numberOfAttempts = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!onlyNumberCheck.test(numberOfAttempts)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    this.numberOfAttempts = numberOfAttempts;
    return this.numberOfAttempts;
  }

  generateRacingState(cars) {
    return cars.map(car => `${car.name} : ${car.position}`).join('\n');
  }

  findRacingWinner(cars) {
    const maxPosition = Math.max(...cars.map(car => car.position.length));
    const winners = cars.filter(car => car.position.length === maxPosition);

    const winnerNames = winners.map(winner => winner.name);

    return winnerNames.join(', ');
  }

  async play() {
    await this.racingCarGame();
  }
}

export default App;
