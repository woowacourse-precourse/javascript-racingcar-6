import RacingService from './service/RacingService.js';
import { InputView, OutputView } from './view/index.js';

import MESSAGES from './constants/message.js';
import { SYSTEM_CONFIG } from './constants/system.js';

class App {
  #view = {
    input: InputView,
    output: OutputView,
  };

  async play() {
    await this.#startGame();
  }

  async #startGame() {
    const userNames = await this.#readUserNames();
    const lap = await this.#readTrackLap();
    const { records, winners } = RacingService.getResult(userNames, lap);

    this.#printRecords(records);
    this.#printWinners(winners);
  }

  async #readUserNames() {
    const userNames = await this.#view.input.readLine(MESSAGES.start);
    return userNames.split(SYSTEM_CONFIG.separator);
  }

  async #readTrackLap() {
    this.#view.output.lineBrake();
    const trackLap = await this.#view.input.readLine(MESSAGES.lap);
    return Number(trackLap);
  }

  #printRecords(records) {
    records.forEach((record) => this.#printRecord(record));
  }

  #printRecord(record) {
    this.#view.output.lineBrake();
    Object.entries(record).forEach(([name, skid]) => {
      this.#view.output.print(MESSAGES.record(name, skid));
    });
  }

  #printWinners(winners) {
    this.#view.output.lineBrake();
    this.#view.output.print(MESSAGES.winners(winners));
  }
}

export default App;
