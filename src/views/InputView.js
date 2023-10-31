import { Console } from '@woowacourse/mission-utils';
import { Messages, ErrorMessages } from '../constants/Messages.js';
import AppError from '../errors/AppError.js';

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
      throw new AppError(ErrorMessages.CAR_NAME_LENGTH_LIMIT);
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
      throw new AppError(ErrorMessages.RACE_ROUND_INTEGER);
    }
    if (round <= 0) {
      throw new AppError(ErrorMessages.RACE_ROUND_POSITIVE);
    }
  },
};

export default InputView;
