import Player from "./Player.js";
import Race from "./Race.js";
class App {
  async play() {
    const player = new Player();
    const race = new Race();
    const carList = await player.startRace();
    const inputChance = await player.inputChance();
    race.moveCar(inputChance, carList);
  }
}
const app = new App();
app.play();
export default App;
