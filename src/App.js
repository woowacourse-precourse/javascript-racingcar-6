import racingcarControll from "./Controll/racingcarControll.js";

class App {
  constructor() {
    this.racingcar = new racingcarControll();
  }

  async play() {
    await this.racingcar.start();
  }
}

export default App;
