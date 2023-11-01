import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

const InputManager = {
  async inputParticipants() {
    const carString = await Console.readLineAsync(`${MESSAGE.GET_CAR_NAME}\n`);
    const carList = carString.split(',');

    return carList;
  },
  async inputTryCount() {
    const tryString = await Console.readLineAsync(`${MESSAGE.GET_TRY_COUNT}\n`);

    return Number(tryString);
  },
};

export default InputManager;
