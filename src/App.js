import { racingcarGameStart } from "./Controller/RacingCarGameController.js"; 

class App {
  async play() {
    await racingcarGameStart();
  }
}

export default App;
