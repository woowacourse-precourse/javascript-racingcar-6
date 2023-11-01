import { Console } from '@woowacourse/mission-utils';
import INPUTMESSAGE from '../constant/inputMessage.js';

const InputView = {
  inputCarName: () => Console.readLineAsync(INPUTMESSAGE.GAME_START_MESSAGE),
  inputRepeatCount: () => Console.readLineAsync(INPUTMESSAGE.REPEAT_COUNT_MESSAGE),
};

export default InputView;
