import { CarController, Player, CarGame } from "./model/index";

class App {
  async play() {
    const names = (await CarController.setNames()).getNames();
    const attemptIterations = (
      await Player.setattemptIterations()
    ).getattemptIteraions();

    const carGame = CarGame.createCarGame(names, attemptIterations);
    carGame.play();
  }
}

export default App;
