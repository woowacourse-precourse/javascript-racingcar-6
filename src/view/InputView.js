import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants';
import { validateCarNames, validateTryCount } from '../utils/validateInput';

const getInputWithValidate = async (userInput, validate) => {
  // 유저 입력을 받아서 유효성 검사를 하는 함수 형태 정의
  const input = await userInput();
  validate(input);
  return input;
};

const InputView = {
  carNames: async () => {
    const names = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.NAMES),
      validateCarNames,
    );
    return names.split(',');
  },
  tryCount: async () => {
    const tryCount = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT),
      validateTryCount,
    );
    return Number(tryCount);
  },
};

export default InputView;
