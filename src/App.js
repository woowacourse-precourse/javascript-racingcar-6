import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const car_names = await this.inputCarName();
    Console.print(car_names.split(','));
  }

  async inputCarName() {
    const car_names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return car_names;
  }
}

export default App;
