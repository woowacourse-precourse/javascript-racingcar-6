import GameController from "./Game/GameController.js"

class App {
    gameController;
    constructor() {
        this.init();
    }
    init() {
        this.gameController = new GameController();
    }
    async play() {
       await this.gameController.inputCars();
    }
}

export default App;
