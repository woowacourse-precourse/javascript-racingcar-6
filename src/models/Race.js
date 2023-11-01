import OutputView from '../views/OutPutView.js';
import Distance from './Distance.js';
import { pickRandomNumber } from '../utils/PickRandomNumber.js';

class Race {
  #outputView = OutputView;

  #fuel;

  #distance = new Distance();

  racing(distanceBoard, laps) {
    while (laps) {
      this.#drive(distanceBoard);
      this.#outputView.print('\n');
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
    if (this.#fuel >= 4) {
      distance[1] += 1;
    }
  }
}

export default Race;
