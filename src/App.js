import {MissionUtils, Console} from '@woowacourse/mission-utils';

class App {
  async play() {
    const CARS = await this.getCarNames();
    const MOVING_COUNT = await this.getMovingCount();

    Console.print('\n실행 결과');

    let CURRENT_CARS = CARS;
    for (let i = 0; i < MOVING_COUNT; i++) {
      CURRENT_CARS = this.moveCars(CURRENT_CARS);
      this.printCurrentCarPosition(CURRENT_CARS);
    }

    const WINNERS = this.getWinners(CURRENT_CARS);
    this.printWinners(WINNERS);
  }

  /**
   * 쉼표(,)를 기준으로 구분하여, 자동차의 이름을 입력받습니다
   * @throw 5자 초과 or 중복 이름이 있으면 예외
   * @return {{name: string, position: number}[]} 자동차 초기 상태 배열 */
  async getCarNames() {
    const USER_INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const CAR_NAMES = USER_INPUT.split(',');

    if (CAR_NAMES.some((carName) => carName.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }

    if (CAR_NAMES.some((carName, index) => CAR_NAMES.indexOf(carName) !== index)) {
      throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
    }

    return CAR_NAMES.map((carName) => ({name: carName, position: 0}));
  }

  /**
   * 이동 횟수를 입력받습니다
   * @throw 숫자가 아닌 경우, 0 이하의 숫자 일 경우 예외
   * @return {number} 이동 횟수 */
  async getMovingCount() {
    const USER_INPUT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const RESULT = Number(USER_INPUT);

    if (isNaN(RESULT)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    if (RESULT <= 0) {
      throw new Error('[ERROR] 숫자는 1 이상 입력해야 합니다.');
    }

    return RESULT;
  }

  /**
   * 자동차 전진 여부를 반환합니다. 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진
   * @return {boolean} 전진 조건을 만족하면 true, 아니면 false */
  isMovingForward() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    return RANDOM_NUMBER >= 4;
  }

  /**
   * 자동차의 위치를 전진시킵니다
   * @param {{name: string, position: number}[]} cars 자동차의 위치를 전진시킬 자동차 배열
   * @return {{name: string, position: number}[]} 전진시킨 자동차 배열 */
  moveCars(cars) {
    return cars.map((car) => {
      if (this.isMovingForward()) {
        car.position++;
      }

      return car;
    });
  }

  /**
   * 자동차의 이름과 현재 위치를 출력합니다
   * @param {{name: string, position: number}[]} cars 현재 자동차 배열 */
  printCurrentCarPosition(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }

  /**
   * 자동차 경주 게임을 완료한 후, 우승한 자동차 배열을 반환합니다
   * @param {{name: string, position: number}[]} cars 현재 자동차 배열
   * @return {{name: string, position: number}[]} 우승한 자동차 배열 */
  getWinners(cars) {
    const MAX_POSITION = Math.max(...cars.map((car) => car.position));
    return cars.filter((car) => car.position === MAX_POSITION);
  }

  /**
   * 우승한 자동차 이름을 출력합니다
   * @param {{name: string, position: number}[]} winners 우승한 자동차 배열 */
  printWinners(winners) {
    const WINNER_NAMES = winners.map((winner) => winner.name).join(', ');
    Console.print(`최종 우승자 : ${WINNER_NAMES}`);
  }
}

export default App;
