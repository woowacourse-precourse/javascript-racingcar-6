import { Console } from '@woowacourse/mission-utils';

const InputView = Object.freeze({
  async readLine(query) {
    const answer = await Console.readLineAsync(query);

    return answer;
  },
});

export default InputView;
