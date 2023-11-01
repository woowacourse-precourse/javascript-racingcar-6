import RacingService from './service/RacingService.js';
import { InputView, OutputView } from './view/index.js';

import MESSAGES from './constants/message.js';
import { SYSTEM_CONFIG } from './constants/system.js';

/**
 * @typedef {import('./service/RacingService.js').RacingRecord} RacingRecord
 */

class App {
  #view = {
    input: InputView,
    output: OutputView,
  };

  #service = RacingService;

  async play() {
    await this.#startGame();
  }

  async #startGame() {
    const userNames = await this.#readUserNames();
    const lap = await this.#readTrackLap();
    const { records, winners } = this.#service.getResult(userNames, lap);

    this.#printRecords(records);
    this.#printWinners(winners);
  }

  /**
   * 경기에 참가할 User의 이름 목록을 읽어옵니다.
   * @async
   * @private
   * @returns {Promise<string[]>} 사용자 이름 배열
   */
  async #readUserNames() {
    const userNames = await this.#view.input.readLine(MESSAGES.start);

    return userNames.split(SYSTEM_CONFIG.separator);
  }

  /**
   * Track의 랩 수를 읽어옵니다.
   * @async
   * @private
   * @returns {Promise<number>} 트랙 랩 수
   */
  async #readTrackLap() {
    const trackLap = await this.#view.input.readLine(MESSAGES.lap);

    return Number(trackLap);
  }

  /**
   * @private
   * @param {RacingRecord[]} records 트랙 경기 기록 목록
   */
  #printRecords(records) {
    records.forEach((record) => this.#printRecord(record));
  }

  /**
   * @private
   * @param {RacingRecord} record 트랙 경기 기록
   */
  #printRecord(record) {
    this.#view.output.lineBreak();
    Object.entries(record).forEach(([name, skid]) => {
      this.#view.output.print(MESSAGES.record(name, skid));
    });
  }

  /**
   * @private
   * @param {string[]} winners 트랙 우승자 목록
   */
  #printWinners(winners) {
    this.#view.output.print(MESSAGES.winners(winners));
  }
}

export default App;
