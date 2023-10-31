import GameController from "./Game/GameController.js"

class App {
    
    constructor() {
        this.gameController = new GameController
    }

    async play() {
        const gameController = this.gameController;
        
        await gameController.inputCars();
        await gameController.inputTryMoveCount();
        
        gameController.start();
        gameController.result();
    }
}

export default App;
