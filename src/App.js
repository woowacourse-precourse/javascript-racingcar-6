import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.gameStatus = true;
  }

  async play() {
    while (this.gameStatus) {
      const cars = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      let cars = this.checkCarsValidation(cars);
    }
  }

  checkCarsValidation(cars) {
    const cars = cars.split(',');
    for (let i = 0; i < cars.length; i++) {
      const carName = cars[i].trim();
      if (carName.length > 5) {
        throw Error('[ERROR] 이름은 다섯자 이하만 가능합니다.');
      } else if (typeof carName !== 'string') {
        throw Error('[ERROR] 문자로 입력해주세요');
      } else if (carName === null) {
        throw Error('[ERROR] 경주할 자동차 이름을 입력해주세요');
      }
    }
    return cars;
  }
}

export default App;
