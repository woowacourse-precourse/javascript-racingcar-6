import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_CAR_NAMES_MSG =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const INPUT_ATTEMPT_TIMES_MSG = '시도할 횟수는 몇 회인가요?';
const INPUT_ERROR_MSG = '[ERROR] 입력 받는 도중 에러가 발생했습니다.';

class App {
  async getCarNameArr() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        INPUT_CAR_NAMES_MSG
      );
      const carNameArr = carNames.split(',');
      return carNameArr;
    } catch (error) {
      MissionUtils.Console.print(INPUT_ERROR_MSG, error);
      return [];
    }
  }

  async getAttemptTimes() {
    try {
      const attemptTimes = Number(
        await MissionUtils.Console.readLineAsync(INPUT_ATTEMPT_TIMES_MSG)
      );
      if (Number.isNaN(attemptTimes)) {
        throw new Error(INPUT_ERROR_MSG, error);
      }
      return attemptTimes;
    } catch (error) {
      throw new Error(INPUT_ERROR_MSG, error);
    }
  }

  async play() {
    const carNameArr = await this.getCarNameArr();
    const attemptTimes = await this.getAttemptTimes();
  }
}

export default App;
