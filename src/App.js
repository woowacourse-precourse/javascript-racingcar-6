import { Console } from '@woowacourse/mission-utils';
import { handleInputName, handleInputRound } from './utils/HandleInput';
import { findWinner, pickRandomtoGo } from './utils/CalLogic';
import {
  handleOutputGame,
  handleOutputRound,
  parseCarResult,
} from './utils/HandleOutput';
class App {
  async play() {
    Console.print('자동차 경주를 시작합니다.');
    const CAR_LIST = await handleInputName();
    this.inputCarName(CAR_LIST);

    const GAME_ROUND = await handleInputRound();
    for (let i = 0; i < GAME_ROUND; i++) {
      const RESULT_ARRAY = this.Runround();
      handleOutputRound(RESULT_ARRAY);
    }
    const GAME_RESULT = findWinner(this.CAR_LISTMAP);
    handleOutputGame(GAME_RESULT);
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
    const TEMP_RESULT = [];
    for (const key of this.CAR_LISTMAP.keys()) {
      if (pickRandomtoGo()) {
        this.goForward(key);
      }
      const PARSE_RESULT = parseCarResult(key, this.CAR_LISTMAP.get(key));
      TEMP_RESULT.push(PARSE_RESULT);
    }
    return TEMP_RESULT;
  }
}

export default App;
