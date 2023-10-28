import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const inputCars = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const overMaxLengthReg = /[^,]{6,}/;
    if (inputCars.match(overMaxLengthReg)) {
      throw new Error('[ERROR] 자동차 이름은 최대 5자까지 가능합니다!');
    }

    const cars = inputCars.split(',');
    if (cars.includes('')) {
      throw new Error('[ERROR] 자동차 이름은 최소 1자 이상 적어주세요!');
    } else if (cars.length !== new Set(cars).size) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다!');
    } else if (cars.length === 1) {
      throw new Error(
        '[ERROR] 참여자가 한 명뿐이라 경주가 열리지 않았습니다..🤔',
      );
    }
  }
}

export default App;
