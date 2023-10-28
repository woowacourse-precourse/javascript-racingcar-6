import { Console } from '@woowacourse/mission-utils';
import validate from './Validate.js';
class App {
  async play() {
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)기준으로 구분)',
    );
    validate.carName(inputCarName);

    const inputPlayCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?',
    );
    validate.playCount(inputPlayCount);
  }

  createRaceCars(userInput) {
    const cars = [];
    userInput
      .split(',')
      .forEach(car => cars.push({ name: car, result: [], textResult: '' }));
    return cars;
  }
}

export default App;
