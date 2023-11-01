import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.askCarNames();
    const racingCarsMap = await this.inputCarNames();

    this.askGameCount();
    const gameCount = await this.inputGameCount();

    this.startRacingCarGame(racingCarsMap, gameCount);
  }

  askCarNames() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }

  async inputCarNames() {
    const carNames = await Console.readLineAsync('');
    const carNameList = carNames.split(',').map((carName) => carName.trim());

    if (!this.isValidCarNamesInput(carNameList)) {
      throw new Error('[ERROR] 잘못된 입력값입니다.');
    }

    const racingCarsMap = new Map();
    carNameList.forEach((racingCar) => {
      racingCarsMap.set(racingCar, '');
    });

    return racingCarsMap;
  }

  askGameCount() {
    Console.print('시도할 횟수는 몇 회인가요?');
  }

  async inputGameCount() {
    const gameCount = await Console.readLineAsync('');
    const trimmedGameCount = gameCount.trim();

    if (!this.isValidGameCountInput(trimmedGameCount)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return parseInt(trimmedGameCount);
  }

  async startRacingCarGame(racingCarsMap, gameCount) {
    Console.print('\n실행 결과');

    for (let i = 0; i < gameCount; i++) {
      await this.moveRacingCarRandomDistance(racingCarsMap);
      await this.printRacingCarGameResult(racingCarsMap, gameCount);
    }
    const racingCarWinner = this.getRacingCarWinner(racingCarsMap);

    Console.print(`최종 우승자 : ${racingCarWinner}`);
  }

  async moveRacingCarRandomDistance(racingCarsMap) {
    [...racingCarsMap.keys()].forEach((racingCar) => {
      const randomDistance = Random.pickNumberInRange(0, 9);
      if (randomDistance >= 4) {
        racingCarsMap.set(racingCar, racingCarsMap.get(racingCar) + '-');
      }
    });
  }

  async printRacingCarGameResult(racingCarsMap) {
    for (const [racingCar, distance] of racingCarsMap.entries()) {
      await Console.print(`${racingCar} : ${distance}`);
    }
    Console.print('');
  }

  getRacingCarWinner(racingCarsMap) {
    const longestDistance = [...racingCarsMap.values()].reduce(
      (longestDistance, currentDistance) =>
        longestDistance.length > currentDistance.length
          ? longestDistance
          : currentDistance
    );

    const racingCarWinner = [...racingCarsMap.keys()].filter(
      (car) => racingCarsMap.get(car) === longestDistance
    );

    return racingCarWinner.join(',');
  }

  isValidCarNamesInput(carNameList) {
    if (carNameList.length === 1) return false;

    for (let carName of carNameList) {
      if (carName.length === 0 || carName.length > 5) return false;
    }

    return true;
  }

  isValidGameCountInput(gameCount) {
    if (isNaN(gameCount) || gameCount <= 0) return false;

    return true;
  }
}

export default App;
