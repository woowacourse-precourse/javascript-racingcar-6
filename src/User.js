import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/message.js';

export default class User {
  constructor({ initialState }) {
    this.state = initialState;
  }

  setState(nextState) {
    this.state = nextState;
  }

  async promptCarNames() {
    const userInput = await Console.readLineAsync(MESSAGE.START);
    const carList = userInput.split(',');
    this.setState({ ...this.state, carList });
  }
}
