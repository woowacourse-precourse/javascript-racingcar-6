import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      const CAR_NAMES = await this.getInputCarName();
      const ATTEMPT_COUNT = await this.getAttemptCount();

      this.cars = CAR_NAMES.map((name) => ({ name: name, score: '' }));

      MissionUtils.Console.print('실행 결과');

      for (let i = 0; i < ATTEMPT_COUNT; i++) {
        this.cars = this.playGame();
        this.printResult();
      }

      this.printWinner();
    } catch (error) {
      throw error;
    }
  }

  // 자동차 이름 입력
  async getInputCarName() {
    const INPUT_CAR_NAME = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): '
    );
    const CARS = INPUT_CAR_NAME.split(',');

    const trimmedCarNames = CARS.map((name) => name.trim());

    const uniqueCarNames = Array.from(new Set(trimmedCarNames));

    if (uniqueCarNames.length !== trimmedCarNames.length) {
      throw new Error('[ERROR] 중복된 이름이 있습니다.');
    }

    for (const name of trimmedCarNames) {
      if (name.length === 0 || name.length > 5) {
        throw new Error('[ERROR] 이름은 1자 이상, 5자 이하로 입력해야 합니다.');
      }
    }

    return trimmedCarNames;
  }

  // 시도 횟수 입력
  async getAttemptCount() {
    const attemptCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );

    const numAttemptCount = Number(attemptCount);

    if (isNaN(numAttemptCount) || numAttemptCount <= 0) {
      throw new Error('[ERROR] 시도 횟수는 0보다 큰 양수여야 합니다.');
    }

    return numAttemptCount;
  }

  // 랜덤 숫자 생성
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  // 게임 1회를 진행하는 메서드
  playGame() {
    return this.cars.map((car) => {
      const randomNumber = this.getRandomNumber();
      if (randomNumber >= 4) {
        return { name: car.name, score: car.score + '-' };
      } else {
        return { name: car.name, score: car.score };
      }
    });
  }

  // 결과 출력
  printResult() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.score}`);
    });
    MissionUtils.Console.print(`\n`);
  }
  // 우승자 판별
  getWinners() {
    let maxScore = Math.max(...this.cars.map((car) => car.score.length));
    return this.cars
      .filter((car) => car.score.length === maxScore)
      .map((car) => car.name);
  }

  // 우승자 출력
  printWinner() {
    const winners = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}
`);
  }
}

export default App;
