import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { MESSAGE } from './constants/message.js';

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
    for (let i = 0; i < playNumber; i++) {
      this.forward();
      this.viewState();
      Console.print('');
    }
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
}
