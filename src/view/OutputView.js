import { MESSAGE } from "../utils/constants.js";
import { printMessage } from "../utils/index.js";

const { OUTPUT_RESULT, OUTPUT_WINNER } = MESSAGE;

class OutputView {
  printResultStatus(status) {
    printMessage(OUTPUT_RESULT);

    for (let i = 0; i < status.length; i++) {
      const result = status[i];

      const drivingMessages = this.generateResultMessage(result);

      printMessage(`${drivingMessages.join("\n")}\n`);
    }
  }

  printWinner(winners) {
    printMessage(`${OUTPUT_WINNER}${winners.join(", ")}`);
  }

  generateResultMessage(result) {
    return result.map(({ name, distance }) => `${name} : ${"-".repeat(distance)}`);
  }
}

export default OutputView;
