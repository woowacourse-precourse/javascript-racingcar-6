import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, USER_ERROR_MESSAGE } from './constants/message.js';

export default class User {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  setState(nextState) {
    this.validationState(nextState);
    this.state = nextState;
  }

  async promptCarNames() {
    const userInput = await Console.readLineAsync(MESSAGE.CAR_NAME);
    const carList = userInput.split(',');
    this.setState({ ...this.state, carList });
  }

  validationState(nextState) {
    const { playNumber, carList } = nextState;

    if (typeof playNumber !== 'number' || Number.isNaN(playNumber)) {
      throw new Error(USER_ERROR_MESSAGE.NUMBER);
    }

    if (!Array.isArray(carList)) {
      throw new Error(USER_ERROR_MESSAGE.ARRAY);
    }

    carList.forEach((name) => {
      if (name.length > 5 || name === '') {
        throw new Error(USER_ERROR_MESSAGE.NAME);
      }
    });
  }
}
