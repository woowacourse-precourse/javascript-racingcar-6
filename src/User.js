import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from './constants/message.js';

export default class User {
  constructor({ initialState }) {
    this.validateinitialState(initialState);
    this.state = initialState;
  }

  setState(nextState) {
    this.state = nextState;
  }

  async promptCarNames() {
    const userInput = await Console.readLineAsync(MESSAGE.CAR_NAME);
    const carList = userInput.split(',');
    this.validateCarList(carList);
    this.setState({ ...this.state, carList });
  }

  async promptPlayNumber() {
    const playNumber = Number(await Console.readLineAsync(MESSAGE.PLAY_NUMBER));
    this.validatePlayNumber(playNumber);
    this.setState({ ...this.state, playNumber });
  }

  validateinitialState(initialState) {
    const { carList, playNumber } = initialState;

    if (typeof playNumber !== 'number' || Number.isNaN(playNumber)) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }

    if (!Array.isArray(carList)) {
      throw new Error(ERROR_MESSAGE.ARRAY);
    }

    carList.forEach((name) => {
      if (name.length > 5 || name === '') {
        throw new Error(ERROR_MESSAGE.NAME);
      }
    });
  }

  validateCarList(carList) {
    if (!Array.isArray(carList)) {
      throw new Error(ERROR_MESSAGE.ARRAY);
    }

    carList.forEach((name) => {
      if (name.length > 5 || name === '') {
        throw new Error(ERROR_MESSAGE.NAME);
      }
    });
  }

  validatePlayNumber(playNumber) {
    if (
      typeof playNumber !== 'number' ||
      Number.isNaN(playNumber) ||
      playNumber <= 0
    ) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
  }
}
