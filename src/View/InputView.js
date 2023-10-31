import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async inputLine(message) {
    return await Console.readLineAsync(message);
  },
};

export default InputView;
