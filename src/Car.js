import { ERROR_MESSAGE } from './constants/message.js';

export default class Car {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  setState(nextState) {
    this.validationState(nextState);
    this.state = nextState;
  }

  forward() {
    this.setState({ ...this.state, position: this.state.position + 1 });
  }

  validationState(nextState) {
    const { name, position } = nextState;

    if (typeof name !== 'string' || name.length > 5 || name === '') {
      throw new Error(ERROR_MESSAGE.NAME);
    }

    if (
      typeof position !== 'number' ||
      position < 0 ||
      Number.isNaN(position)
    ) {
      throw new Error(ERROR_MESSAGE.POSITION);
    }
  }
}
