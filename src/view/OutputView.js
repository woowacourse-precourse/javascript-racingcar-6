import { MESSAGE, STATE_KEY } from "../utils/constants.js";
import { printMessage } from "../utils/index.js";

const { OUTPUT_RESULT, OUTPUT_WINNER } = MESSAGE;

class OutputView {
  constructor({ model }) {
    this.model = model;
    this.model.subscribe(STATE_KEY.GAME, this.print.bind(this));
  }

  print() {
    this.printStatus();
    this.printWinner();
  }

  printStatus() {
    const { currentTryCount, winners, cars } = this.model.get(STATE_KEY.GAME);

    if (winners.length) {
      return;
    }

    if (currentTryCount === 1) {
      printMessage(OUTPUT_RESULT);
    }

    const drivingMessages = this.generateDrivingMessage(cars);

    printMessage(`${drivingMessages.join("\n")}\n`);
  }

  printWinner() {
    const { winners } = this.model.get(STATE_KEY.GAME);

    if (!winners.length) {
      return;
    }

    printMessage(`${OUTPUT_WINNER}${winners.join(", ")}`);
  }

  generateDrivingMessage(cars) {
    return cars.map(({ name, distance }) => `${name} : ${"-".repeat(distance)}`);
  }
}

export default OutputView;
