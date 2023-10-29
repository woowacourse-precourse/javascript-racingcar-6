import { Console } from '@woowacourse/mission-utils';
import validate from './Validate.js';
import race from './Race.js';

class App {
  async play() {
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)기준으로 구분)\n',
    );
    validate.carName(inputCarName);

    const inputPlayCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );
    validate.playCount(inputPlayCount);

    const cars = race.createRaceCars(inputCarName);
    race.playRace(cars, inputPlayCount);

    Console.print(cars);
    Console.print(`최종 우승자 : ${race.winner(cars)}`);
  }
}

export default App;
