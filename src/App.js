import Data from "./Data.js";
import Controller from "./Controller.js";

class App {
    async play() {
        Data.input.player = await Controller.setPlayer();
        Data.input.number = await Controller.setNumber();
        Controller.raceProgress();
        console.log(Data);
        console.log(Controller.raceResultText(Data.input.player));
        console.log(Controller.winnerText(Data.input.player));
    }
}

export default App;
