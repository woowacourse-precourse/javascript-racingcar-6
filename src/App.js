import User from './User.js';
import Cars from './Cars.js';

class App {
  constructor() {
    this.initComponent();
  }

  initComponent() {
    this.user = new User({
      initialState: { playNumber: 0, carList: [] },
    });
  }

  async play() {
    const { user } = this;

    await user.promptCarNames();
    await user.promptPlayNumber();

    this.cars = new Cars({ initialState: user.state.carList });

    for (let i = 0; i < user.state.playNumber; i++) {
      this.cars.race();
      console.log(this.cars.state);
    }
  }
}

export default App;
