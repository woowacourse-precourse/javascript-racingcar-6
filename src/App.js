import { Console } from '@woowacourse/mission-utils';
import { RacingCar } from './RacingCar.js';

class App {
  async play() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArray = carNames.split(',');

    const carObjectArray = carNameArray.map((name) => new RacingCar(name));

    const chanceInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const gameChance = parseInt(chanceInput, 10);

    Console.print('\n실행결과');
    for (let i = 0; i < gameChance; i++) {
      carObjectArray.forEach((car) => {
        car.moveOrStay();
      });
    }
  }
}

export default App;
