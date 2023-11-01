import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default class Cars {
  constructor({ initialState }) {
    this.state = initialState.map(
      (carName) => new Car({ initialState: { name: carName, position: 0 } }),
    );
  }

  setState(nextState) {
    this.state = nextState;
  }

  race() {
    this.state.forEach((car) => {
      const isForward = Random.pickNumberInRange(0, 9) >= 4;

      if (isForward) {
        car.forward();
      }
    });
  }
}
