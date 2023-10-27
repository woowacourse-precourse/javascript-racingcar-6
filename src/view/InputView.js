import { Console } from '@woowacourse/mission-utils';

const InputView = Object.freeze({
  async readRacingCarNames() {
    const racingCarInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return racingCarInput;
  },

  async readMoveAttemptNumber() {
    const moveAttemptInput = await Console.readLineAsync('시도할 횟수는 몇 회 인가요?\n');
    return moveAttemptInput;
  },
});

export default InputView;
