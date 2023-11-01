import Observer from "../core/Observer.js";
import { STATE_KEY } from "../utils/constants.js";

class GameModel extends Observer {
  name = STATE_KEY.GAME;

  constructor() {
    super();
  }

  initData({ carNames, tryCount }) {
    const cars = carNames.map((carName) => ({ name: carName, distance: 0 }));

    this.init(STATE_KEY.GAME, { cars, tryCount, winners: [], currentTryCount: 0 });
  }

  setData(state) {
    const prev = this.get(STATE_KEY.GAME);

    this.set(STATE_KEY.GAME, { ...prev, ...state });
  }

  getData() {
    return this.get(STATE_KEY.GAME);
  }
}

export default GameModel;