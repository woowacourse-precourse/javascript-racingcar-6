import View from "../core/View.js";
import { MESSAGE, STATE_KEY } from "../utils/constants.js";
import { printMessage } from "../utils/index.js";

const { OUTPUT_RESULT } = MESSAGE;

class OutputStatusView extends View {
  constructor({ model }) {
    super({ model });
  }

  print() {
    const { currentTryCount, winners, cars } = this.model.get(STATE_KEY.GAME);

    if (winners.length) {
      return;
    }

    if (currentTryCount === 1) {
      printMessage(OUTPUT_RESULT);
    }

    const drivingMessages = cars.map(({ name, distance }) => `${name} : ${"-".repeat(distance)}`);

    printMessage(`${drivingMessages.join("\n")}\n`);
  }
}

export default OutputStatusView;