export default class RacingStateService {
  observers = new Set();
  state = {
    cars: [],
    round: 0,
  };

  get currentState() {
    return this.state;
  }

  set cars(newCars) {
    this.state.cars = newCars.map(car => ({
      name: car,
      progress: 0,
    }));
  }

  set round(newRound) {
    this.state.round = newRound;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.#publish();
  }

  subscribe(subscriber) {
    this.observers.add(subscriber);
  }

  #publish() {
    this.observers.forEach(fn => fn(this.state));
  }
}
