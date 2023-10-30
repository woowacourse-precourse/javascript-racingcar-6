import { Console } from '@woowacourse/mission-utils';
import { RacingCar } from './RacingCar.js'

class App {
  async play() {

    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNameArray = carNames.split(',');

    const carObjectArray = carNameArray.map((name) => new RacingCar(name));

  }
}

export default App;
