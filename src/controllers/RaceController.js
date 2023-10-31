import { Console } from '@woowacourse/mission-utils';
import Car from '../models/Car.js';
import Track from '../models/Track.js';
class RaceController {
  /** @type {Track} */
  #race;

  /**  @type {number} */
  #round;

  async raceSet() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = carNamesInput.split(',');
    const cars = carNames.map((carName) => new Car(carName));
    this.#race = new Track(cars);
    const roundInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#round = Number(roundInput);
  }

  startRace() {
    Console.print('');
    Console.print('실행 결과');

    Array.from({ length: this.#round }).forEach(() => {
      this.#race.moveCarsCheckCondition();

      const roundResults = this.#race.getCars().map((car) => {
        const currentStage = '-'.repeat(car.getCarDistance());
        return `${car.getCarName()} : ${currentStage}`;
      });

      roundResults.forEach((result) => Console.print(result));

      Console.print('');
    });
  }
}

export default RaceController;
