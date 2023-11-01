import { Console, Random, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const { carNames, numMoves } = await this.getUserInput();
      this.validateCarNames(carNames);
      this.validateNumberOfCars(carNames);
      this.validateUniqueCarNames(carNames);
      this.validateNumMoves(numMoves);

      const raceResults = this.runRace(carNames, numMoves);
      this.printResults(raceResults);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getUserInput() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): ')
      .split(',')
      .map(name => name.trim());

    const numMoves = parseInt(Console.readLineAsync('시도할 횟수를 입력하세요: '), 10);

    return { carNames, numMoves };
  }

  runRace(carNames, numMoves) {
    const raceResults = {};
    for (const carName of carNames) {
      raceResults[carName] = 0;
    }

    for (let i = 0; i < numMoves; i++) {
      for (const carName of carNames) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          raceResults[carName]++;
        }
      }
    }

    return raceResults;
  }

  printResults(raceResults) {
    for (const [carName, distance] of Object.entries(raceResults)) {
      Console.print(`${carName}: ${'-'.repeat(distance)}`);
    }
    const maxDistance = Math.max(...Object.values(raceResults));
    const winners = Object.keys(raceResults).filter(carName => raceResults[carName] === maxDistance);
    Console.print(`우승자: ${winners.join(', ')}`);
  }

  validateCarNames(carNames) {
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error('자동차 이름은 5자 이하여야 합니다.');
      }
    });
  }

  validateNumberOfCars(carNames) {
    if (carNames.length === 0) {
      throw new Error('적어도 한 대 이상의 자동차가 필요합니다.');
    }
  }

  validateUniqueCarNames(carNames) {
    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      throw new Error('자동차 이름은 각각 서로 다르게 입력되어야 합니다.');
    }
  }

  validateNumMoves(numMoves) {
    if (isNaN(numMoves) || numMoves <= 0) {
      throw new Error('이동할 횟수는 정수여야 합니다.');
    }
  }
}

export default App;
