import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {}

  // 자동차 이름 입력받기
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNamesArr = carNames.split(',');
    carNamesArr.forEach((carName) => this.validateCarName(carName));

    return carNamesArr;
  }
}

export default App;
