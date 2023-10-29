import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carNames = await this.getCarNames();
    const carNamesArray = this.convertNamesToArray(carNames);
    this.validateCarNames(carNamesArray);
    const tryCount = await this.getTryCount();
    this.validateTryCount(tryCount);
    const raceResults = this.race(carNamesArray, tryCount);
    const winCarNamesArray = this.findWinner(carNamesArray, raceResults);
    this.printWinner(winCarNamesArray);
  }

  async getCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return carNames;
  }

  convertNamesToArray(carNames) {
    const carNamesArray = carNames.split(',');
    return carNamesArray;
  }

  validateCarNames(carNamesArray) {
    const pattern = /^[a-z]{1,5}$/;
    const uniqueCarNamesArray = [...new Set(carNamesArray)];

    carNamesArray.forEach((carName) => {
      if (!pattern.test(carName)) {
        throw new Error('[Error] 이름의 형식이 잘못됐습니다.');
      }
    });

    if (carNamesArray.length < 2) {
      throw new Error('[Error] 이름은 두 개 이상 입력해야 합니다.');
    }

    if (carNamesArray.length !== uniqueCarNamesArray.length) {
      throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
    }
  }

  convertNamesToArray(carNames) {
    const carNamesArray = carNames.split(',');
    return carNamesArray;
  }

  validateCarNames(carNamesArray) {
    const pattern = /^[a-z]{1,5}$/;
    const uniqueCarNamesArray = [...new Set(carNamesArray)];

    carNamesArray.forEach((carName) => {
      if (!pattern.test(carName)) {
        throw new Error('[Error] 이름의 형식이 잘못됐습니다.');
      }
    });

    if (carNamesArray.length < 2) {
      throw new Error('[Error] 이름은 두 개 이상 입력해야 합니다.');
    }

    if (carNamesArray.length !== uniqueCarNamesArray.length) {
      throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
    }
  }

  async getTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    return Number(tryCount);
  }

  validateTryCount(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 횟수는 숫자만 입력해야 합니다.');
    }

    if (tryCount < 1) {
      throw new Error('[ERROR] 횟수는 1이상의 자연수를 입력해야 합니다.');
    }
  }

  race(carNamesArray, tryCount) {
    const carProgressArray = carNamesArray.map(() => '');

    MissionUtils.Console.print('\n실행결과');

    while (tryCount > 0) {
      this.updateCarProgress(carProgressArray);
      this.printCarProgress(carNamesArray, carProgressArray);
      tryCount -= 1;
    }
    return carProgressArray;
  }

  updateCarProgress(carProgressArray) {
    carProgressArray.forEach((carProgress, index, carProgressArray) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

      if (randomNumber >= 4) {
        carProgressArray[index] = carProgress + '-';
      }
    });
    return carProgressArray;
  }

  printCarProgress(carNamesArray, carProgressArray) {
    carNamesArray.forEach((carName, index) => {
      MissionUtils.Console.print(`${carName} : ${carProgressArray[index]}`);
    });
    MissionUtils.Console.print('');
  }

  findWinner(carNamesArray, raceResults) {
    const carProgressCountArray = raceResults.map(
      (progress) => progress.length
    );
    const maxProgress = Math.max(...carProgressCountArray);
    const winCarNamesArray = [];

    carProgressCountArray.forEach((progress, index) => {
      if (progress === maxProgress) {
        winCarNamesArray.push(carNamesArray[index]);
      }
    });
    return winCarNamesArray;
  }

  printWinner(winCarNamesArray) {
    const winCarNamesString = winCarNamesArray.join(', ');

    MissionUtils.Console.print(`최종 우승자 : ${winCarNamesString}`);
  }
}

export default App;
