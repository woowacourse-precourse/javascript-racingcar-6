import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carList = [];
    this.times = 0;
  }

  async userInputCarAndTimes() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const inputCarList = inputCar.split(',');
    for (let i = 0; i < inputCarList.length; i += 1) {
      this.carList.push({
        name: inputCarList[i],
        distance: 0,
      });
    }
    const inputTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.times = inputTimes;
  }

  async play() {
    this.userInputCarAndTimes();
  }
}

export default App;
