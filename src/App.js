import { Console } from '@woowacourse/mission-utils';

class App {
  getCarName = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const cars = input.split(',').map((v) => v.trim());
    return cars;
  };

  async play() {
    const car = await this.getCarName();
  }
}

export default App;
