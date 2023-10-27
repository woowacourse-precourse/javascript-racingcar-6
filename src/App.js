import { gameController } from "./Controller/RacingCarGameController.js"; 

class App {
  async play() {
    await gameController();
  }
}

export default App;
