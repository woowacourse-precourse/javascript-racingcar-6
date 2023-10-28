import Data from "./Data.js";
import Controller from "./Controller.js";

class App {
    async play() {
        Data.input.player = await Controller.getPlayer();
        Data.input.number = await Controller.getNumber();
        console.log(Data);
    }
}

export default App;
