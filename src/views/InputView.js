import { Console } from '@woowacourse/mission-utils';
import { Messages } from '../constants/Messages.js';

const InputView = {
  async inputCarNames() {
    const carNamesInput = await Console.readLineAsync(Messages.INPUT_CAR_NAMES);

    const carNames = carNamesInput.split(',');

    InputView.validateCarNames(carNames);

    return carNames;
  },

  validateCarNames(carNames) {
    const isAllCarNamesValid = carNames.every((carName) => carName.length <= 5);

    if (!isAllCarNamesValid) {
      throw new Error('자동차의 이름은 5글자 이하여야 합니다.');
    }
  },

  async inputRaceRounds() {
    const roundInput = await Console.readLineAsync(Messages.INPUT_TRACK_ROUNDS);
    const raceRound = Number(roundInput);

    InputView.validateRaceRound(raceRound);

    return raceRound;
  },

  validateRaceRound(round) {
    if (!Number.isInteger(round)) {
      throw new Error('정수값을 입력해주세요.');
    }
    if (round <= 0) {
      throw new Error('0보다 큰 숫자를 입력해주세요.');
    }
  },
};

export default InputView;
