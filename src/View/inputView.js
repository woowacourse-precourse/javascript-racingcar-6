import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../Constant/constants';
import validate from '../utils/validation';

const InputView = {
  // 자동차 이름 입력
  async inputName() {
    const name = await Console.readLineAsync(GAME.INPUT_START);
    const nameList = name.split(',');
    await validate.nameValidation(nameList);
    return nameList;
  },
  // 시도 횟수 입력
  async inputTry() {
    const num = await Console.readLineAsync(GAME.INPUT_TRY);
    await validate.tryValidation(num);
    return num;
  },
};

export default InputView;
