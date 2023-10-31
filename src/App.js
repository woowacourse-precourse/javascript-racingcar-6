import { MissionUtils } from '@woowacourse/mission-utils';
import { DEFAULT, LOG, ERROR } from './util/constants.js';

class App {
  async play() {
    const car = this.input(LOG.INPUT_CAR);
    const round = this.input(LOG.INPUT_ROUND);
  }

  async input(log) {
    const readLine = await MissionUtils.Console.readLineAsync(log);

    switch (log) {
      case LOG.INPUT_CAR:
        const arr = readLine.trim().split(',');

        arr.map((value) => {
          if (value.length > DEFAULT.NAME_MAX_LENGTH)
            throw new Error(ERROR.NOT_UNDER_LEN);
        });
        const set = new Set(arr);
        if (set.size !== arr.length) throw new Error(ERROR.NOT_UNIQUE);

        return arr;
      case LOG.INPUT_ROUND:
        if (isNaN(readLine)) throw new Error(ERROR.NOT_NUMBER);
        return Number(readLine.trim());
      default:
        throw new Error(ERROR.NOT_CAR_OR_ROUND);
    }
  }
}

export default App;
