import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const CAR = await Console.readLineAsync('');
    const CAR_LIST = CAR.split(',');

    this.validateContinuousComma(CAR);
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

    let race = CAR_LIST.map((car) => {
      return { name: `${car} : `, score: 0 };
    });

    for (let i = 1; i <= COUNT; i++) {
      race = this.addPointRace(race);

    }

    const MAX_SCORE = Math.max(...race.map((car) => car.score));

    const RESULT = this.calculateMaxScoreCarList(CAR_LIST, race, MAX_SCORE);

    Console.print(`최종 우승자 : ${RESULT.join(', ')}`);
  }

  addPointRace(race) {
    const UPDATE_RACE = race.map((car) => {
      let updateName = car.name;
      let updateScore = car.score;

      if (Random.pickNumberInRange(0, 9) >= 4) {
        updateName += '-';
        updateScore += 1;
      }

      return { name: updateName, score: updateScore };
    });

    return UPDATE_RACE;
  }

  validateCarNameLength(carList) {
    carList.forEach((car) => {
      if (car.length === 0) {
        throw new Error('[ERROR] 자동차 이름을 입력해 주세요');
      }

      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해 주세요.');
      }
    });
  }

  validateCountNumber(count) {
    if (count.length === 0) {
      throw new Error('[ERROR] 시도할 횟수를 입력해 주세요');
    }

    if (count === '0') {
      throw new Error('[ERROR] 시도할 횟수는 1회 이상 입력해 주세요');
    }

    if (/[^1-9]/.test(count)) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
  }

  validateContinuousComma(word) {
    if (/,,+/.test(word)) {
      throw new Error(
        '[ERROR] 쉼표(,)는 자동차 이름 사이에 한번만 입력해 주세요'
      );
    }
  }

  calculateMaxScoreCarList(carList, race, maxScore) {
    const result = carList.filter((car, idx) => race[idx].score === maxScore);
    return result;
  }
}

export default App;
