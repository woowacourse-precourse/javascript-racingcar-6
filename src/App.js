import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('자동차 경주를 시작합니다.');
    const CAR_STRING = await this.handleInputName();
    this.inputCarName(CAR_STRING);
  }

  constructor() {
    this.CAR_LISTMAP = new Map();
  }

  setCarList(name, distance) {
    this.CAR_LISTMAP.set(name, distance);
  }

  inputCarName(carlist) {
    const CAR_LIST = carlist.split(',');
    for (let CAR_NAME of CAR_LIST) {
      this.setCarList(CAR_NAME, 0);
    }
  }

  async handleInputName() {
    const CAR_STRING = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ',
    );
    this.validateString(CAR_STRING);
    return CAR_STRING;
  }

  validateString(carstring) {
    const CAR_SPLIT = carstring.split(',');
    const set = new Set();
    for (let CAR of CAR_SPLIT) {
      if (CAR.match(/\./)) {
        throw new Error('[ERROR] : 자동차 이름은 쉼표로 구분하여야 합니다.');
      }
      if (CAR.length > 5) {
        throw new Error('[ERROR] :  자동차 이름은 5자 이하여야 합니다.');
      }
      if (set.has(CAR)) {
        throw new Error('[ERROR] : 중복된 이름은 사용할 수 없습니다.');
      } else {
        set.add(CAR);
      }
    }
    return true;
  }
}

export default App;
