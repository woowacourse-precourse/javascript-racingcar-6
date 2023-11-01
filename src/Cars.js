import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { MESSAGE, ERROR_MESSAGE } from './constants/message.js';

export default class Cars {
  constructor({ initialState }) {
    this.state = initialState.map(
      (carName) => new Car({ initialState: { name: carName, position: 0 } }),
    );
  }

  setState(nextState) {
    this.state = nextState;
  }

  race(playNumber) {
    Console.print(MESSAGE.RACE_START);
    for (let i = 0; i < playNumber; i += 1) {
      this.forward();
      this.viewCurrentState();
      Console.print('');
    }
    this.raceResult();
  }

  forward() {
    this.state.forEach((car) => {
      const isForward = Random.pickNumberInRange(0, 9) >= 4;

      if (isForward) {
        car.forward();
      }
    });
  }

  viewCurrentState() {
    this.state.forEach(({ state }) => {
      const { name, position } = state;
      Console.print(`${name} : ${'-'.repeat(position)}`);
    });
  }

  raceResult() {
    const maxPosition = Math.max(
      ...this.state.map(({ state }) => state.position),
    );
    const winners = this.state
      .filter(({ state }) => state.position === maxPosition)
      .map(({ state }) => state.name);

    Console.print(`최종 우승자: ${winners.join(', ')}`);
  }

  validationState(nextState) {
    if (!Array.isArray(nextState)) {
      throw new Error(ERROR_MESSAGE.ARRAY);
    }

    nextState.forEach((name) => {
      if (typeof name !== 'string' || name.length > 5 || name === '') {
        throw new Error(ERROR_MESSAGE.NAME);
      }
    });
  }
}
