import { Console } from '@woowacourse/mission-utils';
import validate from './Validate.js';
class App {
  async play() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)기준으로 구분): ',
    );
    validate.carName(userInput);

    Console.print(userInput.split(','));
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
