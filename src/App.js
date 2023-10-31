import { Console } from '@woowacourse/mission-utils';
import CustomError from './CustomError';
import RacingGame from './RacingGame';

const PATTERN = Object.freeze({
  word: /^[a-zA-Z가-힣ㄱ-ㅎ]+$/,
  number: /^\d+$/,
});

class App {
  async play() {
    try {
      const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const totalAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      if (!this.isValidCarNames(carNames)) {
        throw new CustomError('[ERROR] ,로 구분하여 2인 이상 이름을 입력해주세요');
      }
      if (!this.isValidTotalAttempts(totalAttempts)) {
        throw new CustomError(ERROR_MESSAGES.invalid_number_of_time);
      }

      const racingGame = new RacingGame(carNames, totalAttempts);
      racingGame.playGame();
    } catch (error) {
      throw new CustomError(`[ERROR] ${error.message}`);
    }
  }

  isValidCarNames(carNames) {
    const names = carNames.split(',');
    if (names.length < 2) {
      throw new CustomError('[ERROR] ,로 구분하여 2인 이상 이름을 입력해주세요');
    }
    return names.every((name) => name.length <= 5 && name.length > 0 && PATTERN.word.test(name));
  }

  isValidTotalAttempts(totalAttempts) {
    if (!PATTERN.number.test(totalAttempts) || totalAttempts < 1 || totalAttempts > 100) {
      throw new CustomError('[ERROR] 1회 이상 100회 이하의 횟수만 가능합니다');
    }
    return true;
  }
}

export default App;