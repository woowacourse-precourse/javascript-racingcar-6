import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constants.js';
import Validation from '../validation/Validation.js';

class InputView {
  constructor() {}

  // 사용자가 차이름을 입력
  async askCarName() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.inputCarNames
    );
    Validation.validateCarNameInput(CAR_NAMES_INPUT);
    return CAR_NAMES_INPUT;
  }

  // 사용자가 시도할 횟수를 입력
  async askAttemptCount() {
    const ATTEMPT_COUNT_INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.inputAttemptCount
    );
    Validation.validateAttemptCountInput(ATTEMPT_COUNT_INPUT);
    return ATTEMPT_COUNT_INPUT;
  }
}
export default InputView;
