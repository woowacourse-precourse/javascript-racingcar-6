import { Console, Random } from '@woowacourse/mission-utils';
import { errorMessages, promptMessages } from './GameMessage';

class App {

  // 자동차 이름 입력
  async setCarNames() {
    const inputCarNames = await Console.readLineAsync(promptMessages.carName);
    const carNames = inputCarNames.replace(/\s/g, '').split(',');
    this.validateCars(carNames);
    return carNames.reduce((acc, value) => {
      acc[value] = 0;
      return acc;
    }, {});
  }

  // 자동차 유효성 검사 
  validateCars(carNames) {
    const raceCarNames = new Set();

    if (carNames.some(name => name === '' || name.length > 5 || raceCarNames.has(name)) ||carNames.length < 2 ) {
      throw new Error(
        carNames.length < 2 ? errorMessages.insufficientCarCount :
        carNames.some(name => name === '') ? errorMessages.invalidCarNameFormat :
        carNames.some(name => name.length > 5) ? errorMessages.carNameMaxLengthExceeded :
        errorMessages.duplicateCarName
      );
    }

    carNames.forEach(name => raceCarNames.add(name));
}

 // 시도 횟수 입력
  async inputTryCount() {
    let raceTryCount;
    while (true) {
      const inputTryCount = await Console.readLineAsync(promptMessages.tryCount);
      raceTryCount = Number(inputTryCount);

      if (!inputTryCount.trim() || isNaN(raceTryCount) || raceTryCount <= 0) {
        Console.print(errorMessages.invalidTryCount);
      } else {
        break;
      }
    }

    return raceTryCount;
  }


  // 0-9 사이의 숫자를 무작위로 선택
  tryRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  // 4 이상일 경우 전진
  moveRacing(carName, score, racingCars) {
    const moveCount = 4;
    if (this.tryRandomNum() >= moveCount) {
      racingCars[carName] = score + 1;
    }
  }

 // 게임 턴마다 '-' 표시
  printMarkingRound(racingCars) {
    for (const [carName, score] of Object.entries(racingCars)) {
      const hyphens = '-'.repeat(score);
      Console.print(`${carName} : ${hyphens}`);
    }
    Console.print('');
  }

  // 게임 결과 
  gameResult(racingCars, tryCount) {
    for (let round = 0; round < tryCount; round++) {
      Object.entries(racingCars).forEach(([carName, score]) => {
        this.moveRacing(carName, score, racingCars);
      });

      this.printMarkingRound(racingCars);
    }
  }
 // 게임 우승 출력
  getFinalWinners(racingCars) {
    const maxScore = Math.max(...Object.values(racingCars));
    const winners = Object.entries(racingCars)
      .filter(([_, score]) => score === maxScore)
      .map(([carName]) => carName);

    return winners;
}

// 우승자 출력
  async play() {
    const carNames = await this.setCarNames();
    const tryCount = await this.inputTryCount();
    Console.print(promptMessages.gameResult);
    this.gameResult(carNames, tryCount);

    const winners = this.getFinalWinners(carNames);
    Console.print(`${promptMessages.finalWinner} ${winners.join(', ')}`);
  }


}



export default App;