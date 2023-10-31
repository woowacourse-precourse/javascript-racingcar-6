import { Console, Random } from '@woowacourse/mission-utils';
import { handleInputName, handleInputRound } from './utils/HandleInput';
import { pickRandomtoGo } from './utils/CalLogic';

class App {
  async play() {
    Console.print('자동차 경주를 시작합니다.');
    const CAR_LIST = await handleInputName();
    this.inputCarName(CAR_LIST);
    const GAME_ROUND = await handleInputRound();
    for (let i = 0; i < GAME_ROUND; i++) {
      this.Runround();
    }
  }

  constructor() {
    this.CAR_LISTMAP = new Map();
  }

  setCarList(name, distance) {
    this.CAR_LISTMAP.set(name, distance);
  }

  goForward(name) {
    this.CAR_LISTMAP.set(name, this.CAR_LISTMAP.get(name) + 1);
  }

  inputCarName(carlist) {
    for (let CAR_NAME of carlist) {
      this.setCarList(CAR_NAME, 0);
    }
  }

  Runround() {
    for (const [key, value] of this.CAR_LISTMAP) {
      if (pickRandomtoGo()) {
        this.goForward(key);
      }
    }
  }
}

export default App;
