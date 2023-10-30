import User from './User.js';

class App {
  async play() {
    this.user = new User();
    this.carList = await this.user.inputCarName();
    this.attempts = await this.user.inputAttempts();
  }
}

export default App;
