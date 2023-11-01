import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const racingCars = await this.getCarName();
    const tryCount = await this.getTryCount();

    Console.print('실행 결과');

    this.executeGameRound(racingCars, tryCount);

    const finalWinner = this.getFinalWinner(racingCars);

    Console.print(`최종 우승자 : ${finalWinner}`);

    return;
  }

  async getCarName() {
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const racingCarNames = inputCarName.replaceAll(' ', '').split(',');

    this.validateCarNames(racingCarNames);

    const racingCars = racingCarNames.reduce((acc, value) => {
      acc[value] = 0;
      return acc;
    }, {});

    return racingCars;
  }

  validateCarNames(carNames) {
    const MAX_LENGTH = 5;

    carNames.forEach((name) => {
      if (name === '') {
        throw new Error('[ERROR] 입력값이 잘못된 형식입니다.');
      }

      if (name.length > MAX_LENGTH) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });
  }

  async getTryCount() {
    const inputTryCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );

    const parsedTryCount = Number(inputTryCount);

    this.validateTryCount(parsedTryCount);

    return parsedTryCount;
  }

  validateTryCount(tryCount) {
    if (!tryCount || Number.isNaN(tryCount)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  moveForward(key, value, racingCars) {
    const MINIMUM_FORWARD_VALUE = 4;
    const randomNumber = this.getRandomNumber();

    if (randomNumber >= MINIMUM_FORWARD_VALUE) {
      racingCars[key] = value += 1;
    }
  }

  executeGameRound(racingCars, tryCount) {
    let round = 0;

    while (round < tryCount) {
      Object.entries(racingCars).forEach(([key, value]) => {
        this.moveForward(key, value, racingCars);
      });

      this.printGameRound(racingCars);

      round += 1;
    }
  }

  printGameRound(gameRound) {
    Object.entries(gameRound).forEach(([key, value]) => {
      const hyphenValue = this.getHyphensByNumber(value);

      Console.print(`${key} : ${hyphenValue}`);
    });
  }

  getHyphensByNumber(score) {
    const HYPHEN = '-';

    return HYPHEN.repeat(score);
  }

  getFinalWinner(finalScore) {
    const finalWinner = [];

    const maximumNumber = Math.max(...Object.values(finalScore));

    Object.entries(finalScore).forEach(([key, value]) => {
      if (value === maximumNumber) {
        finalWinner.push(key);
      }
    });

    return finalWinner.join(',');
  }
}

export default App;
