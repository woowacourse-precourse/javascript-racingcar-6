import GameUi from "../view/GameUi.js";
import Game from '../game/Game.js';
class GameManager {
    constructor() {
        this.game = new Game();
        this.gameUi = new GameUi();
    }
    async initGame() {
        const CAR_NAMES_INPUT = await this.gameUi.askCarName();
        this.game.storeCars(CAR_NAMES_INPUT);
    }
    async startRace() {
        const ATTEMPT_COUNT = await this.gameUi.askAttemptCount();
        for (let index = 0; index < ATTEMPT_COUNT; index++) {
            this.game.eachRaceGame();
            this.gameUi.printeachRaceGame();
        }
    }

}
export default GameManager;