import GameController from "./game/GameController.js"

class App {
    gameController;
    constructor() {
        this.init();
    }
    init() {
        this.gameController = new GameController();
    }
    async play() {
        const gameController = this.gameController;
        const racing = gameController.racing;
        await gameController.inputCars();
        await gameController.inputTryMoveCount();
        
    }
}

export default App;
