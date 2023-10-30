import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    Console.print('Hello');
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
      setCarList(CAR_NAME, 0);
    }
  }
}

export default App;
