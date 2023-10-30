import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const CAR = await Console.readLineAsync('');
    const CAR_LIST = CAR.split(',');
    this.validateCarNameLength(CAR_LIST);

    const SCORES = [];
    const RACE = CAR_LIST.map((car) => {
      SCORES.push(0);
      return `${car} : `;
    });

    Console.print('시도할 횟수는 몇 회인가요?');
    const COUNT = await Console.readLineAsync('');
    this.validateCountNumber(COUNT);

    Console.print('');
    Console.print('실행결과');

    for (let i = 1; i <= COUNT; i++) {
      this.addPointRaceAndScores(RACE, SCORES);
    }

    const MAX_SCORE = Math.max(...SCORES);

    const RESULT = this.calculateMaxScoreCarList(CAR_LIST, SCORES, MAX_SCORE);

    Console.print(`최종 우승자 : ${RESULT.join(', ')}`);
  }

  addPointRaceAndScores(race, scores) {
    race.forEach((car, idx) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        race[idx] = `${car}-`;
        scores[idx] += 1;
      }
      Console.print(race[idx]);
    });
    Console.print('');
  }

  validateCarNameLength(carList) {
    carList.forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해 주세요.');
      }
    });
  }

  validateCountNumber(count) {
    if (count === '0') {
      throw new Error('[ERROR] 시도할 횟수는 1회 이상 입력해 주세요');
    }

    if (/[^1-9]/.test(count)) {
      throw new Error('[ERROR] 숫자만 입력이 가능합니다.');
    }
  }

  calculateMaxScoreCarList(carList, scores, maxScore) {
    const result = carList.filter((car, idx) => scores[idx] === maxScore);
    return result;
  }
}

export default App;
