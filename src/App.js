import CarModel from "./models/CarModel.js";
import PlayerModel from "./models/PlayerModel.js";
import RaceController from "./controllers/RaceController.js";
class App {
  async play() {
    const carModel = new CarModel();
    const playerModel = new PlayerModel();
    const raceController = new RaceController();
    const carList = await carModel.startGame();
    const inputChance = await playerModel.inputChance();
    raceController.moveCar(inputChance, carList);
  }
}
const app = new App();
app.play();
export default App;
