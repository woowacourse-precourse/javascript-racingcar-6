import View from "../core/View.js";
import { MESSAGE, STATE_KEY } from "../utils/constants.js";
import { printMessage } from "../utils/index.js";

const { OUTPUT_WINNER } = MESSAGE;

class OutputWinnerView extends View {
  constructor({ model }) {
    super({ model });
  }

  print() {
    const { winners } = this.model.get(STATE_KEY.GAME);

    if (!winners.length) {
      return;
    }

    printMessage(`${OUTPUT_WINNER}${winners.join(", ")}`);
  }
}

export default OutputWinnerView;