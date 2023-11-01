import OutputView from '../views/OutPutView.js';
import Distance from './Distance.js';
import { pickRandomNumber } from '../utils/PickRandomNumber.js';
import { SETTINGS, SYMBOLS } from '../constants/index.js';

class Race {
  #outputView = OutputView;

  #fuel;

  #distance = new Distance();

  racing(distanceBoard, laps) {
    while (laps) {
      this.#drive(distanceBoard);
      this.#outputView.print(SYMBOLS.whiteSpace);
      laps--;
    }

    return this.#distance.sortBoard(distanceBoard);
  }

  #drive(distanceBoard) {
    distanceBoard.forEach((distance) => {
      this.#gasStation();
      this.#getFuel(distance);
    });

    return this.#distance.showBoard(distanceBoard);
  }

  #gasStation() {
    this.#fuel = pickRandomNumber();
  }

  #getFuel(distance) {
    if (this.#fuel >= SETTINGS.refuelStandard) {
      distance[1] += SETTINGS.progress;
    }
  }
}

export default Race;
