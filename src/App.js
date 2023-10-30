import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.getCarName();
  }

  async getCarName() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ',
    );
    const carArr = userInput.trim().split(',');

    for (const carName of carArr) {
      Console.print(carName);
    }
  }
}

export default App;
