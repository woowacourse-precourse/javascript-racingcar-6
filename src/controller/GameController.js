import InputView from '../views/InputView.js';
import OutputView from '../views/OutPutView.js';
import Race from '../models/Race.js';
import Award from '../models/Award.js';
import Distance from '../models/Distance.js';
import { GUIDE_MESSAGE } from '../constants/index.js';

class GameController {
  #outputView = OutputView;

  #inputView = InputView;

  #race = new Race();

  #award = new Award();

  #winner;

  constructor(distanceBoard, laps) {
    this.distanceBoard = distanceBoard;
    this.laps = laps;
  }

  async ready() {
    this.distanceBoard = Distance.setGameBoard(await this.#inputView.setCarNames());
    this.laps = await this.#inputView.setLaps();

    this.#start();
  }

  async #start() {
    this.#outputView.print(GUIDE_MESSAGE.result);
    this.distanceBoard = this.#race.racing(this.distanceBoard, this.laps);
    this.#end();
  }

  #end() {
    this.#winner = this.#award.getWinners(this.distanceBoard);
    this.#outputView.print(GUIDE_MESSAGE.finalWinner(this.#winner));
  }
}

export default GameController;
