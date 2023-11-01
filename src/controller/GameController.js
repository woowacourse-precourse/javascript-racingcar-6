import InputView from '../views/InputView.js';
import OutputView from '../views/OutPutView.js';
import Race from '../models/Race.js';
import Award from '../models/Award.js';
import Distance from '../models/Distance.js';

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

    await this.#start();
  }

  async #start() {
    this.#outputView.print('실행결과');
    this.distanceBoard = this.#race.racing(this.distanceBoard, this.laps);
    this.#end();
  }

  #end() {
    this.#winner = this.#award.getWinners(this.distanceBoard);
    console.log(this.#winner);
  }
}

export default GameController;
