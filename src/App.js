import { Console } from '@woowacourse/mission-utils';
import * as error from './Error.js';

class App {
  async play() {
    await this.getRacingCarName();
  }

  async getRacingCarName() {
    try {
      let racingCar = new Map();

      const racingCarNameInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      racingCarNameInput.split(',').forEach((name) => {
        racingCar.set(name, 0);
      });

      this.checkRacingCarNameInputError(racingCar);

      console.log(racingCar);
    } catch (error) {
      throw error;
    }
  }

  async checkRacingCarNameInputError(racingCar) {
    racingCar.forEach((value, key) => {
      if (key === '') throw Error(error.INPUT_NULL_ERROR_MESSAGE);
      if (key.length > 5) throw Error(error.INPUT_OVER_LENGTH_ERROR_MESSAGE);
    });
  }
}

export default App;
