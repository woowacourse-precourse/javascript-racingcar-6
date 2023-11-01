export default class Car {
  constructor({ initialState }) {
    this.state = initialState;
  }

  setState(nextState) {
    this.state = nextState;
  }

  forward() {
    this.setState({ ...this.state, position: this.state.position + 1 });
  }
}
