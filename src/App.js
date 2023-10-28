import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Message';
import { ValidationCheck } from './Validation';
class App {
  async play() {
    const winner = this.carRacingGame();
  }

  // 자동차 경주 시작
  async carRacingGame() {
    try {
      const carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAME);
      ValidationCheck.checkCarNames(carNames);

      const tryNumber = await Console.readLineAsync(
        GAME_MESSAGE.INPUT_TRY_NUMBER,
      );
      ValidationCheck.checkTryNumber(tryNumber);
    } catch (e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
