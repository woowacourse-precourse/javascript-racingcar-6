import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants';
import { validateNames, validateTryCount } from '../utils/validateInput';

const inputFormat = async (userInput, validate) => {
  const input = await userInput();
  validate(input);
  return input;
};

const InputView = {
  carNames: async () => {
    const names = await inputFormat(
      async () => Console.readLineAsync(INPUT_MESSAGE.NAMES),
      validateNames,
    );
    return names.split(',');
  },
  tryCount: async () => {
    const tryCount = await inputFormat(
      async () => Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT),
      validateTryCount,
    );
    return Number(tryCount);
  },
};

export default InputView;
