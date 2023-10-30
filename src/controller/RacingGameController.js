import inputView from '../view/inputView.js';

class RacingGameController {
  /** 레이싱 경주 시작 함수 */
  async start() {
    /** @type {string} 자동차 이름 */
    const carNames = await inputView.readCarNames();
  }
}

export default RacingGameController;
