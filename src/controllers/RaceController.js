import { Console } from '@woowacourse/mission-utils';
import Car from '../models/Car.js';
import Track from '../models/Track.js';
class RaceController {
  #race;
  #round;

  async raceSet() {
    const carNameList = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = carNameList.split(',');
    const cars = carNames.map((carName) => new Car(carName));
    this.#race = new Track(cars);
    this.#round = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default RaceController;
