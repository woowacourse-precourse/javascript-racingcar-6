import { Console } from '@woowacourse/mission-utils';
import { GAME } from '../Constant/constants';
import validate from '../utils/validation';

const InputView = {
  async inputName() {
    const name = await Console.readLine(GAME.INPUT_START);
    const nameList = name.split(',');
    await validate.nameValidation(nameList);
    return nameList;
  },

  async inputTry() {
    const num = await Console.readLine(GAME.INPUT_TRY);
    await validate.tryValidation(num);
    return num;
  },
};

export default InputView;
