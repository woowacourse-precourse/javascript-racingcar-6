import User from "./User.js";

class App {
  async play() {
    const user = new User();
    user.inputPlayersName();
  }
}

export default App;
