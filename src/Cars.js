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
}
