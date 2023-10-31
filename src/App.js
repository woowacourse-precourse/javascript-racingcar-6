import { Console } from '@woowacourse/mission-utils';

class App {
  getCarName = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const cars = input.split(',').map((v) => v.trim());
    return cars;
  };

  getAttempts = async () => {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  };

  async play() {
    const car = await this.getCarName();
    const attempt = await this.getAttempts();
  }
}

export default App;
